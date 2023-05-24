<template>
  <div class="department">
    <PageSearch
      @query-click="handleQueryClick"
      @reset-click="handleResetClick"
      :search-config="searchConfig"
    />
    <PageContent
      ref="contentRef"
      @new-click="handleNewClick"
      @edit-click="handleEditClick"
      :content-config="contentConfig"
    />
    <PageModal ref="modalRef" />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import PageSearch from '@/components/pageSearch/PageSearch.vue'
import PageContent from '@/components/pageContent/PageContent.vue'
import PageModal from './c-cpns/PageModal.vue'

import searchConfig from './config/search.config'
import contentConfig from './config/content.config'

// search中点击搜索和重置时执行content的方法
const contentRef = ref<InstanceType<typeof PageContent>>()
function handleQueryClick(queryInfo: any) {
  contentRef.value?.fetchPageListData(queryInfo)
}
function handleResetClick() {
  contentRef.value?.fetchPageListData()
}

//content中点击新建和编辑时执行modal中的方法
const modalRef = ref<InstanceType<typeof PageModal>>()
function handleNewClick() {
  modalRef.value?.setModalVisible()
}
function handleEditClick(itemData: any) {
  modalRef.value?.setModalVisible(true, itemData)
}
</script>

<style lang="less" scoped></style>
