<template>
  <swiper>
    <swiper-item v-for="(item, index) in banner" :key="index">
      <a :href="item">
        <img :src="item" alt="" @load="imageLoad"/>
      </a>
    </swiper-item>
  </swiper>
</template>

<script>
import { Swiper, SwiperItem } from "components/common/swiper";
import { imageListener } from "common/mixin";
export default {
  mixins: [imageListener],
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
      
    }
  },
  components: {
    Swiper,
    SwiperItem
  },
  methods: {
    
  },
};
</script>

<style lang="less" scoped></style>
