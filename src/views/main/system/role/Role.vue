<template>
  <div class="role">
    <PageSearch
      :search-config="searchConfig"
      @query-click="handleQueryClick"
      @reset-click="handleResetClick"
    />
    <PageContent
      :content-config="contentConfig"
      ref="contentRef"
      @edit-click="handleEditClick"
      @new-click="handleNewClick"
    />
    <PageModal
      :modal-config="modalConfig"
      ref="modalRef"
      :other-info="otherInfo"
    >
      <template #menulist>
        <el-tree
          ref="treeRef"
          :data="entireMenu"
          show-checkbox
          node-key="id"
          :props="{ children: 'children', label: 'name' }"
          @check="handleElTreeCheck"
        ></el-tree>
      </template>
    </PageModal>
  </div>
</template>

<script setup lang="ts">
import { nextTick, ref } from 'vue'
import PageSearch from '@/components/pageSearch/PageSearch.vue'
import searchConfig from './config/search.config'
import PageContent from '@/components/pageContent/PageContent.vue'
import contentConfig from './config/content.config'
import PageModal from '@/components/pageModal/PageModal.vue'
import modalConfig from './config/modal.config'

import usePageContent from '@/hooks/usePageContent'
import usePageModal from '@/hooks/usePageModal'
import useMainStore from '@/store/main/main'

import { mapMenusListToIds } from '@/utils/mapMenu'
import { storeToRefs } from 'pinia'
import type { ElTree } from 'element-plus'

const { contentRef, handleQueryClick, handleResetClick } = usePageContent()
const { modalRef, handleEditClick, handleNewClick } = usePageModal(editCallback)

//获取所有菜单数据
const mainStore = useMainStore()
const { entireMenu } = storeToRefs(mainStore)
//菜单权限数据props
const otherInfo = ref({})
const handleElTreeCheck = (_: any, data2: any) => {
  const menuList = [...data2.checkedKeys, ...data2.halfCheckedKeys]
  otherInfo.value = { menuList }
}

//编辑角色时显示所分配的菜单
const treeRef = ref<InstanceType<typeof ElTree>>()
function editCallback(itemData: any) {
  nextTick(() => {
    const menuIds = mapMenusListToIds(itemData.menuList)
    treeRef.value?.setCheckedKeys(menuIds)
  })
}
</script>

<style lang="less" scoped></style>
