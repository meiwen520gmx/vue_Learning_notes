<template>
  <div>
    <tab-bar>
      <tab-bar-item path="/home">
        <img slot="item-icon" src="../assets/img/tabbar/index.png" alt="" />
        <img
          slot="item-icon-active"
          src="../assets/img/tabbar/index_active.png"
          alt=""
        />
        <div slot="item-text">首页</div>
      </tab-bar-item>
      <tab-bar-item path="/category" activeColor="blue">
        <img slot="item-icon" src="../assets/img/tabbar/fenlei.png" alt="" />
        <img
          slot="item-icon-active"
          src="../assets/img/tabbar/fenlei_active.png"
          alt=""
        />
        <div slot="item-text">分类</div>
      </tab-bar-item>
      <tab-bar-item path="/cart" activeColor="yellow">
        <img slot="item-icon" src="../assets/img/tabbar/shopcar.png" alt="" />
        <img
          slot="item-icon-active"
          src="../assets/img/tabbar/shopcar_active.png"
          alt=""
        />
        <div slot="item-text">购物车</div>
      </tab-bar-item>
      <tab-bar-item path="profile" activeColor="green">
        <img slot="item-icon" src="../assets/img/tabbar/mine.png" alt="" />
        <img
          slot="item-icon-active"
          src="../assets/img/tabbar/mine_active.png"
          alt=""
        />
        <div slot="item-text">我的</div>
      </tab-bar-item>
    </tab-bar>
  </div>
</template>

<script>
import TabBar from "./tabbar/TabBar";
import TabBarItem from "./tabbar/TabBarItem";
export default {
  components: {
    TabBar,
    TabBarItem
  }
};
</script>

<style scoped></style>
