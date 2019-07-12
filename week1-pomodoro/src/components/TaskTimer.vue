<script>
import AnimateTimer from './AnimateTimer'

function initData(status) {
  // minutes
  const statusTime = {
    work: 25,
    break: 5,
  }
  return {
    active: false,
    timeRemain: statusTime[status] * 60, // seconds
    currentTime: '00:00',
    timer: null,
  }
}
export default {
  components: {
    AnimateTimer,
  },
  props: {
    status: {
      type: String,
      default: 'work',
    },
    task: {
      type: Object,
      default: () => {},
    },
  },
  data() {
    return initData(this.status)
  },
  computed: {
    progress() {
      const { timeRemain } = initData(this.status)
      const workingTime = timeRemain - this.timeRemain
      return Math.floor((workingTime / timeRemain) * 100)
    },
  },
  watch: {
    status() {
      this.resetTimer()
    },
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
      !this.active ? this.timeReducer() : this.stopTimer()
      this.active = !this.active
    },
    resetTimer() {
      // TODO: modal to confirm reset
      this.stopTimer()
      // would reset the timeRemain
      Object.assign(this.$data, initData(this.status))
    },
    stopTimer() {
      clearInterval(this.timer)
    },
    timerComplete() {
      this.status = 'break'
    },
    timeReducer() {
      this.timer = setInterval(() => {
        this.timeRemain > 0 ? (this.timeRemain -= 1) : this.stopTimer()
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
      <AnimateTimer :time="currentTime" />
      <div>
        {{ task.name }}
        <ul :class="$style['tomato-list']">
          <li v-for="(tomato, index) in task.records" :key="index" :class="$style.tomato"></li>
        </ul>
      </div>
    </div>
    <a-progress :percent="progress" status="active" :show-info="false" />
    <a-button-group :class="$style.buttons">
      <a-button @click="completeTask">
        <a-icon type="check-circle" />
      </a-button>
      <a-button @click="toggleTimer">
        <a-icon :type="active ? 'pause-circle' : 'play-circle'" />
      </a-button>
      <a-button @click="resetTimer">
        <a-icon type="undo" />
      </a-button>
    </a-button-group>
  </div>
</template>
<style lang="scss" module>
@import '@design';

.wrapper {
  background-color: white;
  box-shadow: 0 2px 8px #f0f1f2;
}
.content {
  padding: 10px;
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
.buttons {
  display: flex;
  :global(.ant-btn) {
    flex: 1;
  }
}
</style>
