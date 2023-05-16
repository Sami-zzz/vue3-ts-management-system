<template>
  <div class="main-header">
    <div class="menu-icon" @click="handleFoldIconClick">
      <el-icon size="28px">
        <component :is="isFold ? 'Fold' : 'Expand'" />
      </el-icon>
    </div>
    <div class="content">
      <div class="breadcrumb">面包屑</div>
      <div class="userInfo">个人信息</div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
const emit = defineEmits(['foldChange'])
const isFold = ref(false)
const handleFoldIconClick = () => {
  isFold.value = !isFold.value
  emit('foldChange', isFold.value)
}
</script>

<style lang="less" scoped>
.main-header {
  display: flex;
  align-items: center;
  flex: 1;
  height: 100%;

  .menu-icon {
    display: flex;
    align-items: center;
    cursor: pointer;
  }

  .content {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex: 1;
    padding: 0 18px;
  }
}
</style>
