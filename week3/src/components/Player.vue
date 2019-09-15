

<script>
import BaseButton from '@components/BaseButton'

export default {
  name: 'Player',
  components: {
    BaseButton,
  },
  props: {
    token: {
      type: String,
    },
    playback: {
      type: Object,
    },
  },
  filters: {
    millisecondsToTime: function(ms) {
      const formatNumber = (number) => {
        if ((number + '').length < 2) {
          number = `0${number}`
        }
        return number
      }
      const totalSec = ms / 1000
      const min = Math.floor(totalSec / 60)
      const sec = Math.floor(totalSec % 60)
      return `${min}:${formatNumber(sec)}`
    },
  },
  data() {
    return {
      isPlaying: false,

      suffle_state: false,
      repeat_state: 'off', // track, context, off
    }
  },
  methods: {
    skipToPreviousTrack() {},
    skipToNextTrack() {},
    togglePlaying() {
      this.isPlaying = !this.isPlaying
    },
    toggleShuffleState() {
      this.suffle_state = !this.suffle_state
    },
    setRepeatMode() {
      const modeMap = ['off', 'context', 'track']
      const currentModeIndex = modeMap.indexOf(this.repeat_state)
      const setToModeIndex =
        currentModeIndex === modeMap.length - 1 ? 0 : currentModeIndex + 1
      this.repeat_state = modeMap[setToModeIndex]
    },
  },
}
</script>
<template>
  <div :class="{'player--playing': isPlaying}">
    <div class="player__turntable">
      <div class="disk">
        <img src="https://source.unsplash.com/random/500x500" alt class="disk__img" />
        <div class="disk__hole"></div>
      </div>
      <template v-if="isPlaying">
        <img class="disk__effect disk__effect--left" src="@src/assets/turning_effect_left.svg" />
        <img class="disk__effect disk__effect--right" src="@src/assets/turning_effect_right.svg" />
      </template>

      <div class="player__controller">
        <div class="player__controller__group">
          <BaseButton type="circle" @click="skipToNextTrack">
            <img class="button__icon" src="@src/assets/next.svg" />
          </BaseButton>
          <BaseButton type="circle" @click="skipToPreviousTrack">
            <img class="button__icon" src="@src/assets/pre.svg" />
          </BaseButton>
        </div>
        <div class="player__controller__group">
          <BaseButton
            type="circle"
            :class="{ 'button--active': repeat_state !== 'off', 'button--active-track': repeat_state === 'track'}"
            @click="setRepeatMode"
          >
            <img class="button__icon" src="@src/assets/repeat.svg" />
          </BaseButton>
          <BaseButton
            @click="toggleShuffleState"
            type="circle"
            :class="{ 'button--active': suffle_state }"
          >
            <img class="button__icon" src="@src/assets/random.svg" />
          </BaseButton>
        </div>
      </div>
    </div>
    <div class="player__panel">
      <div class="player__panel__top">
        <div class="playing__info">
          <h3>{{ playback.name }}</h3>
          <div v-for="artist in playback.artists" :key="artist.id">{{artist.name}}</div>
        </div>
        <div class="player__volumn">
          <input name="volume" min="0" max="11" type="range" />
          <img class="volume__icon" src="@src/assets/volume.svg" />
        </div>
      </div>

      <div class="player__spinning">
        <img class="spinning__img" src="@src/assets/spinning.svg" />
        <BaseButton type="circle" @click="togglePlaying">
          <img v-if="isPlaying" class="button__icon" src="@src/assets/pause.svg" />
          <img v-else class="button__icon" src="@src/assets/play.svg" />
        </BaseButton>
      </div>

      <div class="playing__progress">
        <span>{{ playback.progress_ms | millisecondsToTime }}</span>
        <input
          v-model="playback.progress_ms"
          name="progress"
          min="0"
          :max="playback.duration_ms"
          type="range"
        />
        <span>{{ playback.duration_ms | millisecondsToTime }}</span>
      </div>
    </div>
  </div>
</template>
<style  lang="scss">
@import '@design';

.player {
  &__turntable {
    display: flex;
    padding: 15px 25px;
    justify-content: space-between;
  }
  &__controller {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
  &__panel {
    position: relative;
    flex: 1;
    padding: 15px 25px;
    display: flex;
    flex-direction: column;
    &__top {
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin-bottom: 30px;
    }
  }
  &__spinning {
    position: absolute;
    transform: translate(25px, calc(-100% + 73px));
    font-size: 0;
    .button {
      position: absolute;
      right: 2px;
      bottom: 5px;
      width: 88px;
      height: 88px;
      margin-bottom: 0;
      &__icon {
        width: 40%;
      }
    }
    .spinning__img {
      pointer-events: none;
      transition: transform $duration-transition-base linear;
      transform: rotate(-15deg);
      transform-origin: calc(100% - 50px) calc(100% - 50px);
      will-change: transform;
    }
  }
  &__volumn {
    display: flex;
    .volume__icon {
      width: 1em;
    }
  }
  &--playing {
    .disk {
      animation-play-state: running;
    }
    .spinning__img {
      transform: rotate(0);
    }
  }
}

.disk {
  flex-basis: 80%;
  position: relative;
  margin-left: 25px;
  animation: spinning $duration-animation-base infinite linear;
  animation-play-state: paused;
  &__img {
    border-radius: 50%;
    border: 3px solid $color-primary;
    width: 100%;
    box-shadow: $color-box-shadow;
  }
  &__hole {
    position: absolute;
    width: 100px;
    height: 100px;
    background: white;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    border-radius: 50%;
    border: 3px solid $color-primary;
    box-shadow: inset $color-box-shadow;
  }
  &__effect {
    position: absolute;
    animation: shake $duration-animation-base * 2 infinite linear;
    &--left {
      top: 18%;
      left: 6%;
    }
    &--right {
      top: 35%;
      right: 13%;
    }
  }
}
.playing {
  &__progress {
    display: flex;
    align-items: center;
  }
}

@keyframes spinning {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(359deg);
  }
}

@keyframes shake {
  from,
  to {
    transform: translate3d(0, 0, 0);
  }

  10%,
  30%,
  50%,
  70%,
  90% {
    transform: translate3d(0, -10px, 0);
  }

  20%,
  40%,
  60%,
  80% {
    transform: translate3d(0, 10px, 0);
  }
}
</style>
