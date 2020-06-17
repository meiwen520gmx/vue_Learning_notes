<template>
  <div id="detail">
    <detail-nav-bar></detail-nav-bar>
    <scroll class="content" ref="scroll">
      <detail-swiper :banner="topImages"></detail-swiper>
      <detail-base-info :goods="goods"></detail-base-info>
      <detail-shop-info :shop="shop"></detail-shop-info>
      <goods-info :detailInfo="detailInfo" @imageLoad="imageLoad"></goods-info>
      <detail-params-info :paramsInfo="paramsInfo"></detail-params-info>
      <detail-comment :comment="comment"></detail-comment>
      <goods-list :goods="showGoods"></goods-list>
    </scroll>
  </div>
</template>

<script>
import DetailNavBar from "./childComps/DetailNavBar";
import DetailSwiper from "./childComps/DetailSwiper";
import DetailBaseInfo from "./childComps/DetailBaseInfo";
import DetailShopInfo from "./childComps/DetailShopInfo";
import DetailGoodsInfo from "./childComps/DetailGoodsInfo";
import GoodsInfo from "./childComps/GoodsInfo";
import DetailParamsInfo from "./childComps/DetailParamInfo";
import DetailComment from "./childComps/DetailComment";

import Scroll from "components/common/scroll/Scroll";
import GoodsList from "components/content/goods/GoodsList";
//公共方法
import { debounce } from "common/utils";
import { itemListenerMixin } from "common/mixin";
import { getDetail } from "network/detail";
import { getHomeGoods } from "network/home";
export default {
  name: "detail",
  mixins: [itemListenerMixin],
  data() {
    return {
      id: null,
      topImages: [],
      goods: {},
      shop: {},
      detailInfo: {},
      paramsInfo: {},
      comment: [],
      showGoods: [],
      page: 0,
      itemImgListener: null
    };
  },
  created() {
    this.id = this.$route.query.id;
    this.getDetail();
  },
  destroyed() {
    //取消全局事件的监听
    this.$bus.$off("itemImageLoad", this.itemImgListener);
  },
  mounted() {
    this.getHomeGoods("pop");

    const refresh = debounce(this.$refs.scroll.refresh, 200);
    this.itemImgListener = () => {
      refresh();
    };
    this.$bus.$on("itemImageLoad", this.itemImgListener);
  },
  methods: {
    imageLoad() {
      this.$refs.scroll.refresh();
    },
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
          //4.获取商品详情数据
          this.detailInfo = res.data.detailInfo;
          //5.获取参数信息
          this.paramsInfo = res.data.itemParams;
          //6.获取评论数据
          this.comment = res.data.comment;
        }
      });
    },
    //7.获取推荐数据
    getHomeGoods(type) {
      getHomeGoods(type, this.page).then(res => {
        this.showGoods.push(...res.data);
      });
    }
  },
  components: {
    DetailNavBar,
    DetailSwiper,
    DetailBaseInfo,
    DetailShopInfo,
    DetailGoodsInfo,
    Scroll,
    GoodsInfo,
    DetailParamsInfo,
    DetailComment,
    GoodsList
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
