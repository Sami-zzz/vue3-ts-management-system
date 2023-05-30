<template>
  <div class="dashboard">
    <!-- 顶部数据 -->
    <ElRow :gutter="10">
      <template v-for="item in amountList" :key="item.amount">
        <ElCol :span="6">
          <CountCard v-bind="item" />
        </ElCol>
      </template>
    </ElRow>
    <!-- 中间图表 -->
    <ElRow :gutter="10">
      <ElCol :span="7">
        <ChartCard><PieEChart :pie-data="showGoodsCategoryCount" /></ChartCard>
      </ElCol>
      <ElCol :span="10">
        <ChartCard> </ChartCard>
      </ElCol>
      <ElCol :span="7">
        <ChartCard> </ChartCard>
      </ElCol>
    </ElRow>
    <!-- 底部图表 -->
    <ElRow :gutter="10">
      <ElCol :span="12">
        <ChartCard> </ChartCard>
      </ElCol>
      <ElCol :span="12">
        <ChartCard> </ChartCard>
      </ElCol>
    </ElRow>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { storeToRefs } from 'pinia'
import useAnalysisStore from '@/store/main/analysis/analysis'
import CountCard from './c-cpns/countCard/CountCard.vue'
import ChartCard from './c-cpns/chartCard/ChartCard.vue'
import PieEChart from '@/components/pageECharts/src/PieEChart.vue'
//发送请求
const analysisStore = useAnalysisStore()
analysisStore.fetchAmountListAction()
//获取数据
const { amountList, goodsCategoryCount } = storeToRefs(analysisStore)
const showGoodsCategoryCount = computed(() => {
  return goodsCategoryCount.value.map((item) => ({
    name: item.name,
    value: item.goodsCount
  }))
})
</script>

<style lang="less" scoped>
.el-row {
  margin-bottom: 10px;
}
</style>
