import Vue from 'vue'
import App from './App'
import Store from './store'

Vue.config.productionTip = false
Vue.prototype.$store = Store

/* eslint-disable no-new */
new Vue({
  el: '#app',
  Store,
  render: h => h(App)
})
