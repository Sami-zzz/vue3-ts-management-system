<template>
  <div class="modal">
    <el-dialog
      v-model="dialogVisible"
      :title="isEditRef ? '编辑用户' : '新建用户'"
      width="30%"
      center
    >
      <div class="form">
        <el-form :model="formData" label-width="80px" size="large">
          <el-form-item label="用户名" prop="name">
            <el-input v-model="formData.name" placeholder="请输入用户名" />
          </el-form-item>
          <el-form-item label="真实姓名" prop="realname">
            <el-input
              v-model="formData.realname"
              placeholder="请输入真实姓名"
            />
          </el-form-item>
          <el-form-item label="密码" prop="password" v-if="!isEditRef">
            <el-input
              v-model="formData.password"
              placeholder="请输入密码"
              show-password
            />
          </el-form-item>
          <el-form-item label="手机号码" prop="cellphone">
            <el-input
              v-model="formData.cellphone"
              placeholder="请输入手机号码"
            />
          </el-form-item>
          <el-form-item label="选择角色" prop="roleId">
            <el-select
              v-model="formData.roleId"
              placeholder="请选择角色"
              style="width: 100%"
            >
              <template v-for="item in entireRoles" :key="item.id">
                <el-option :value="item.id" :label="item.name" />
              </template>
            </el-select>
          </el-form-item>
          <el-form-item label="选择部门" prop="departmentId">
            <el-select
              v-model="formData.departmentId"
              placeholder="请选择部门"
              style="width: 100%"
            >
              <template v-for="item in entireDepartments" :key="item.id">
                <el-option :value="item.id" :label="item.name" />
              </template>
            </el-select>
          </el-form-item>
        </el-form>
      </div>
      <template #footer>
        <span class="dialog-footer">
          <el-button @click="dialogVisible = false">取消</el-button>
          <el-button type="primary" @click="handleConfirmClick">
            确定
          </el-button>
        </span>
      </template>
    </el-dialog>
  </div>
</template>

<script setup lang="ts">
import useMainStore from '@/store/main/main'
import useSystemStore from '@/store/main/system/system'
import { storeToRefs } from 'pinia'
import { ref, reactive } from 'vue'
const formData = reactive<any>({
  name: '',
  realname: '',
  password: '',
  cellphone: '',
  roleId: '',
  departmentId: ''
})

const mainStore = useMainStore()
const systemStore = useSystemStore()
const { entireRoles, entireDepartments } = storeToRefs(mainStore)

const dialogVisible = ref(false)
const isEditRef = ref(false)
const itemRef = ref()

const setModalVisible = (isEdit: boolean = false, itemData?: any) => {
  dialogVisible.value = true
  isEditRef.value = isEdit
  if (isEdit && itemData) {
    for (const key in formData) {
      formData[key] = itemData[key]
    }
    itemRef.value = itemData
  } else {
    for (const key in formData) {
      formData[key] = ''
    }
    itemRef.value = null
  }
}

const handleConfirmClick = () => {
  dialogVisible.value = false
  if (!isEditRef.value) {
    systemStore.newUserAction(formData)
  } else {
    systemStore.editUserAction(itemRef.value.id, formData)
  }
}

defineExpose({
  setModalVisible
})
</script>

<style lang="less" scoped></style>
