<template>
  <div class="role">
    <PageSearch :search-config="searchConfig" />
  </div>
</template>

<script setup lang="ts">
import PageSearch from '@/components/pageSearch/PageSearch.vue'
import searchConfig from './config/search.config'
</script>

<style lang="less" scoped></style>
