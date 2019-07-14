<script>
import AnimateTimer from './AnimateTimer'

function initData(mode) {
  // minutes
  const modeTime = {
    work: 25,
    break: 5,
  }
  return {
    playing: false,
    timeRemain: modeTime[mode] * 60, // seconds
    currentTime: `${modeTime[mode]}00`,
    timer: null,
  }
}
export default {
  components: {
    AnimateTimer,
  },
  props: {
    task: {
      type: Object,
      default: () => {},
    },
  },
  data() {
    return {
      mode: 'work',
      ...initData(this.mode),
    }
  },
  computed: {
    progress() {
      const { timeRemain } = initData(this.mode)
      const workingTime = timeRemain - this.timeRemain
      return Math.floor((workingTime / timeRemain) * 100)
    },
  },
  watch: {
    timeRemain: {
      handler: 'setCurrentTime',
      immediate: true,
    },
  },
  methods: {
    completeTask() {
      this.$emit('complete', this.task)
    },
    // play & pause the timer
    toggleTimer() {
      !this.playing ? this.timeReducer() : this.pauseTimer()
      this.playing = !this.playing
    },
    pauseTimer() {
      clearInterval(this.timer)
    },
    stopTimer() {
      this.$confirm({
        title: '是否要放棄目前進行中的蕃茄？',
        content: '放棄此番茄將不會紀錄此次計時',
        onOk: () => {
          this.resetTimer()
        },
      })
    },
    resetTimer() {
      this.pauseTimer()
      Object.assign(this.$data, initData(this.mode))
    },
    timerEnds() {
      const endByWork = this.mode === 'work'
      // switch mode
      this.mode = endByWork ? 'break' : 'work'
      this.resetTimer()
      // start timer
      if (endByWork) this.toggleTimer()
    },
    timeReducer() {
      this.timer = setInterval(() => {
        this.timeRemain > 0 ? (this.timeRemain -= 1) : this.timerEnds()
      }, 1000)
    },

    formatNumber(number) {
      while ((number + '').length < 2) {
        number = `0${number}`
      }
      return number
    },
    covertSecondsToTime(s) {
      const min = Math.floor(s / 60)
      const sec = s % 60
      return `${this.formatNumber(min)}${this.formatNumber(sec)}`
    },
    setCurrentTime(time) {
      this.currentTime = this.covertSecondsToTime(time)
    },
  },
}
</script>
<template>
  <div :class="$style.wrapper">
    <div :class="$style.content">
      <div>
        {{ task.name }}
        <ul :class="$style['tomato-list']">
          <li v-for="(tomato, index) in task.records" :key="index" :class="$style.tomato"></li>
        </ul>
      </div>
      <AnimateTimer :time="currentTime" />
      <div :class="$style.buttons">
        <a-button shape="circle" @click="completeTask">
          <a-icon type="check" />
        </a-button>
        <a-button type="primary" shape="circle" size="large" @click="toggleTimer">
          <a-icon :type="playing ? 'pause' : 'caret-right'" />
        </a-button>
        <a-icon v-show="playing" @click="stopTimer" type="stop" />
      </div>
    </div>
    <!-- <a-progress :percent="progress" mode="active" :show-info="false" /> -->
  </div>
</template>
<style lang="scss" module>
@import '@design';

.wrapper {
  background-color: white;
  box-shadow: 0 2px 8px #f0f1f2;
}
.content {
  padding: 25px;
  text-align: center;
}

.tomato-list {
  padding: 0;
  margin-left: 0;
}
.tomato {
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background-color: $color-primary;
  display: inline-block;
  margin: 0 5px;
}
</style>
