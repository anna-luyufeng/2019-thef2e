<script>
import { Image } from 'vant'
import Layout from '@views/_layout'

export default {
  name: 'home',
  components: {
    Layout,
    [Image.name]: Image,
  },
  data() {
    return {
      modeList: [
        {
          title: '宇宙聊天室',
          intro: '與所有在線上的星人聊天',
          type: 'public',
          page: 'RoomChat',
        },
        {
          title: '尋找銀河系',
          intro: '只想聊自己喜歡的話題',
          type: 'topic',
          page: 'RoomList',
        },
        {
          title: '尋覓星人',
          intro: '一對一講悄悄話',
          type: 'private',
          page: 'UserList',
        },
      ],
    }
  },
}
</script>

<template>
  <Layout title="宇宙大廳">
    <router-link
      v-for="mode in modeList"
      :key="mode.type"
      :to="{ name: mode.page, params: { roomId: mode.type } }"
      class="item-link"
    >
      <div class="item-media">
        <van-image
          round
          width="50"
          height="50"
          :src="require(`@assets/mode_${mode.type}.png`)"
        />
      </div>
      <div class="item-inner">
        <div class="item-title">{{ mode.title }}</div>
        <div class="item-text">
          {{ mode.intro }}
        </div>
      </div>
    </router-link>
  </Layout>
</template>
