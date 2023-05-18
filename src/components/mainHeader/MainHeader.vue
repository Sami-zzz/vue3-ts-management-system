<template>
  <div class="main-header">
    <div class="menu-icon" @click="handleFoldIconClick">
      <el-icon size="28px">
        <component :is="isFold ? 'Fold' : 'Expand'" />
      </el-icon>
    </div>
    <div class="content">
      <Breadcrumb />
      <HeaderInfo />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import HeaderInfo from './c-cpns/HeaderInfo.vue'
import Breadcrumb from './c-cpns/Breadcrumb.vue'
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
