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
      const confirmText = {
        work: {
          title: 'Are you sure to reset this tomato?',
          content: "If you reset, the time wouldn't record in the task.",
        },
        break: {
          title: "Don't be exhausted!",
          content: 'Are you sure to skip the rest?',
        },
      }
      this.$confirm({
        title: confirmText[this.mode].title,
        content: confirmText[this.mode].content,

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
      if (endByWork) {
        this.$emit('update-record', this.task)
        this.toggleTimer()
      }
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
  <div :class="[$style.wrapper, $style[`wrapper--${mode}`]]">
    <div :class="$style.dot"></div>
    <div :class="$style.content">
      <div>
        <div>{{ task.name }}</div>
        <ul :class="$style['tomato-list']">
          <li v-for="(tomato, index) in task.records" :key="index" :class="$style.tomato"></li>
        </ul>
      </div>
      <AnimateTimer :time="currentTime" :class="$style.timer" />
      <div :class="$style.controls">
        <a-button :class="$style['button--side']" shape="circle" @click="completeTask">
          <a-icon type="check" />
        </a-button>
        <a-button
          :class="$style['button--center']"
          type="primary"
          shape="circle"
          size="large"
          @click="toggleTimer"
        >
          <a-icon :type="playing ? 'pause' : 'caret-right'" />
        </a-button>
        <a-button
          v-show="playing"
          :class="$style['button--side']"
          shape="circle"
          @click="stopTimer"
        >
          <a-icon type="close" />
        </a-button>
      </div>
    </div>
  </div>
</template>
<style lang="scss" module>
@import '@design';

.wrapper {
  background-color: white;
  box-shadow: 0 2px 8px #f0f1f2;
  border-radius: $size-task-border-radius;
  margin-bottom: 15px;
  position: relative;
  overflow: hidden;
  &--break {
    .timer {
      color: white;
    }
    .dot {
      transform: scale(100);
      background-color: $color-scondary;
      transition: all 1s cubic-bezier(0.13, 0.56, 0.59, 0.96) 0.5s;
    }
  }
}
.content {
  padding: 25px;
  text-align: center;
  z-index: 1;
}

.tomato-list {
  padding: 0;
  margin-bottom: 0;
}
.tomato {
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background-color: $color-primary;
  display: inline-block;
  margin: 0 5px;
}
.controls {
  position: relative;
  .button {
    &--side {
      position: absolute;
      top: 50%;
      &:first-child {
        left: 50%;
        transform: translate(-60px, -50%);
      }
      &:last-child {
        right: 50%;
        transform: translate(60px, -50%);
      }
    }
  }
}
.timer {
  transition: color 1.5s;
}
.dot {
  position: absolute;
  left: 50%;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: $color-primary;
  bottom: 25px;
  transform: translateX(-50%);
  transition: all 1s cubic-bezier(0.13, 0.56, 0.59, 0.96) 0.5s;
  z-index: 0;
}
</style>
