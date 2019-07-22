<script>
import echarts from 'echarts'
import Layout from '@layouts/main'
const animationDuration = 6000
export default {
  components: {
    Layout,
  },
  data() {
    return {
      chart: null,
    }
  },
  mounted() {
    this.$nextTick(() => {
      this.initChart()
    })
  },
  beforeDestroy() {
    if (!this.chart) {
      return
    }
    this.chart.dispose()
    this.chart = null
  },
  methods: {
    initChart() {
      this.chart = echarts.init(document.getElementById('chart'))
      this.chart.setOption({
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            // 坐标轴指示器，坐标轴触发有效
            type: 'shadow', // 默认为直线，可选为：'line' | 'shadow'
          },
        },
        grid: {
          top: 10,
          left: '2%',
          right: '2%',
          bottom: '3%',
          containLabel: true,
        },
        xAxis: [
          {
            type: 'category',
            data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
            axisTick: {
              alignWithLabel: true,
            },
          },
        ],
        yAxis: [
          {
            type: 'value',
            axisTick: {
              show: false,
            },
          },
        ],
        series: [
          {
            name: 'Tomato',
            type: 'bar',
            barWidth: '30%',
            data: (function() {
              var res = []
              var len = 0
              while (len < 7) {
                res.push((Math.random() * 10 + 5).toFixed(0))
                len++
              }
              return res
            })(),
            animationDuration,
            color: ['#EA5548'],
          },
          {
            name: 'Completed Task',
            type: 'line',
            data: (function() {
              var res = []
              var len = 0
              while (len < 7) {
                res.push((Math.random() * 10 + 5).toFixed(0))
                len++
              }
              return res
            })(),
            animationDuration,
            color: ['#7C9460'],
          },
        ],
      })
    },
  },
}
</script>

<template>
  <Layout>
    <a-row :class="$style.header" :gutter="16">
      <a-col :span="12">
        <a-card title="Today" :bordered="false">
          <a-row>
            <a-col :span="12">
              <div :class="[$style.number, $style.task]">9</div>
              <div :class="$style.meta">Completed Tasks</div>
            </a-col>
            <a-col :span="12">
              <div :class="$style.number">7</div>
              <div :class="$style.meta">Tomatoes</div>
            </a-col>
          </a-row>
        </a-card>
      </a-col>
      <a-col :span="12">
        <a-card title="Week" :bordered="false">
          <a-row>
            <a-col :span="12">
              <div :class="[$style.number, $style.task]">54</div>
              <div :class="$style.meta">Completed Tasks</div>
            </a-col>
            <a-col :span="12">
              <div :class="$style.number">48</div>
              <div :class="$style.meta">Tomatoes</div>
            </a-col>
          </a-row>
        </a-card>
      </a-col>
    </a-row>
    <a-card :bordered="false">
      <div id="chart" :class="$style.chart"></div>
    </a-card>
  </Layout>
</template>
<style lang="scss" module>
@import '@design';

.header {
  margin-bottom: 15px;
}
.meta {
  color: rgba(0, 0, 0, 0.45);
}
.number {
  font-size: 3em;
  color: $color-primary;
  &.task {
    color: $color-scondary;
  }
}
.chart {
  width: 100%;
  max-width: 100%;
  height: 300px;
}
</style>
