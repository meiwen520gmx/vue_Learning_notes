import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import mock from "./mock/mock";
import toastMsg from "components/common/toast"

Vue.prototype.$bus = new Vue();
Vue.config.productionTip = false;
//安装toast插件
Vue.use(toastMsg)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
