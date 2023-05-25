<template>
  <div class="menu">
    <PageContent :content-config="contentConfig" />
  </div>
</template>

<script setup lang="ts">
import PageContent from '@/components/pageContent/PageContent.vue'
import contentConfig from './config/content.config'
</script>

<style lang="less" scoped></style>
