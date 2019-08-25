import Vue from "vue";
import Router from "vue-router";

import Request from "./utils/request";

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "home",
      component: () => lazyLoadView(import("@views/Home")),
      beforeEnter: (to, _, next) => {
        Request.get("rooms").then(res => {
          to.params.rooms = res.items;
          next();
        });
      },
      props: route => ({ roomList: route.params.rooms })
    },
    {
      path: "/room/:id",
      name: "room",
      component: () =>
        lazyLoadView(import(/* webpackChunkName: "room" */ "./views/Room.vue")),
      beforeEnter: (to, _, next) => {
        Request.get(`room/${to.params.id}`).then(res => {
          to.params.room = res.room[0];
          to.params.dates = res.booking.map(el => el.date);
          next();
        });
      },
      props: route => ({
        data: route.params.room,
        disabledDates: route.params.dates
      })
    }
  ]
});

function lazyLoadView(AsyncView) {
  const AsyncHandler = () => ({
    component: AsyncView,
    // A component to use while the component is loading.
    loading: require("@views/_loading").default,
    // Delay before showing the loading component.
    // Default: 200 (milliseconds).
    delay: 600,
    // A fallback component in case the timeout is exceeded
    // when loading the component.
    error: require("@views/_timeout").default,
    // Time before giving up trying to load the component.
    // Default: Infinity (milliseconds).
    timeout: 10000
  });

  return Promise.resolve({
    functional: true,
    render(h, { data, children }) {
      // Transparently pass any props or children
      // to the view component.
      return h(AsyncHandler, data, children);
    }
  });
}
