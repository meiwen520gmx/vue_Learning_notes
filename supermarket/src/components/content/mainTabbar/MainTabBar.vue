<template>
  <div>
    <tab-bar>
      <tab-bar-item path="/home">
        <img slot="item-icon" src="~assets/imgs/tabbar/index.png" alt="" />
        <img
          slot="item-icon-active"
          src="~assets/imgs/tabbar/index_active.png"
          alt=""
        />
        <div slot="item-text">首页</div>
      </tab-bar-item>
      <tab-bar-item path="/category">
        <img slot="item-icon" src="~assets/imgs/tabbar/category.png" alt="" />
        <img
          slot="item-icon-active"
          src="~assets/imgs/tabbar/category_active.png"
          alt=""
        />
        <div slot="item-text">分类</div>
      </tab-bar-item>
      <tab-bar-item path="/cart">
        <img slot="item-icon" src="~assets/imgs/tabbar/shopcar.png" alt="" />
        <img
          slot="item-icon-active"
          src="~assets/imgs/tabbar/shopcar_active.png"
          alt=""
        />
        <div slot="item-text">购物车</div>
      </tab-bar-item>
      <tab-bar-item path="profile">
        <img slot="item-icon" src="~assets/imgs/tabbar/mine.png" alt="" />
        <img
          slot="item-icon-active"
          src="~assets/imgs/tabbar/mine_active.png"
          alt=""
        />
        <div slot="item-text">我的</div>
      </tab-bar-item>
    </tab-bar>
  </div>
</template>

<script>
import TabBar from "components/common/tabbar/TabBar";
import TabBarItem from "components/common/tabbar/TabBarItem";
export default {
  components: {
    TabBar,
    TabBarItem
  }
};
</script>

<style scoped></style>
