import Vue from "vue";
import App from "./App.vue";
import router from "./router";

import VCalendar from "v-calendar";
Vue.use(VCalendar, {
  datePicker: {
    popover: {
      visibility: "click"
    }
  }
});

Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
