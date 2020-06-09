import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import mock from "./mock/mock";
// import axios from "axios";

// axios.defaults.baseURL = "http://mockjs.com/api";

// Vue.prototype.$http = axios;
Vue.prototype.$bus = new Vue();
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
