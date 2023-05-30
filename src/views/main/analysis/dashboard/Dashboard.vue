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
        <ChartCard header="各类商品数量"
          ><PieEChart :pie-data="showGoodsCategoryCount"
        /></ChartCard>
      </ElCol>
      <ElCol :span="10">
        <ChartCard header="各地商品销量">
          <MapEChart :map-data="showGoodsAddressSale"
        /></ChartCard>
      </ElCol>
      <ElCol :span="7">
        <ChartCard header="各类商品数量"
          ><RoseEChart :rose-data="showGoodsCategoryCount"
        /></ChartCard>
      </ElCol>
    </ElRow>
    <!-- 底部图表 -->
    <ElRow :gutter="10">
      <ElCol :span="12">
        <ChartCard header="各类商品销量">
          <LineEChart v-bind="showGoodsCategorySale"
        /></ChartCard>
      </ElCol>
      <ElCol :span="12">
        <ChartCard header="各类商品收藏量">
          <BarEChart v-bind="showGoodsCategoryFavor"
        /></ChartCard>
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
import RoseEChart from '@/components/pageECharts/src/RoseEChart.vue'
import LineEChart from '@/components/pageECharts/src/LineEChart.vue'
import BarEChart from '@/components/pageECharts/src/BarEChart.vue'
import MapEChart from '@/components/pageECharts/src/MapEChart.vue'

//发送请求
const analysisStore = useAnalysisStore()
analysisStore.fetchAmountListAction()
//获取数据
const {
  amountList,
  goodsCategoryCount,
  goodsCategorySale,
  goodsCategoryFavor,
  goodsAddressSale
} = storeToRefs(analysisStore)
const showGoodsCategoryCount = computed(() => {
  return goodsCategoryCount.value.map((item) => ({
    name: item.name,
    value: item.goodsCount
  }))
})
const showGoodsCategorySale = computed(() => {
  const labels = goodsCategorySale.value.map((item) => item.name)
  const values = goodsCategorySale.value.map((item) => item.goodsCount)
  return { labels, values }
})
const showGoodsCategoryFavor = computed(() => {
  const labels = goodsCategoryFavor.value.map((item) => item.name)
  const values = goodsCategoryFavor.value.map((item) => item.goodsFavor)
  return { labels, values }
})

const showGoodsAddressSale = computed(() => {
  return goodsAddressSale.value.map((item) => ({
    name: item.address,
    value: item.count
  }))
})
</script>

<style lang="less" scoped>
.el-row {
  margin-bottom: 10px;
}
</style>
