<template>
  <div class="panel-account">
    <div class="pane-account">
      <el-form
        :model="account"
        :rules="accountRules"
        label-width="60px"
        size="large"
        status-icon
        ref="formRef"
      >
        <el-form-item label="帐号" prop="name">
          <el-input v-model="account.name" />
        </el-form-item>
        <el-form-item label="密码" prop="password">
          <el-input v-model="account.password" show-password />
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script setup lang="ts">
import { reactive, ref } from 'vue'
import type { FormRules, ElForm } from 'element-plus'
import { ElMessage } from 'element-plus'
import useLoginStore from '@/store/login/login'
import type { IAccount } from '@/types'
import { localCache } from '@/utils/cache'

const CACHE_NAME = 'name'
const CACHE_PASSWORD = 'password'

const account = reactive<IAccount>({
  name: localCache.getCache(CACHE_NAME) ?? '',
  password: localCache.getCache(CACHE_PASSWORD) ?? ''
})
//表单校验规则
const accountRules: FormRules = {
  name: [
    { required: true, message: '请输入帐号', trigger: 'blur' },
    {
      pattern: /^[a-z0-9]{3,20}$/,
      message: '必须是3~20数字或字母组成',
      trigger: 'blur'
    }
  ],
  password: [
    { required: true, message: '请输入密码', trigger: 'blur' },
    {
      pattern: /^[a-z0-9]{6,}$/,
      message: '必须是6位以上数字或字母组成',
      trigger: 'blur'
    }
  ]
}

const loginStore = useLoginStore()
const formRef = ref<InstanceType<typeof ElForm>>()

const loginAction = (isRemPwd: boolean) => {
  formRef.value?.validate((valid: boolean) => {
    if (valid) {
      const name = account.name
      const password = account.password
      loginStore.accountLoginAction({ name, password }).then(() => {
        if (isRemPwd) {
          localCache.setCache(CACHE_NAME, name)
          localCache.setCache(CACHE_PASSWORD, password)
        } else {
          localCache.deleteCache(CACHE_NAME)
          localCache.deleteCache(CACHE_PASSWORD)
        }
      })
    } else {
      ElMessage.error('请输入正确的账号和密码！')
    }
  })
}

defineExpose({
  loginAction
})
</script>

<style lang="less" scoped></style>
