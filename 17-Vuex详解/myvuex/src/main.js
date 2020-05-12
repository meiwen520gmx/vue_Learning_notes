import Vue from 'vue'
import App from './App'
import router from './router'
import Store from './store'

Vue.config.productionTip = false
Vue.prototype.$store = Store
/* eslint-disable no-new */
new Vue({
  el: '#app',
  Store,
  router,
  render: h => h(App)
})
