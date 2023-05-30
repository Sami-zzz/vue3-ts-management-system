<template>
  <div class="dashboard">
    <!-- 顶部数据 -->
    <el-row :gutter="10">
      <template v-for="item in amountList" :key="item.amount">
        <el-col :span="6">
          <CountCard v-bind="item" />
        </el-col>
      </template>
    </el-row>
    <!-- 中间图表 -->
    <el-row :gutter="10">
      <el-col :span="7">
        <chart-card><PieEChart /> </chart-card>
      </el-col>
      <el-col :span="10">
        <chart-card> </chart-card>
      </el-col>
      <el-col :span="7">
        <chart-card> </chart-card>
      </el-col>
    </el-row>
    <!-- 底部图表 -->
    <el-row :gutter="10">
      <el-col :span="12">
        <chart-card> </chart-card>
      </el-col>
      <el-col :span="12">
        <chart-card> </chart-card>
      </el-col>
    </el-row>
  </div>
</template>

<script setup lang="ts">
import { storeToRefs } from 'pinia'
import useAnalysisStore from '@/store/main/analysis/analysis'
import CountCard from './c-cpns/countCard/CountCard.vue'
import ChartCard from './c-cpns/chartCard/ChartCard.vue'
import PieEChart from '@/components/pageECharts/src/PieEChart.vue'

const analysisStore = useAnalysisStore()
analysisStore.fetchAmountListAction()

const { amountList } = storeToRefs(analysisStore)
</script>

<style lang="less" scoped>
.el-row {
  margin-bottom: 10px;
}
</style>
