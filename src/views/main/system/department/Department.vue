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
    >
      <!-- 自定义内容 -->
    </PageContent>
    <PageModal ref="modalRef" :modal-config="modalConfigRef" />
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import useMainStore from '@/store/main/main'
import PageSearch from '@/components/pageSearch/PageSearch.vue'
import PageContent from '@/components/pageContent/PageContent.vue'
import PageModal from '@/components/pageModal/PageModal.vue'

import searchConfig from './config/search.config'
import contentConfig from './config/content.config'
import modalConfig from './config/modal.config'

// 对modalConfig进行操作,配置select的options
const modalConfigRef = computed(() => {
  const mainStore = useMainStore()
  const departments = mainStore.entireDepartments.map((item) => {
    return { label: item.name, value: item.id }
  })
  modalConfig.formItems.forEach((item: any) => {
    if (item.prop === 'parentId') {
      item.options.push(...departments)
    }
  })
  return modalConfig
})

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
