<template>
  <div class="home">
    <nav-bar class="home-nav">
      <div slot="center">购物街</div>
    </nav-bar>
    <home-swiper :banner="banner"></home-swiper>
    <recommend-view :recommends="recommends"></recommend-view>
    <feature-view :features="features"></feature-view>
    <tab-control class="tab-control" :titles="['流行', '新款', '精选']"></tab-control>
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

// import { getHomeMultidata } from "network/home";
export default {
  data() {
    return {
      banner: [
        {
          height: 390,
          height923: 390,
          image: "https://ftp.bmp.ovh/imgs/2020/06/368a81b958a627e6.jpg",
          link: "https://ftp.bmp.ovh/imgs/2020/06/368a81b958a627e6.jpg",
          title: "换新女装街",
          width: 750,
          width923: 750
        },
        {
          height: 390,
          height923: 390,
          image: "https://ftp.bmp.ovh/imgs/2020/06/7d5859afb087f2f9.jpg",
          link: "https://ftp.bmp.ovh/imgs/2020/06/7d5859afb087f2f9.jpg",
          title: "换新女装街",
          width: 750,
          width923: 750
        },
        {
          height: 390,
          height923: 390,
          image: "https://ftp.bmp.ovh/imgs/2020/06/2e6996c3070f4b1b.jpg",
          link: "https://ftp.bmp.ovh/imgs/2020/06/2e6996c3070f4b1b.jpg",
          title: "换新女装街",
          width: 750,
          width923: 750
        },
        {
          height: 390,
          height923: 390,
          image: "https://ftp.bmp.ovh/imgs/2020/06/8bd257e4cd8231ff.jpg",
          link: "https://ftp.bmp.ovh/imgs/2020/06/8bd257e4cd8231ff.jpg",
          title: "换新女装街",
          width: 750,
          width923: 750
        }
      ],
      recommends: [
        {
          image: "https://ftp.bmp.ovh/imgs/2020/06/7d7f5dc8a6fcd6e7.jpg",
          link: "https://ftp.bmp.ovh/imgs/2020/06/7d7f5dc8a6fcd6e7.jpg",
          title: "换新女装街"
        },
        {
          image: "https://ftp.bmp.ovh/imgs/2020/06/2aa6f944e2c9b36d.jpg",
          link: "https://ftp.bmp.ovh/imgs/2020/06/2aa6f944e2c9b36d.jpg",
          title: "时尚大品牌"
        },
        {
          image: "https://ftp.bmp.ovh/imgs/2020/06/678d71a051e48664.jpg",
          link: "https://ftp.bmp.ovh/imgs/2020/06/678d71a051e48664.jpg",
          title: "第一无二"
        },
        {
          image: "https://ftp.bmp.ovh/imgs/2020/06/cb86400494975622.jpg",
          link: "https://ftp.bmp.ovh/imgs/2020/06/cb86400494975622.jpg",
          title: "时装秀"
        }
      ],
      features: [
        {
          image: "https://ftp.bmp.ovh/imgs/2020/06/7d7f5dc8a6fcd6e7.jpg",
          link: "https://ftp.bmp.ovh/imgs/2020/06/7d7f5dc8a6fcd6e7.jpg",
          title: "换新女装街"
        },
        {
          image: "https://ftp.bmp.ovh/imgs/2020/06/2aa6f944e2c9b36d.jpg",
          link: "https://ftp.bmp.ovh/imgs/2020/06/2aa6f944e2c9b36d.jpg",
          title: "时尚大品牌"
        },
        {
          image: "https://ftp.bmp.ovh/imgs/2020/06/678d71a051e48664.jpg",
          link: "https://ftp.bmp.ovh/imgs/2020/06/678d71a051e48664.jpg",
          title: "第一无二"
        },
        {
          image: "https://ftp.bmp.ovh/imgs/2020/06/cb86400494975622.jpg",
          link: "https://ftp.bmp.ovh/imgs/2020/06/cb86400494975622.jpg",
          title: "时装秀"
        },
        {
          image: "https://ftp.bmp.ovh/imgs/2020/06/7d7f5dc8a6fcd6e7.jpg",
          link: "https://ftp.bmp.ovh/imgs/2020/06/7d7f5dc8a6fcd6e7.jpg",
          title: "换新女装街"
        },
        {
          image: "https://ftp.bmp.ovh/imgs/2020/06/2aa6f944e2c9b36d.jpg",
          link: "https://ftp.bmp.ovh/imgs/2020/06/2aa6f944e2c9b36d.jpg",
          title: "时尚大品牌"
        },
        {
          image: "https://ftp.bmp.ovh/imgs/2020/06/678d71a051e48664.jpg",
          link: "https://ftp.bmp.ovh/imgs/2020/06/678d71a051e48664.jpg",
          title: "第一无二"
        },
        {
          image: "https://ftp.bmp.ovh/imgs/2020/06/cb86400494975622.jpg",
          link: "https://ftp.bmp.ovh/imgs/2020/06/cb86400494975622.jpg",
          title: "时装秀"
        }
      ]
    };
  },
  created() {
    //函数调用--> 压入函数栈（保存函数调用过程中所有变量）
    //函数调用结束--> 弹出函数栈（释放函数所有的变量）
    //请求多个数据
    // getHomeMultidata().then(res => {
    //   console.log(res)
    // })
  },
  components: {
    HomeSwiper,
    RecommendView,
    FeatureView,
    NavBar,
    TabControl
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
.tab-control{
  position: sticky;//兼容性较差
  top: 44px;
}
</style>
