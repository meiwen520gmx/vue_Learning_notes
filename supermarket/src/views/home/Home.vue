<template>
  <div class="home">
    <nav-bar class="home-nav">
      <div slot="center">购物街</div>
    </nav-bar>
    <swiper>
				<swiper-item v-for="(item, index) in banner" :key="index">
          <a :href="item.link">
            <img :src="item.image" alt="">
          </a>
        </swiper-item>
		</swiper>
  </div>
</template>

<script>
import NavBar from "components/common/navbar/NavBar";
import { Swiper, SwiperItem } from "components/common/swiper";
// import { getHomeMultidata } from "network/home";
export default {
  data() {
    return {
      banner: [
        {
          height: 390,
          height923: 390,
          image: "https://i.loli.net/2020/05/28/Kz2reYCVDwUhqbW.jpg",
          image923: "https://i.loli.net/2020/05/28/Kz2reYCVDwUhqbW.jpg",
          link: "https://i.loli.net/2020/05/28/Kz2reYCVDwUhqbW.jpg",
          title: "换新女装街",
          width: 750,
          width923: 750
        },
        {
          height: 390,
          height923: 390,
          image: "https://i.loli.net/2020/05/28/51YLIcQlHrbqA6D.jpg",
          image923: "https://i.loli.net/2020/05/28/51YLIcQlHrbqA6D.jpg",
          link: "https://i.loli.net/2020/05/28/51YLIcQlHrbqA6D.jpg",
          title: "换新女装街",
          width: 750,
          width923: 750
        },
        {
          height: 390,
          height923: 390,
          image: "https://i.loli.net/2020/05/28/ozlVtKHabAn7vum.jpg",
          image923: "https://i.loli.net/2020/05/28/ozlVtKHabAn7vum.jpg",
          link: "https://i.loli.net/2020/05/28/ozlVtKHabAn7vum.jpg",
          title: "换新女装街",
          width: 750,
          width923: 750
        },
        {
          height: 390,
          height923: 390,
          image: "https://i.loli.net/2020/05/28/b6WwqsTMDnUipGP.jpg",
          image923: "https://i.loli.net/2020/05/28/b6WwqsTMDnUipGP.jpg",
          link: "https://i.loli.net/2020/05/28/b6WwqsTMDnUipGP.jpg",
          title: "换新女装街",
          width: 750,
          width923: 750
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
		NavBar,
		Swiper,
		SwiperItem
  }
};
</script>

<style lang="less" scoped>
.heihei {
  height: 50px;
}
.home-nav {
  background-color: @colorTint;
  color: #fff;
}
</style>
