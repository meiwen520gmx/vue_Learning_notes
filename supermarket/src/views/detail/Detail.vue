<template>
  <div id="detail">
    <detail-nav-bar @titleClick="titleClick"></detail-nav-bar>
    <scroll class="content" ref="scroll">
      <detail-swiper
        @swiperImageLoad="swiperImageLoad"
        :banner="topImages"
      ></detail-swiper>
      <detail-base-info :goods="goods"></detail-base-info>
      <detail-shop-info :shop="shop"></detail-shop-info>
      <goods-info :detailInfo="detailInfo" @imageLoad="imageLoad"></goods-info>
      <detail-params-info
        ref="params"
        :paramsInfo="paramsInfo"
      ></detail-params-info>
      <detail-comment ref="comment" :comment="comment"></detail-comment>
      <goods-list ref="recommend" :goods="showGoods"></goods-list>
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
      itemImgListener: null,
      themeTopYs: [0, 1000, 2000, 3000]
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
    /**
     * 事件监听相关的方法
     */
    imageLoad() {
      this.$refs.scroll.refresh();
      this.themeTopYs = [];
      this.themeTopYs.push(0);
      //图片加载完再进行取值
      this.themeTopYs.push(this.$refs.params.$el.offsetTop);
      this.themeTopYs.push(this.$refs.comment.$el.offsetTop);
      this.themeTopYs.push(this.$refs.recommend.$el.offsetTop);
    },
    titleClick(index) {
      console.log(this.themeTopYs[index])
      this.$refs.scroll.scrollTo(0, -this.themeTopYs[index], 300);
    },
    swiperImageLoad() {},



    /**
     * 网络请求相关的方法
     */
    getDetail() {
      getDetail(this.id).then(res => {
        if (res.code == 200) {
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
          //第一次获取值：如果在这里取值offsetTop，值不对的原因就是：this.$refs.params.$el压根没有被渲染
          // this.$nextTick(() => {
          //第二次获取值：如果在这里取值offsetTop，值不对的原因就是：因为图片的问题
          //根据最新的数据，对应的DOM是已经被渲染出来，但是图片依然没有加载完成（目前获取的offsetTop不包含其中的图片）
          //offsetTop值不对的时候，都是因为图片的问题
          //   this.themeTopYs = [];
          //   this.themeTopYs.push(0);
          //   this.themeTopYs.push(this.$refs.params.$el.offsetTop);
          //   this.themeTopYs.push(this.$refs.comment.$el.offsetTop);
          //   this.themeTopYs.push(this.$refs.comment.$el.offsetTop);
          // });
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
