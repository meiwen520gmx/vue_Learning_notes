<template>
  <div>
    <h3>我是首页</h3>
    <p>首页内容</p>
    <router-link to="/home/news">新闻</router-link>
    <router-link to="/home/message">消息</router-link>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  data() {
    return {
      path: "/home/news"
    };
  },
  created() {},

  //activated，deactivated与keep-alive有关，是一套使用,只有该组件被保持了状态使用了keep-alive时，才是有效的
  destroyed() {},
  activated() {
    console.log('home activated')
    this.$router.push(this.path);
  },
  deactivated() {
    console.log('home deactivated')
  },
  beforeRouteLeave(to, from, next) {
    this.path = this.$route.path;
    next();
  }
};
</script>
