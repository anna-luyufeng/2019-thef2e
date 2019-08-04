

<script>
import BaseButton from '@components/BaseButton'
import UserNavbar from '@components/UserNavbar'
import Player from '@components/Player'

export default {
  name: 'app',
  components: { BaseButton, UserNavbar, Player },

  data() {
    return {
      loading: false,
      isLogin: false,

      playingTrack: {
        name: 'Beautiful People',
        duration_ms: 222075,
        progress_ms: 44272,
        album: {
          name: '',
        },
        artists: [
          {
            name: 'Ed Sheeran',
            id: '0C0XlULifJtAgn6ZNCW2eu',
          },
        ],
      },
    }
  },
  methods: {
    goLogingPage() {
      this.loading = true
      setTimeout(() => {
        this.isLogin = true
        this.loading = false
      }, 2000)
    },
    onSignout() {
      this.isLogin = false
    },
  },
}
</script>
<template>
  <div id="app">
    <UserNavbar :is-login="isLogin" @signout="onSignout">
      <template v-slot:message>
        <div v-if="loading">登入中⋯⋯</div>
        <div v-else>
          <h3>歡迎來到 Poplayer</h3>
          <p>2019/8/4 目前功能尚未完成，預計串接 Spotify API，請過陣子再回來玩耍唷～</p>
          <BaseButton @click="goLogingPage">模擬 Spotify 使用者登入</BaseButton>
        </div>

        <p class="copyright">
          Made by
          <a href="https://github.com/littlegreening" target="_blank">Anna Lu</a>. Designed by
          <a
            href="https://challenge.thef2e.com/user/3115?schedule=3149#works-3149"
            target="_blank"
          >Miss_Y</a>.
        </p>
      </template>
    </UserNavbar>
    <div class="box" :class="{'box--open': isLogin}">
      <div class="box__side box__side--top"></div>
      <div class="box__side box__side--left"></div>
      <div class="box__side box__side--bottom"></div>
      <div class="box__side box__side--right"></div>
      <Player v-show="isLogin" :playback="playingTrack" />
    </div>
    <!-- <div class="api-tester">
      <label for="login">模擬 Spotify 使用者登入</label>
      <input type="checkbox" name="login" v-model="isLogin" />
    </div>-->
  </div>
</template>
<style lang="scss">
@import '@design';
@import '@src/design/reset.scss';
#app {
  font-family: $system-default-font-family;
}
.api-tester {
  position: absolute;
  right: 0;
  top: 50%;
}
.copyright {
  margin-top: 30px;
  color: $color-grey;
}
.box {
  width: 90vh;
  height: 90vh;
  margin: 5vh auto;
  background-color: white;
  border: 3px solid $color-primary;
  position: relative;
  border-radius: 4px;
  transition: transform $duration-transition-base linear;
  will-change: transform;
  display: flex;
  flex-direction: column;
  transform: translateX(0);
  &__side {
    content: '';
    border: 3px solid $color-primary;
    background-color: #c5c5c5;
    position: absolute;
    transform-origin: top left;
    border-radius: 4px;
    transition: all $duration-transition-base * 2 linear;
    box-sizing: content-box;
    &--top,
    &--bottom {
      width: 100%;
      height: 15px;
    }
    &--left,
    &--right {
      width: 15px;
      height: 100%;
    }

    &--top {
      transform: skewX(45deg) rotateX(180deg);
      top: 0px;
      left: -1px;
      opacity: 1;
    }
    &--bottom {
      transform: skewX(45deg) rotateX(180deg);
      bottom: -24px;
      left: -1px;
      box-shadow: 3px 0px 6px rgba(0, 0, 0, 0.2);
    }
    &--left {
      transform: skewY(45deg) rotateY(180deg);
      top: -2px;
      left: 1px;
      opacity: 1;
    }
    &--right {
      transform: skewY(45deg) rotateY(180deg);
      top: -2px;
      right: -24px;
      box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.2);
    }
  }
  &--open {
    .box__side {
      &--top {
        transform: skewX(45deg);
        left: -4px;
        top: -3px;
        opacity: 0;
      }
      &--bottom {
        transform: skewX(45deg);
        bottom: -21px;
        left: -4px;
        box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.2);
      }

      &--left {
        transform: skewY(45deg);
        left: -3px;
        top: -4px;
        opacity: 0;
      }
      &--right {
        transform: skewY(45deg);
        right: -21px;
        top: -4px;
        box-shadow: 3px 0px 6px rgba(0, 0, 0, 0.2);
      }
    }
  }
}
</style>
