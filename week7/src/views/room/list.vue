<script>
import { Search, Image } from 'vant'
import Layout from '@views/_layout'
import 'vant/lib/search/style/less'

import DB from '@src/firebase'

export default {
  name: 'RoomList',
  components: {
    Layout,
    [Search.name]: Search,
    [Image.name]: Image,
  },
  data() {
    return {
      query: '',
      //  TODO: 要顯示在 room 裡面的人數
      loadedRooms: [],
    }
  },
  created() {
    this.getRoomList()
  },
  methods: {
    getRoomList() {
      DB.ref('rooms')
        .orderByKey()
        .startAt('topic')
        .on('value', (snapshot) => {
          this.loadedRooms = snapshot.val()
        })
    },
  },
}
</script>
<template>
  <Layout title="尋找銀河系">
    <!-- TODO: 簡單前端字串過濾 -->
    <van-search
      placeholder="搜尋銀河系內星球主題"
      background
      left-icon
      right-icon="search"
      v-model="query"
      class="search-item"
    />
    <router-link class="item-link item-link--accent" :to="{ name: 'AddRoom' }">
      <div class="item-media">
        <van-image
          round
          width="50"
          height="50"
          :src="require(`@assets/room_add.png`)"
        />
      </div>
      <div class="item-inner">
        <div class="item-title">創建星球</div>
      </div>
    </router-link>

    <router-link
      v-for="(room, roomId) in loadedRooms"
      :key="roomId"
      :to="{ name: 'RoomChat', params: { roomId: roomId } }"
      class="item-link"
    >
      <div class="item-media">
        <van-image
          round
          width="50"
          height="50"
          :src="require(`@assets/room_avatar${room.avatarId}.png`)"
        />
      </div>
      <div class="item-inner">
        <div class="item-title">{{ room.name }}</div>
        <div class="item-text">
          {{ room.intro }}
        </div>
      </div>
    </router-link>
  </Layout>
</template>

<style lang="scss" scoped>
.search-item {
  margin-bottom: 20px;
  border-radius: 0;
  border-bottom: 1px solid white;
}
</style>
