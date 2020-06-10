<template>
  <swiper>
    <swiper-item v-for="(item, index) in banner" :key="index">
      <a :href="item.link">
        <img :src="item.image" alt="" @load="imageLoad" />
      </a>
    </swiper-item>
  </swiper>
</template>

<script>
import { Swiper, SwiperItem } from "components/common/swiper";
export default {
  props: {
    banner: {
      type: Array,
      default() {
        return [];
      }
    }
  },
  data() {
    return {
      isLoad: false,//记录有没有发送事件
    };
  },
  methods: {
    imageLoad() {
      //只需要发送一次事件就可以了
      if (!this.isLoad) {
        this.$emit("swiperImageLoad");
        this.isLoad = true;
      }
    }
  },
  components: {
    Swiper,
    SwiperItem
  }
};
</script>

<style lang="less" scoped></style>
