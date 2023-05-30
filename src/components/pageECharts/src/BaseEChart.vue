<template>
  <div class="base-echart">
    <div class="echart" ref="echartRef"></div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, watchEffect } from 'vue'
import * as echarts from 'echarts'
import type { EChartsOption } from 'echarts'
import ChinaJSON from '../data/China.json'
echarts.registerMap('China', ChinaJSON as any)

interface IProps {
  option: EChartsOption
}

const props = defineProps<IProps>()
const echartRef = ref<HTMLElement>()

onMounted(() => {
  //初始化echarts实例
  const echartInstance = echarts.init(echartRef.value!)
  //监听option变化
  watchEffect(() => echartInstance.setOption(props.option))

  window.addEventListener('resize', () => {
    echartInstance.resize()
  })
})
</script>

<style lang="less" scoped>
.echart {
  height: 300px;
}
</style>
