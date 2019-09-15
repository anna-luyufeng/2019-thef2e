<script>
import axios from 'axios'
import BaseButton from '@components/BaseButton'
export default {
  components: { BaseButton },
  props: {
    token: {
      type: String,
    },
    isLogin: {
      type: Boolean,
      default: false,
    },
    fetchingData: {
      type: Boolean,
      default: false,
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
      showNav: true,
      playlists: [],
      viewingPlaylist: {
        name: '',
        tracks: [],
      },
    }
  },
  watch: {
    token: 'getUserPlaylist',
  },
  methods: {
    changeViewingPlaylist(playlist) {
      this.viewingPlaylist.name = playlist.name
      axios
        .get(`https://api.spotify.com/v1/playlists/${playlist.id}/tracks`, {
          headers: {
            Authorization: 'Bearer ' + this.token,
          },
        })
        .then(({ data }) => {
          this.viewingPlaylist.tracks = data.items
        })
    },
    setPlayingTrack() {},
    toggleNav() {
      this.showNav = !this.showNav
    },
    getUserPlaylist() {
      this.$emit('fetching', true)
      axios
        .get('https://api.spotify.com/v1/me/playlists', {
          headers: {
            Authorization: 'Bearer ' + this.token,
          },
        })
        .then(({ data }) => {
          this.playlists = data.items
          this.$emit('fetching', false)
        })
    },
  },
}
</script>
<template>
  <div class="drawer" :class="{ 'drawer--cover': !isLogin, 'drawer--open': isLogin && showNav }">
    <template v-if="isLogin">
      <div class="navbar">
        <div class="search-field">
          <input class="search-field__input" placeholder="搜尋" type="search" aria-label="搜尋" />
        </div>

        <nav class="nav">
          <ul class="nav-list" data-submenu-title="播放清單">
            <li
              class="nav__item"
              v-for="playlist in playlists"
              :key="playlist.id"
              @click="changeViewingPlaylist(playlist)"
            >{{ playlist.name }}</li>
          </ul>
          <ul class="nav-list" data-submenu-title="歌手">
            <li class="nav__item">Ariana Grande</li>
            <li class="nav__item">Sam Smith</li>
            <li class="nav__item">Jacob Lee</li>
          </ul>
          <ul class="nav-list" data-submenu-title="已按讚的歌曲">
            <li class="nav__item">Ariana Grande</li>
            <li class="nav__item">Sam Smith</li>
            <li class="nav__item">Jacob Lee</li>
          </ul>
        </nav>
        <BaseButton block @click="$emit('signout')">登出</BaseButton>
      </div>
      <div class="playlist">
        <div class="nav-toggler" @click="toggleNav">
          <div class="bar"></div>
          <div class="bar"></div>
          <div class="bar"></div>
        </div>
        <h3 class="playlist__name">{{ viewingPlaylist.name}}</h3>
        <div class="tracklist">
          <div
            v-for="{ track } in viewingPlaylist.tracks"
            :key="track.id"
            class="track"
            @click="setPlayingTrack(track)"
          >
            <div>
              <h4 class="track__name">{{ track.name }}</h4>
              <div class="track__album">{{ track.album.name }}</div>
            </div>
            <div>
              <div>{{ track.artists.map(artist => artist.name).join(', ')}}</div>
              <div>{{ track.duration_ms | millisecondsToTime }}</div>
            </div>
          </div>
        </div>
      </div>
    </template>
    <div v-else class="message">
      <slot name="message"></slot>
    </div>
  </div>
</template>

