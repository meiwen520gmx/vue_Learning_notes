<template>
  <div id="app">
    <router-view></router-view>
    <!-- 底部导航 -->
    <main-tab-bar></main-tab-bar>
  </div>
</template>

<script>
import MainTabBar from "./components/MainTabBar";
export default {
  name: "App",
  components: {
    MainTabBar
  }
};
</script>

<style></style>
