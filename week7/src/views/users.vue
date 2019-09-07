<script>
import { Icon } from 'vant'

import Layout from '@views/_layout'

export default {
  name: 'UserList',
  components: {
    Layout,
    [Icon.name]: Icon,
  },
}
</script>
<template>
  <Layout title="尋覓星人">
    尋覓的星人功能尚在開發中，敬請期待
    <van-icon name="smile-comment-o" size="24px" />
    <!-- 目前開放私聊的星人有3位<br />
    人名 聊天按鈕 -->
  </Layout>
</template>