<style lang="scss">
@import '@design';
$diff-between-drawer-navbar: 15px;
.message {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.drawer {
  width: 50vw;
  height: calc(100vh - #{$diff-between-drawer-navbar} - 3px);
  padding: $diff-between-drawer-navbar 0;
  background-color: white;
  border: 3px solid $color-primary;
  position: absolute;
  z-index: 2;
  top: 0;
  left: 0;
  transition: all $duration-transition-base * 1.5 linear;
  box-shadow: $color-box-shadow;
  transform: translateX(calc(-100% - 30px)) rotate(25deg);
  will-change: transform;
  &--cover {
    width: 90vh;
    height: 90vh;
    top: 50%;
    left: 50%;
    transform: translate(calc(-50% - 18px), calc(-50% + -18px));
    box-shadow: none;
    border-radius: 4px;
  }
  &--open {
    transform: none;
    + .box {
      transform: translateX(calc(50% + 100px));
    }
    .playlist {
      transform: translate(18px, 18px);
    }
  }
}

.navbar {
  width: 40%;
  .button {
    margin: 0 25px;
    width: 40%;
  }
}
.nav {
  &-list {
    margin-bottom: 25px;
    &:before {
      content: attr(data-submenu-title);
      display: block;
      margin-bottom: 5px;
      padding-bottom: 5px;
      color: #666666;
      border-bottom: 1px solid $color-primary-light;
      font-size: 0.75em;
      margin-left: 25px;
      letter-spacing: 0.1em;
    }

    &:first-child {
      max-height: 30vh;
      overflow: auto;
    }
  }
  &-toggler {
    position: relative;
    width: 20px;
    height: 15px;
    float: right;
    cursor: pointer;
    .bar {
      position: absolute;
      width: 100%;
      height: 2px;
      background-color: $color-primary;
      border-radius: 2px;
      overflow: hidden;
      &:after {
        content: '';
        display: block;
        width: 100%;
        height: 100%;
        background: $color-primary-light;
        position: absolute;
        top: 0;
        left: 100%;
        z-index: 1;
        transition: $duration-transition-base;
      }
      &:nth-child(1) {
        top: 0;
        &:after {
          transition-delay: 0.1s;
        }
      }
      &:nth-child(2) {
        top: 6px;
        &:after {
          transition-delay: 0.2s;
        }
      }
      &:nth-child(3) {
        top: 12px;
        &:after {
          transition-delay: 0.3s;
        }
      }
    }
    &:hover .bar:after {
      left: 0;
    }
  }
  &__item {
    position: relative;
    padding: 5px 25px;
    cursor: pointer;
    &:before {
      content: '';
      position: absolute;
      left: 0;
      top: 50%;
      transform: translate(-100%, -50%);
      border-style: solid;
      border-width: 5px 0 5px 8.7px;
      border-color: transparent;
      transition: all $duration-transition-base * 0.5 linear;
    }
    &:hover:before,
    &--active:before {
      transform: translate(0, -50%);
      border-color: transparent transparent transparent $color-primary;
    }
  }
}
.search-field {
  margin-left: 25px;
  margin-bottom: 30px;
  &__input {
    height: 35px;
    line-height: 35px;
    outline: none;
    border: 1px solid $color-primary-light;
    width: 100%;
    max-width: 100%;
    padding: 10px;
  }
}

.playlist {
  position: absolute;
  padding: 20px;
  background-color: white;
  border: 3px solid $color-primary;
  top: -3px;
  right: -3px;
  width: 60%;
  height: calc(100% + 6px);
  box-shadow: $color-box-shadow;
  transition: all $duration-transition-base * 1.5 linear;
  will-change: transform;
  &__name {
    padding: 15px 0;
    border-bottom: 3px solid $color-primary;
  }
}
.tracklist {
  overflow-y: scroll;
  max-height: 80%;
}
.track {
  border-bottom: 1px solid $color-primary;
  padding: 12px 5px;
  cursor: pointer;
  transition: background $duration-transition-base linear;
  &:hover {
    background-color: $color-grey;
  }
  > div {
    display: flex;
    justify-content: space-between;
    align-items: center;
    &:last-child {
      margin-top: 5px;
      font-size: 0.75rem;
    }
  }
  &__name {
    overflow: hidden;
    white-space: nowrap;
  }
  &__album {
    color: $color-primary-light;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    flex-basis: 40%;
    font-size: 0.75rem;
  }
}
</style>
