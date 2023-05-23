<template>
  <div class="user">
    <UserSearch
      @query-click="handleQueryClick"
      @reset-click="handleResetClick"
    />
    <UserContent
      ref="contentRef"
      @new-click="handleNewClick"
      @edit-click="handleEditClick"
    />
    <UserModal ref="modalRef" />
  </div>
</template>

<script setup lang="ts">
import UserSearch from './c-cpns/UserSearch.vue'
import UserContent from './c-cpns/UserContent.vue'
import UserModal from './c-cpns/UserModal.vue'
import { ref } from 'vue'

const contentRef = ref<InstanceType<typeof UserContent>>()
const modalRef = ref<InstanceType<typeof UserModal>>()
const handleQueryClick = (formData: any) => {
  contentRef.value?.fetchUsersListData(formData)
}

const handleResetClick = () => {
  contentRef.value?.fetchUsersListData()
}

const handleNewClick = () => {
  modalRef.value?.setModalVisible()
}

const handleEditClick = (itemData: any) => {
  modalRef.value?.setModalVisible(true, itemData)
}
</script>

<style lang="less" scoped>
.user {
  border-radius: 8px;
  overflow: hidden;
}
</style>
