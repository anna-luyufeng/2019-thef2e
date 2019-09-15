

<script>
import axios from 'axios'

import BaseButton from '@components/BaseButton'
import UserNavbar from '@components/UserNavbar'
import Player from '@components/Player'

export default {
  name: 'app',
  components: { BaseButton, UserNavbar, Player },

  data() {
    return {
      fetching: false,
      isLogin: false,
      accessToken: '',
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
  mounted() {
    const locationHash = document.location.hash

    if (locationHash) {
      const responseParams = new URLSearchParams(locationHash.replace('#', ''))
      this.accessToken = responseParams.get('access_token')
      this.isLogin = true
    }
    const authParams = {
      client_id: process.env.VUE_APP_SPOTIFY_CLIENT_ID,
      response_type: 'token',
      redirect_uri: process.env.VUE_APP_SPOTIFY_REDIRECT_URI,
      scope:
        'user-read-playback-state user-read-currently-playing user-modify-playback-state playlist-read-private',
    }
    const authUrl = new URL('https://accounts.spotify.com/authorize')

    Object.keys(authParams).forEach((key) => {
      authUrl.searchParams.set(key, authParams[key])
    })
    console.log('TCL: mounted -> authUrl', authUrl.toString())
  },
  methods: {
    goAuthPage() {
      const authParams = {
        client_id: process.env.VUE_APP_SPOTIFY_CLIENT_ID,
        response_type: 'token',
        redirect_uri: process.env.VUE_APP_SPOTIFY_REDIRECT_URI,
        scope:
          'user-read-playback-state%20user-read-currently-playing%20ser-modify-playback-state%20playlist-read-private',
      }
      const authUrl = new URL('https://accounts.spotify.com/authorize')

      Object.keys(authParams).forEach((key) => {
        authUrl.searchParams.set(key, authParams[key])
      })
      // const authUrl = `https://accounts.spotify.com/authorize?client_id=${process.env.VUE_APP_SPOTIFY_CLIENT_ID}&response_type=token&redirect_uri=${process.env.VUE_APP_SPOTIFY_REDIRECT_URI}&scope=user-read-playback-state%20user-read-currently-playing%20user-modify-playback-state%20playlist-read-private`
      window.location.href = authUrl.toString()
    },
    onSignout() {
      this.isLogin = false
    },
    onFetching(state) {
      this.loading = state
    },
  },
}
</script>
<template>
  <div id="app">
    <UserNavbar
      :is-login="isLogin"
      :fetching-data="fetching"
      :token="accessToken"
      @fetching="onFetching"
      @signout="onSignout"
    >
      <template v-slot:message>
        <div v-if="fetching">登入中⋯⋯</div>
        <div v-else>
          <h3>歡迎來到 Poplayer</h3>
          <p>2019/8/4 目前功能尚未完成，請過陣子再回來玩耍唷～</p>
          <BaseButton @click="goAuthPage">Spotify 授權</BaseButton>
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
      <Player v-show="isLogin" :token="accessToken" :playback="playingTrack" />
    </div>
    <!-- <div class="api-tester">
      <label for="login">Spotify 授權</label>
      <input type="checkbox" name="login" v-model="isLogin" />
    </div>-->
  </div>
</template>
<style lang="scss">
$material-icons-font-path: '~material-icons/iconfont/';
@import '~material-icons/iconfont/material-icons.scss';

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
