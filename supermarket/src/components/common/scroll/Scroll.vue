<template>
  <div class="wrapper" ref="wrapper">
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import BScroll from "better-scroll";
export default {
  data() {
    return {
      scroll: null
    }
  },
  mounted() {
    this.scroll = new BScroll(this.$refs.wrapper, {
      probeType: 2,
      pullUpLoad: true
    });
    //监听滚动
    this.scroll.on("scroll", position => {
      // console.log(position)
    });
    //监听加载更多
    this.scroll.on("pullingUp", () => {
      console.log("上拉加载更多");
      //网络请求更多的数据后
      setTimeout(() => {
        this.scroll.finishPullUp();
      }, 1000);
    });

    
  },
  methods: {
    //回到顶部
    scrollTo(x, y, time=500) {
      this.scroll.scrollTo(x, y, time);
    }
  },
};
</script>

<style lang="less" scoped></style>
