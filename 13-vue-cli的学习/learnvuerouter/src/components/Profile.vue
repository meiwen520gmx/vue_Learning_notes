<template>
  <div>
    <h2>我是个人信息profile</h2>
    <h2>姓名：{{$route.query.name}}</h2>
    <h2>年龄：{{$route.query.age}}</h2>
  </div>
</template>

<script>
  export default {
    mounted() {
      // console.log(this.$router)
    },
    created() {
      console.log('profile created')
    },
    destroyed() {
      console.log('profile destroyed')
    },
  }
</script>

<style scoped>

</style>