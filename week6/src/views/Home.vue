

<script>
import {
  FacebookIcon,
  InstagramIcon,
  PhoneIcon,
  MailIcon,
  MapPinIcon
} from "vue-feather-icons";

export default {
  name: "home",
  components: { FacebookIcon, InstagramIcon, PhoneIcon, MailIcon, MapPinIcon },
  props: {
    roomList: {
      type: Array,
      default: () => []
    }
  },
  data() {
    return {
      activeRoom: ""
    };
  },
  computed: {
    activeRoomIndex() {
      return this.roomList.indexOf(this.activeRoom);
    }
  },
  mounted() {
    this.updateActiveRoom(this.roomList[0]);
  },
  methods: {
    updateActiveRoom(room) {
      this.activeRoom = room;
    }
  }
};
</script>
<template>
  <div class="container theme-white">
    <header class="logo__container">
      <router-link :to="{name: 'home'}" class="logo__link">
        <h1 class="logo">White Space</h1>
      </router-link>
    </header>
    <main>
      <transition-group
        tag="div"
        class="background"
        enter-active-class="animated fadeInUp "
        leave-active-class="animated animated-delay fadeInDown"
      >
        <div
          v-for="({id, imageUrl} , roomIndex) in roomList"
          v-show="activeRoomIndex === roomIndex"
          :key="id"
          :class="{'background__image--active': activeRoomIndex === roomIndex}"
          :style="{ backgroundImage: `url(${imageUrl})`}"
          class="background__image"
        ></div>
      </transition-group>
      <div class="active-room">
        <div class="active-room__number">{{ `0${activeRoomIndex + 1}` }}</div>
        <div class="active-room__name">{{ activeRoom.name }}</div>
      </div>
      <div class="aside">
        <nav class="room__list" role="navigation">
          <ul>
            <router-link
              v-for="(room , roomIndex) in roomList"
              class="room__link"
              :key="room.name"
              :to="{name: 'room', params: { id: room.id}}"
              :class="{ 'room__link--active': activeRoomIndex === roomIndex}"
              @mouseover.native="updateActiveRoom(room)"
            >
              <li class="room">{{ room.name }}</li>
            </router-link>
          </ul>
        </nav>
        <footer class="information">
          <ul class="social">
            <li>
              <a href="#" target="_blank">
                <facebook-icon class="information__icon" size="1.5x"></facebook-icon>
              </a>
            </li>
            <li>
              <a href="#" target="_blank">
                <instagram-icon class="information__icon" size="1.5x"></instagram-icon>
              </a>
            </li>
          </ul>
          <ul>
            <li>
              <phone-icon class="information__icon" size="1x"></phone-icon>
              <a href="tel:+886-2-17264937">02 17264937</a>
            </li>
            <li>
              <mail-icon class="information__icon" size="1x"></mail-icon>
              <a href="mailto:service@whitespace.com.tw">service@whitespace.com.tw</a>
            </li>
            <li>
              <map-pin-icon class="information__icon" size="1x"></map-pin-icon>Somewhere in Taiwan
            </li>
          </ul>
        </footer>
      </div>
    </main>
  </div>
</template>
<style lang="scss" scoped>
@import "@design";
$spacing: 4rem;
.container {
  padding: $spacing;
  height: 100vh;
  width: 100vw;
  box-sizing: border-box;
}
.background {
  position: absolute;
  top: 0;
  left: 0;
  &__image {
    height: 100vh;
    width: 100vw;
    background-repeat: no-repeat;
    background-size: cover;
    background-position: 50%, 50%;
    position: fixed;
  }
}
.logo {
  border: 2px solid white;
  padding: 1rem;
  width: 8rem;
  height: 8rem;
  display: flex;
  align-items: center;
  text-align: center;
  background: rgba(255, 255, 255, 0.3);
  font-weight: bold;
  letter-spacing: 0.25rem;
  margin: 0;
  position: relative;
  &__container {
    position: absolute;
    z-index: 1;
  }
  &__link {
    &:before {
      position: absolute;
      content: "";
      background-size: auto auto;
      background-color: rgba(255, 255, 255, 0.3);
      background-image: repeating-linear-gradient(
        45deg,
        transparent,
        transparent 3px,
        white 3px,
        white 4px
      );
      z-index: -1;
      top: -10px;
      left: -10px;
      width: 100%;
      height: 100%;

      clip-path: polygon(
        0% 0%,
        0% 100%,
        10px 100%,
        10px 10px,
        100% 10px,
        100% 100%,
        100% 0%
      );
    }
  }
}
.aside {
  position: absolute;
  right: 0;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: calc(100% - #{$spacing * 2});
}
.active-room {
  position: absolute;
  bottom: $spacing;
  font-size: 1.25rem;
  &__number {
    font-size: 4rem;
    display: inline-block;
    position: relative;
    &:before {
      content: "";
      background-size: auto auto;
      background-color: rgba(255, 255, 255, 0.3);
      background-image: repeating-linear-gradient(
        45deg,
        transparent,
        transparent 3px,
        rgba(255, 255, 255, 1) 3px,
        rgba(255, 255, 255, 1) 4px
      );
      position: absolute;
      bottom: 15px;
      height: 15px;
      width: 100%;
    }
  }
}
.room {
  position: relative;
  padding: 1rem 3rem 1rem 2rem;
  &::before {
    content: "";
    display: block;
    position: absolute;
    left: 0;
    width: 0;
    height: 1px;
    background: $color-text-primary;
    top: 50%;
    transition: $all-transition;
  }
  &__list {
    background: white;
    padding: 2rem 0;
    position: relative;
    &::before {
      content: "";
      background-size: auto auto;
      background-color: rgba(255, 255, 255, 0.3);
      background-image: repeating-linear-gradient(
        45deg,
        transparent,
        transparent 3px,
        white 3px,
        white 4px
      );
      width: calc(100% - 15px);
      left: 15px;
      height: 100%;
      position: absolute;
      top: 15px;
    }
  }
  &__link {
    display: block;
    color: initial;
    &:hover,
    &--active {
      color: lighten($color-text-primary, 20);
      .room::before {
        width: 2rem - 0.5rem;
      }
    }
  }
}
.information {
  padding: 0 3rem 0 2rem;
  &__icon {
    margin-right: 10px;
  }
}
.social {
  display: inline-flex;
  margin-bottom: 10px;
}
</style>