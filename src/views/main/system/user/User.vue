<template>
  <div class="user">
    <UserSearch
      @query-click="handleQueryClick"
      @reset-click="handleResetClick"
    />
    <UserContent ref="contentRef" />
  </div>
</template>

<script setup lang="ts">
import UserSearch from './c-cpns/UserSearch.vue'
import UserContent from './c-cpns/UserContent.vue'
import { ref } from 'vue'

const contentRef = ref<InstanceType<typeof UserContent>>()
const handleQueryClick = (formData: any) => {
  contentRef.value?.fetchUsersListData(formData)
}

const handleResetClick = () => {
  contentRef.value?.fetchUsersListData()
}
</script>

<style lang="less" scoped>
.user {
  border-radius: 8px;
  overflow: hidden;
}
</style>
