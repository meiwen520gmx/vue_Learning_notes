<template>
  <scroll class="cart-list" :data="[cartList]">
    <div class="cart-content">
      <cart-list-item
        v-for="item in cartList"
        :key="item.iid"
        :item-info="item"
      ></cart-list-item>
    </div>
  </scroll>
</template>

<script>
import CartListItem from "./CartListItem";
import Scroll from "components/common/scroll/Scroll";
import { mapState } from "vuex";
export default {
  data() {
    return {};
  },
  computed: {
    ...mapState(["cartList"])
  },
  components: {
    Scroll,
    CartListItem
  }
};
</script>

<style lang="less" scoped>
.cart-list {
  height: calc(100% - 93px); //父级高度设置为100vh才会是视图的高度
  overflow: hidden;
}
</style>
