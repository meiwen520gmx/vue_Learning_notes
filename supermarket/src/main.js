import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import mock from "./mock/mock";
import toastMsg from "components/common/toast";
import FastClick from "fastclick";//解决在移动端点击事件的300ms的延迟问题
import VueLazyload from "vue-lazyload";//图片懒加载

Vue.prototype.$bus = new Vue();
Vue.config.productionTip = false;
//安装toast插件
Vue.use(toastMsg);
Vue.use(VueLazyload, {
  preLoad: 1.3,
  // error: 'dist/error.png',
  loading: "./assets/imgs/common/home/loading.png",
});
FastClick.attach(document.body)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
