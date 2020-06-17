<template>
  <div class="home">
    <nav-bar class="home-nav">
      <div slot="center">购物街</div>
    </nav-bar>
    <tab-control
      v-show="isTabFixed"
      :titles="['流行', '新款', '精选']"
      @tabClick="tabClick"
      ref="tabControl1"
    ></tab-control>
    <scroll
      class="content"
      ref="scrollBS"
      :probe-type="3"
      :pull-up-load="true"
      @scroll="contentScroll"
      @pullUpLoad="pullUpLoad"
    >
      <home-swiper
        :banner="banner"
        @swiperImageLoad="swiperImageLoad"
      ></home-swiper>
      <recommend-view :recommends="recommends"></recommend-view>
      <feature-view :features="features"></feature-view>
      <tab-control
        :titles="['流行', '新款', '精选']"
        @tabClick="tabClick"
        ref="tabControl"
      ></tab-control>
      <goods-list :goods="showGoods"></goods-list>
    </scroll>
    <!-- 一、组件是不能监听点击 -->
    <!-- <back-top ref="backTop"></back-top> -->

    <!-- 二、.native修饰符：当我们需要监听一个组件的原生事件时，必须给对应的事件加上.native修饰符，才能进行监听 -->
    <back-top @click.native="backTop" v-show="isShow"></back-top>
  </div>
</template>

<script>
// 子组件和公共组件应该分开引入，方便以后代码管理
import HomeSwiper from "./childComps/HomeSwiper";
import RecommendView from "./childComps/RecommendView";
import FeatureView from "./childComps/FeatureView";
//公共组件：
import NavBar from "components/common/navbar/NavBar";
import TabControl from "components/content/tabControl/TabControl";
import GoodsList from "components/content/goods/GoodsList";
import Scroll from "components/common/scroll/Scroll";
import BackTop from "components/content/backTop/BackTop";

//公共方法
import { debounce } from "common/utils";
import { itemListenerMixin } from "common/mixin";
import {
  getBannerData,
  getRecommendData,
  getFeaturesData,
  getHomeGoods
} from "network/home";
export default {
  mixins: [itemListenerMixin],
  data() {
    return {
      banner: [],
      recommends: [],
      features: [],
      goods: {
        pop: {
          page: 0,
          list: []
        },
        new: {
          page: 0,
          list: []
        },
        sell: {
          page: 0,
          list: []
        }
      },
      currentType: "pop",
      isShow: false,
      tabOffsetTop: 0,
      isTabFixed: false,
      saveY: 0,
      itemImgListener: null
    };
  },
  destroyed() {
    // console.log("销毁")
  },
  activated() {
    this.$refs.scrollBS.scrollTo(0, this.saveY, 0);
    this.$refs.scrollBS.refresh();
  },
  deactivated() {
    this.saveY = this.$refs.scrollBS.getScrollY();

    //取消全局事件的监听
    this.$bus.$off("itemImageLoad", this.itemImgListener);
  },
  mounted() {
    //一、监听子组件的点击事件
    // this.$refs.backTop.$el.addEventListener("click", function() {
    //   console.log("21111111111");
    // });

    const refresh = debounce(this.$refs.scrollBS.refresh, 200);

    //对监听的事件进行保存
    this.itemImgListener = () => {
      // this.$refs.scrollBS.refresh()这个会执行很多次，给服务器造成了很多压力，对此进行优化使用防抖函数：;
      refresh();
    };
    //监听item中图片加载完成
    this.$bus.$on("itemImageLoad", this.itemImgListener);
  },
  computed: {
    showGoods() {
      return this.goods[this.currentType].list;
    }
  },
  created() {
    //函数调用--> 压入函数栈（保存函数调用过程中所有变量）
    //函数调用结束--> 弹出函数栈（释放函数所有的变量）
    //请求多个数据
    // getHomeMultidata().then(res => {
    //   console.log(res)
    // })
    this.getHomeGoods("pop"); //请求流行数据
    this.getHomeGoods("new"); //请求新款数据
    this.getHomeGoods("sell"); //请求精选数据
    this.getBannerData(); //请求首页轮播图
    this.getRecommendData();
    this.getFeaturesData();
  },
  methods: {
    /**
     * 事件监听相关的方法
     */
    tabClick(index) {
      switch (index) {
        case 0:
          this.currentType = "pop";
          break;
        case 1:
          this.currentType = "new";
          break;
        case 2:
          this.currentType = "sell";
          break;
      }
      this.$refs.tabControl1.currentIndex = index;
      this.$refs.tabControl.currentIndex = index;
    },
    backTop() {
      //调用子组件的方法
      this.$refs.scrollBS.scrollTo(0, 0, 800);
    },
    contentScroll(position) {
      //1.判断BackTop是否显示
      this.isShow = -position.y > 1000;
      //2.决定tabControl是否吸顶（position: fixed）
      this.isTabFixed = -position.y > this.tabOffsetTop ? true : false;
    },
    pullUpLoad() {
      this.getHomeGoods(this.currentType);
      //以防止图片加载过慢导致better-scroll计算可滚动距离有误。图片加载过快就不会出现可滚动距离有误，图片加载过慢会导致可滚动距离变短
      //所以以防万一，等每次请求完毕后重新刷新页面计算可滚动距离
      // this.$refs.scrollBS.scroll.refresh(); //在这里不用刷新一次了，因为前面已经对图片加载完成进行一个监听，然后刷新页面重新计算可滚动距离，所以这里就不用了刷新了
    },
    swiperImageLoad() {
      //所有的组件都有一个属性$el:用于获取组件中的元素
      // console.log(this.$refs.tabControl.$el.offsetTop);
      //轮播图加载完成拿到tabControl的offsetTop
      this.tabOffsetTop = this.$refs.tabControl.$el.offsetTop;
    },

    /**
     * 网络请求相关的方法
     */
    getHomeGoods(type) {
      const page = this.goods[type].page + 1;
      getHomeGoods(type, page).then(res => {
        this.goods[type].list.push(...res.data);
        this.goods[type].page += 1;
        this.$refs.scrollBS.finishPullUp();
      });
    },
    getBannerData() {
      getBannerData().then(res => {
        if (res.code == 200) {
          this.banner = res.data;
        }
      });
    },
    getRecommendData() {
      getRecommendData().then(res => {
        if (res.code == 200) {
          this.recommends = res.data;
        }
      });
    },
    getFeaturesData() {
      getFeaturesData().then(res => {
        if (res.code == 200) {
          this.features = res.data;
        }
      });
    }
  },
  components: {
    HomeSwiper,
    RecommendView,
    FeatureView,
    NavBar,
    TabControl,
    GoodsList,
    Scroll,
    BackTop
  }
};
</script>

<style lang="less" scoped>
.home {
  // padding-top: 44px;
  height: 100vh; //视口高度 vh->viewheight
}
.home-nav {
  background-color: @colorTint;
  color: #fff;
  //在使用浏览器原生滚动时，为了让导航不跟随一起滚动
  // position: fixed;
  // left: 0;
  // right: 0;
  // top: 0;
  // z-index: 9;
}
// .fixed {
//   // position: sticky; //兼容性较差
//   // top: 44px;
// }
.content {
  height: calc(100% - 93px); //父级高度设置为100vh才会是视图的高度
  overflow: hidden;
}
</style>
