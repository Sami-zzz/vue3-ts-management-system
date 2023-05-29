<template>
  <div class="dashboard">
    <el-row :gutter="10">
      <template v-for="item in amountList" :key="item.amount">
        <el-col :span="6">
          <CountCard v-bind="item" />
        </el-col>
      </template>
    </el-row>
  </div>
</template>

<script setup lang="ts">
import { storeToRefs } from 'pinia'
import CountCard from './c-cpns/countCard/CountCard.vue'
import useAnalysisStore from '@/store/main/analysis/analysis'

const analysisStore = useAnalysisStore()
analysisStore.fetchAmountListAction()

const { amountList } = storeToRefs(analysisStore)
</script>

<style lang="less" scoped></style>
