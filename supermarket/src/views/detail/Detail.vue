<template>
  <div id="detail">
    <detail-nav-bar></detail-nav-bar>
    <detail-swiper :banner="topImages"></detail-swiper>
    <detail-goods-info :goodsInfo="goodsInfo"></detail-goods-info>
    <detail-shop-info :shop="shop"></detail-shop-info>
  </div>
</template>

<script>
import DetailNavBar from "./childComps/DetailNavBar";
import DetailSwiper from "./childComps/DetailSwiper";
import DetailGoodsInfo from "./childComps/DetailGoodsInfo";
import DetailShopInfo from "./childComps/DetailShopInfo";
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
        if(res.code == 200){
          console.log(res);
          // 1.获取顶部的图片轮播数据
          this.topImages = res.data.topImages;
          //2.获取商品相关信息
          this.goodsInfo = res.data.goodsInfo;

          //3.获取店铺信息的对象
          this.shop = res.data.shopInfo
        }
      })
    }
  },
  components: {
    DetailNavBar,
    DetailSwiper,
    DetailGoodsInfo,
    DetailShopInfo
  }
};
</script>

<style lang="less" scoped></style>
