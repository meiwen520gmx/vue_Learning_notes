<template>
  <div id="detail">
    <detail-nav-bar></detail-nav-bar>
    <scroll class="content">
      <detail-swiper :banner="topImages"></detail-swiper>
      <detail-base-info :goods="goods"></detail-base-info>
      <detail-shop-info :shop="shop"></detail-shop-info>
      <ul>
        <li>11</li>
        <li>11</li>
        <li>11</li>
        <li>11</li>
        <li>11</li>
        <li>11</li>
        <li>11</li>
        <li>11</li>
        <li>11</li>
        <li>11</li>
      </ul>
    </scroll>
  </div>
</template>

<script>
import DetailNavBar from "./childComps/DetailNavBar";
import DetailSwiper from "./childComps/DetailSwiper";
import DetailBaseInfo from "./childComps/DetailBaseInfo";
import DetailShopInfo from "./childComps/DetailShopInfo";
import DetailGoodsInfo from "./childComps/DetailGoodsInfo";

import Scroll from "components/common/scroll/Scroll";
import { getDetail } from "network/detail";
export default {
  name: "detail",
  data() {
    return {
      id: null,
      topImages: [],
      goods: {},
      shop: {}
    };
  },
  created() {
    this.id = this.$route.query.id;
    this.getDetail();
  },
  mounted() {},
  methods: {
    getDetail() {
      getDetail(this.id).then(res => {
        if (res.code == 200) {
          console.log(res);
          // 1.获取顶部的图片轮播数据
          this.topImages = res.data.topImages;
          //2.获取商品相关信息
          this.goods = res.data.goodsInfo;

          //3.获取店铺信息的对象
          this.shop = res.data.shopInfo;
        }
      });
    }
  },
  components: {
    DetailNavBar,
    DetailSwiper,
    DetailBaseInfo,
    DetailShopInfo,
    DetailGoodsInfo,
    Scroll
  }
};
</script>

<style lang="less" scoped>
#detail {
  position: relative;
  z-index: 99;
  background-color: #fff;
  height: 100vh;
  .content {
    height: calc(100% - 44px); //父级高度设置为100vh才会是视图的高度
    overflow: hidden;
  }
}
</style>
