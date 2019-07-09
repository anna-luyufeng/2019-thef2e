import Vue from "vue";
import App from "./app.vue";
import router from "./router";
import store from "./store";

import Antd from 'ant-design-vue'
import 'ant-design-vue/dist/antd.css'
Vue.use(Antd)

Vue.config.productionTip = process.env.NODE_ENV === 'production'

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount("#app");