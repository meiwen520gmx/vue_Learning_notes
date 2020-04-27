<template>
  <div id="app">
    <!-- <img src="./assets/logo.png"> -->
    <!-- <router-link to="/home" tag="button" replace>首页</router-link>
    <router-link to="/about" replace>关于</router-link> -->
    <button @click="homeClick">首页</button>
    <button @click="aboutClick">关于</button>
    <router-link to="/helloworld" replace>欢迎您</router-link>
    <router-link :to="'/user/'+userId">用户</router-link>
    <router-link :to="{path:'/profile', query:{name: 'why', age: 18}}">档案</router-link>

    <button @click="userClick">用户</button>
    <button @click="profileClick">档案</button>
    <keep-alive exclude="Profile">
      <router-view />
    </keep-alive>
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      userId: 'zhangsan'
    }
  },
  methods: {
    homeClick() {
      // this.$router.replace("/home");
      this.$router.push("/home");
    },
    aboutClick() {
      this.$router.push("/about");
    },
    userClick(){
      // this.$router.push('/user/'+this.userId)
      this.$router.push({name:'User',params: {userId: 666}})
    },
    profileClick(){
      this.$router.push({path:'/profile', query: {name:'123', age: 10}})
    }
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.router-link-active {
  color: blue;
}
</style>
