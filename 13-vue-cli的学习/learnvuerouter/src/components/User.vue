<template>
  <div>
      <h2>我是用户界面</h2>
      <p>我是{{$route.params.userId}}用户相关信息</p>
      <h3>{{userId}}</h3>
  </div>
</template>

<script>
  export default {
    mounted() {
      // console.log(this.$route.params.userId)
    },
    //也可以使用计算属性
    computed: {
      userId(){
        return this.$route.params.userId
      }
    }
  }
</script>