<template>
  <div class="home">
    <nav-bar class="home-nav">
      <div slot="center">购物街</div>
    </nav-bar>
    <home-swiper :banner="banner"></home-swiper>
    <recommend-view :recommends="recommends"></recommend-view>
    <feature-view :features="features"></feature-view>
    <tab-control
      class="tab-control"
      :titles="['流行', '新款', '精选']"
    ></tab-control>
    <goods-list :goods="goods['pop'].list"></goods-list>
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
      }
    };
  },
  created() {
    //函数调用--> 压入函数栈（保存函数调用过程中所有变量）
    //函数调用结束--> 弹出函数栈（释放函数所有的变量）
    //请求多个数据
    // getHomeMultidata().then(res => {
    //   console.log(res)
    // })
    this.getHomeGoods('pop');//请求流行数据
    this.getHomeGoods('new');//请求新款数据
    this.getHomeGoods('sell');//请求精选数据
    this.getBannerData(); //请求首页轮播图
    this.getRecommendData();
    this.getFeaturesData();
  },
  methods: {
    getHomeGoods(type) {
      const page = this.goods[type].page + 1;
      getHomeGoods(type, page).then(res => {
        this.goods[type].list.push(...res.data);
        this.goods[type].page += 1;
      });
      console.log(this.goods)
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
    GoodsList
  }
};
</script>

<style lang="less" scoped>
.home {
  padding-top: 44px;
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
  position: sticky; //兼容性较差
  top: 44px;
}
</style>
