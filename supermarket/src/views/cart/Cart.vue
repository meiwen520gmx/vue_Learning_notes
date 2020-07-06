<template>
  <div class="cart">
    <!-- 导航 -->
    <nav-bar class="cart-nav">
      <div slot="center">购物车({{cartLength}})</div>
    </nav-bar>
    <!-- 商品的列表 -->
    <cart-list></cart-list>
    <!-- 底部汇总 -->
    <cart-bottom-bar></cart-bottom-bar>
  </div>
</template>

<script>
//公共组件：
import NavBar from "components/common/navbar/NavBar";


import CartList from "./childComps/CartList";
import CartBottomBar from "./childComps/CartBottomBar";
import { mapGetters} from "vuex";
export default {
  name: "cart",
  computed: {
    ...mapGetters(["cartLength"]),
  },
  components: {
    NavBar,
    CartList,
    CartBottomBar
  }
};
</script>

<style lang="less" scoped>
.cart {
  height: 100vh; //视口高度 vh->viewheight
}
.cart-nav {
  background-color: @colorTint;
  color: #fff;
}
</style>
