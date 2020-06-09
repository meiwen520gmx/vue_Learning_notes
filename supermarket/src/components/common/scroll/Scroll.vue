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
  props: {
    probeType: {
      type: Number,
      default: 0
    },
    pullUpLoad: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      scroll: null
    };
  },
  mounted() {
    this.scroll = new BScroll(this.$refs.wrapper, {
      probeType: this.probeType, //有些界面不需要监听滚动，节省系统资源
      pullUpLoad: this.pullUpLoad, //有些界面不需要监听上拉刷新
      click: true
    });
    //监听滚动的位置
    this.scroll.on("scroll", position => {
      this.$emit("scroll", position);
    });
    //监听加载更多
    this.scroll.on("pullingUp", () => {
      this.$emit("pullUpLoad");
      //网络请求更多的数据后
      // setTimeout(() => {
      //   this.scroll.finishPullUp();
      // }, 1000);
		});
  },
  methods: {
    //回到顶部
    scrollTo(x, y, time = 500) {
      this.scroll && this.scroll.scrollTo(x, y, time);
    },
    //请求完数据后调用此方法
    finishPullUp() {
      this.scroll && this.scroll.finishPullUp();
    },
    refresh(){
      // console.log("---------")
      //逻辑判断，先判断是否有值，再调用方法
      this.scroll && this.scroll.refresh();
    }
  }
};
</script>

<style lang="less" scoped></style>
