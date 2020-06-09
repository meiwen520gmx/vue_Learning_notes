<template>
  <div class="home">
    <nav-bar class="home-nav">
      <div slot="center">购物街</div>
    </nav-bar>
    <scroll
      class="content"
      ref="scrollBS"
      :probe-type="3"
      :pull-up-load="true"
      @scroll="contentScroll"
      @pullUpLoad="pullUpLoad"
    >
      <home-swiper :banner="banner"></home-swiper>
      <recommend-view :recommends="recommends"></recommend-view>
      <feature-view :features="features"></feature-view>
      <tab-control
        class="tab-control"
        :titles="['流行', '新款', '精选']"
        @tabClick="tabClick"
      ></tab-control>
      <goods-list :goods="showGoods"></goods-list>
    </scroll>
    <!-- 一、组件是不能监听点击 -->
    <!-- <back-top ref="backTop"></back-top> -->

    <!-- 二、.native修饰符：当我们需要监听一个组件的原生事件时，必须给对应的事件加上.native修饰符，才能进行监听 -->
    <back-top @click.native="backTop" v-show="isShow"></back-top>

    <ul>
      <li>列表1</li>
      <li>列表2</li>
      <li>列表3</li>
      <li>列表4</li>
      <li>列表5</li>
      <li>列表6</li>
      <li>列表7</li>
      <li>列表8</li>
      <li>列表9</li>
      <li>列表10</li>
      <li>列表11</li>
      <li>列表12</li>
      <li>列表13</li>
      <li>列表14</li>
      <li>列表15</li>
      <li>列表16</li>
      <li>列表17</li>
      <li>列表18</li>
      <li>列表19</li>
      <li>列表20</li>
      <li>列表7</li>
      <li>列表8</li>
      <li>列表9</li>
      <li>列表10</li>
      <li>列表11</li>
      <li>列表12</li>
      <li>列表13</li>
      <li>列表14</li>
      <li>列表15</li>
      <li>列表16</li>
      <li>列表17</li>
      <li>列表18</li>
      <li>列表19</li>
      <li>列表20</li>
      <li>列表20</li>
      <li>列表7</li>
      <li>列表8</li>
      <li>列表9</li>
      <li>列表10</li>
      <li>列表11</li>
      <li>列表12</li>
      <li>列表13</li>
      <li>列表14</li>
      <li>列表15</li>
      <li>列表16</li>
      <li>列表17</li>
      <li>列表18</li>
      <li>列表19</li>
      <li>列表20</li>
    </ul>
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

import {
  getBannerData,
  getRecommendData,
  getFeaturesData,
  getHomeGoods
} from "network/home";
export default {
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
      isShow: false
    };
  },
  mounted() {
    //一、监听子组件的点击事件
    // this.$refs.backTop.$el.addEventListener("click", function() {
    //   console.log("21111111111");
    // });

    //监听item中图片加载完成
    this.$bus.$on("itemImageLoad", () => {
      this.$refs.scrollBS.refresh();
    });
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
    },
    backTop() {
      //调用子组件的方法
      this.$refs.scrollBS.scrollTo(0, 0, 800);
    },
    contentScroll(position) {
      this.isShow = -position.y > 1000;
    },
    pullUpLoad() {
      this.getHomeGoods(this.currentType);
      //以防止图片加载过慢导致better-scroll计算可滚动距离有误。图片加载过快就不会出现可滚动距离有误，图片加载过慢会导致可滚动距离变短
      //所以以防万一，等每次请求完毕后重新刷新页面计算可滚动距离
      this.$refs.scrollBS.scroll.refresh(); //这一步很关键
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
  padding-top: 44px;
  height: 100vh; //视口高度 vh->viewheight
}
.home-nav {
  background-color: @colorTint;
  color: #fff;
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  z-index: 9;
}
.tab-control {
  // position: sticky; //兼容性较差
  // top: 44px;
}
.content {
  height: calc(100% - 93px); //父级高度设置为100vh才会是视图的高度
  overflow: hidden;
}
</style>
