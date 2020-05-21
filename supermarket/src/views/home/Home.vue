<template>
  <div class="home">
    <nav-bar class="home-nav">
      <div slot="center">购物街</div>
    </nav-bar>
    <div class="heihei">

    </div>
  </div>
</template>

<script>
import NavBar from "components/common/navbar/NavBar"
  export default {
    components: {
      NavBar,
    },
  }
</script>

<style lang="less" scoped>
.heihei{
  height: 50px;
}
.home-nav{
  background-color: @colorTint;
}
</style>