<template>
  <div class="base-echart">
    <div class="echart" ref="echartRef"></div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import * as echarts from 'echarts'
import type { EChartsOption } from 'echarts'
interface IProps {
  option: EChartsOption
}

const props = defineProps<IProps>()
const echartRef = ref<HTMLElement>()

onMounted(() => {
  //初始化echarts实例
  const echartInstance = echarts.init(echartRef.value!)
  echartInstance.setOption(props.option)
})
</script>

<style lang="less" scoped>
.echart {
  height: 300px;
}
</style>
