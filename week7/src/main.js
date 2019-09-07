import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  created: function() {
    this.updateFrame()
  },
  methods: {
    updateFrame() {
      const windowHeight = window.innerHeight
      const windowWidth = window.innerWidth
      const appMaxHeight = 570 + 250
      const appMaxWidth = 320 + 50

      const appMode =
        windowHeight >= appMaxHeight && windowWidth >= appMaxWidth
          ? 'showFrame'
          : 'noFrame'

      if (appMode === 'showFrame') {
        document.body.style.background = '#333333'
        document.body.classList.add('show-frame')

        document.querySelector('#frame').style.height = `${appMaxHeight}px`
        document.querySelector('#frame').style.width = `${appMaxWidth}px`
      }
    },
  },
  render: (h) => h(App),
}).$mount('#app')
