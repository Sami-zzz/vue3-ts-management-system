<template>
  <div class="login-panel">
    <div class="login-panel">
      <h1 class="title">后台管理系统</h1>
      <div class="tabs">
        <el-tabs type="border-card" stretch v-model="activeTabName">
          <el-tab-pane name="account">
            <template #label>
              <div class="label">
                <el-icon>
                  <UserFilled />
                </el-icon>
                <span class="text">帐号登录</span>
              </div>
            </template>
            <PanelAccount ref="accountRef" />
          </el-tab-pane>

          <el-tab-pane name="phone">
            <template #label>
              <div class="label">
                <el-icon>
                  <Cellphone />
                </el-icon>
                <span class="text">手机登录</span>
              </div>
            </template>
            <PanelPhone ref="phoneRef" />
          </el-tab-pane>
        </el-tabs>
      </div>

      <div class="controls">
        <el-checkbox v-model="isRemPwd" label="记住密码" size="large" />
        <el-link type="primary">忘记密码</el-link>
      </div>
      <el-button
        class="login-btn"
        type="primary"
        size="large"
        @click="handleLoginBtnClick"
      >
        立即登录
      </el-button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import PanelAccount from './PanelAccount.vue'
import PanelPhone from './PanelPhone.vue'

const activeTabName = ref('account')
const isRemPwd = ref(true)

const accountRef = ref<InstanceType<typeof PanelAccount>>()
const phoneRef = ref<InstanceType<typeof PanelPhone>>()

function handleLoginBtnClick() {
  if (activeTabName.value === 'account') {
    accountRef.value?.loginAction()
  } else {
    console.log('用户在进行手机登录')
  }
}
</script>

<style lang="less" scoped>
.login-panel {
  width: 330px;
  margin-bottom: 150px;

  .title {
    text-align: center;
    margin-bottom: 15px;
  }

  .label {
    display: flex;
    align-items: center;
    justify-content: center;

    .text {
      margin-left: 5px;
    }
  }

  .controls {
    margin-top: 12px;
    display: flex;

    justify-content: space-between;
  }

  .login-btn {
    margin-top: 10px;
    width: 100%;
  }
}
</style>
