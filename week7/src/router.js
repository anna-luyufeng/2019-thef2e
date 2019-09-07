import Vue from 'vue'
import Router from 'vue-router'
import store from './store'

Vue.use(Router)

import DB from '@src/firebase'

const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'Home',
      component: () => lazyLoadView(import('@views/home')),
    },
    {
      path: '/login',
      name: 'Login',
      component: () => lazyLoadView(import('@views/login')),
    },
    {
      path: '/logout',
      name: 'Logout',
      beforeEnter: (routeTo, routeFrom, next) => {
        store.dispatch('logOut')
        next({ name: 'Login' })
      },
    },
    {
      path: '/setting',
      name: 'Setting',
      component: () => lazyLoadView(import('@views/setting')),
    },
    {
      path: '/rooms',
      name: 'RoomList',
      component: () => lazyLoadView(import('@views/room/list')),
    },
    {
      path: '/room/:roomId?',
      name: 'RoomChat',
      component: () => lazyLoadView(import('@views/room/chat')),
      beforeEnter: (routeTo, routeFrom, next) => {
        DB.ref(`rooms/${routeTo.params.roomId}`)
          .once('value')
          .then((snapshot) => {
            routeTo.params.roomName = snapshot.val().name
            next()
          })
      },
      props: (route) => ({ roomName: route.params.roomName }),
    },
    {
      path: '/add-room',
      name: 'AddRoom',
      component: () => lazyLoadView(import('@views/room/add')),
    },
    {
      path: '/users',
      name: 'UserList',
      component: () => lazyLoadView(import('@views/users')),
    },
  ],
})
router.beforeEach((routeTo, routeFrom, next) => {
  if (store.getters.loggedIn) return next()
  routeTo.name === 'Login' ? next() : next({ name: 'Login' })
})
export default router

function lazyLoadView(AsyncView) {
  const AsyncHandler = () => ({
    component: AsyncView,
    // A component to use while the component is loading.
    loading: require('@views/_loading').default,
    // Delay before showing the loading component.
    // Default: 200 (milliseconds).
    delay: 600,
    // A fallback component in case the timeout is exceeded
    // when loading the component.
    error: require('@views/_timeout').default,
    // Time before giving up trying to load the component.
    // Default: Infinity (milliseconds).
    timeout: 10000,
  })

  return Promise.resolve({
    functional: true,
    render(h, { data, children }) {
      // Transparently pass any props or children
      // to the view component.
      return h(AsyncHandler, data, children)
    },
  })
}
