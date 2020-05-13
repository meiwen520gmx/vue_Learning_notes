<template>
  <div class="hello">
    <h1>{{ $store.state.info }}</h1>
    <button @click="updateInfo">修改信息</button>
    <button @click="aupdateInfo">异步修改信息{{msg}}</button>


    <h2>--------modules测试内容----------</h2>
    <h3>{{ $store.state.a.name }}</h3><h3>拼接后的名字：{{ $store.getters.fullname }}</h3>
    <button @click="changeName">修改名字</button>
    <h3>拼接后的名字：{{ $store.getters.fullname2 }}</h3>
    <h3>拼接后的名字：{{ $store.getters.fullname3 }}</h3>
  </div>
</template>

<script>
import { UPDATEINFO } from "../store/mutations-types";
export default {
  name: "HelloWorld",
  data() {
    return {
      msg: ""
    };
  },
  methods: {
    updateInfo() {
      this.$store.commit(UPDATEINFO, "gmx");
    },
    //1.
    // aupdateInfo(){
    //   this.$store.dispatch('aUpdateInfo','zzx')
    // },
    //2.
    //  aupdateInfo(){
    //   this.$store.dispatch('aUpdateInfo',  {
    //     message: '我是携带的信息',
    //     success: () => {
    //       console.log('里面已经完成了')
    //     }
    //   })
    // }
    //3.终极优雅写法：这个可以用于获取用户信息，获取成功后返回给res，接收到res后再进行渲染
    aupdateInfo() {
      this.$store.dispatch("aUpdateInfo", "我是携带的信息").then(res => {
        this.msg = res
        console.log(res);
      });
    },
    changeName(){
      this.$store.commit('changeName')
    }
  }
};
</script>
