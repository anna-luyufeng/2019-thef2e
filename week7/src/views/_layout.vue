<script>
import { NavBar, Icon, Popup } from 'vant'
import 'vant/lib/nav-bar/style/less'
import 'vant/lib/popup/style/less'

export default {
  name: 'layout',
  components: {
    [NavBar.name]: NavBar,
    [Icon.name]: Icon,
    [Popup.name]: Popup,
  },
  props: {
    title: {
      type: String,
      default: '',
    },
    leftBack: {
      type: Boolean,
      default: false,
    },
    noMargin: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      leftPanelVisible: false,
    }
  },
  methods: {
    goToChatList() {
      // TODO:
      this.$toast({
        message: '還在思考如何實作',
        icon: 'fire-o',
      })
    },
    openLeftPanel() {
      this.leftPanelVisible = true
    },
    onClickLeft() {
      this.$emit('back')
    },
  },
}
</script>
<template>
  <div>
    <van-nav-bar
      v-if="leftBack"
      :title="title"
      @click-left="onClickLeft"
      left-arrow
      :border="false"
      class="nav-bar"
    />
    <van-nav-bar
      v-else
      :title="title"
      @click-left="openLeftPanel"
      @click-right="goToChatList"
      :border="false"
      class="nav-bar"
    >
      <van-icon name="wap-nav" size="24px" slot="left" />
      <van-icon name="chat-o" size="24px" slot="right" />
    </van-nav-bar>
    <div class="page">
      <div
        class="page-content"
        :class="{ 'page-content--no-margin': noMargin }"
      >
        <slot></slot>
      </div>
      <div v-if="$slots.toolbar" class="toolbar">
        <slot name="toolbar"></slot>
      </div>
    </div>

    <van-popup
      v-model="leftPanelVisible"
      position="left"
      get-container="body"
      class="left-panel"
    >
      <div>
        <van-icon name="cross" size="24px" @click="leftPanelVisible = false" />
        <nav>
          <ul>
            <li class="nav-item"
              ><router-link class="nav-link" :to="{ name: 'Home' }"
                >宇宙大廳</router-link
              ></li
            >
            <li class="nav-item"
              ><router-link class="nav-link" :to="{ name: 'Setting' }"
                >個人設定</router-link
              ></li
            >
            <li class="nav-item"
              ><router-link class="nav-link" :to="{ name: 'Logout' }"
                >登出</router-link
              ></li
            >
          </ul>
        </nav>
      </div>

      <div class="panel-footer">
        Made by
        <a
          href="https://github.com/littlegreening"
          title="Anna Lu's GitHub Account"
          target="_blank"
          >Anna Lu</a
        >.<br />
        Designed by
        <a
          href="https://challenge.thef2e.com/user/991?schedule=4032#works-4032"
          target="_blank"
          >WenChien</a
        >.
      </div>
    </van-popup>
  </div>
</template>
<style lang="scss" scoped>
.nav-bar {
  border-radius: 0 0 30px 30px;
  position: fixed;
  width: 100%;
  .van-nav-bar__left:after,
  .van-nav-bar__right::before {
    content: '';
    display: inline-flex;
    vertical-align: middle;
    height: 40px;
  }
  .van-nav-bar__left:after {
    border-right: 1px solid rgba(255, 255, 255, 0.1);
    padding-right: 16px;
  }
  .van-nav-bar__right::before {
    border-left: 1px solid rgba(255, 255, 255, 0.1);
    padding-left: 16px;
  }
}
.page {
  padding: 64px 25px;

  &-content {
    will-change: scroll-position;
    overflow: auto;
    height: 100%;
    position: relative;
    &:not(&--no-margin) {
      margin: 30px 0;
    }
  }
}

.toolbar {
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;
  background-color: #3c1b49;
  padding: 10px 25px;
  box-sizing: border-box;
}
.left-panel {
  height: 100%;
  padding: 25px;
  box-sizing: border-box;
  color: rgba(white, 0.8);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.panel-footer {
  color: rgba(white, 0.5);
  font-size: 0.85rem;
  line-height: 1.5;
  a {
    color: #bf9ef6;
  }
}
.nav {
  &-item {
    padding: 20px 0;
  }
  &-link {
    color: inherit;
  }
}
</style>
