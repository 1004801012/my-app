import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import VConsole from 'vconsole'
import axios from 'axios'

Vue.prototype.$http = axios
Vue.config.productionTip = false
let vConsole = new VConsole()
console.log(process.env.VUE_APP_URL)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
router.beforeEach(function (to, from, next) {
  store.commit('updateLoadingStatus', { isLoading: true })
  next()
})

router.afterEach(function (to) {
  setTimeout(function () {
    store.commit('updateLoadingStatus', { isLoading: false })
  }, 300)
})
