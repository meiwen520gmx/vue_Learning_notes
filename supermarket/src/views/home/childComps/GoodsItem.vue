<template>
  <a :href="link" class="goods-item">
    <img :src="image" alt="" />
    <div>{{ title }}</div>
  </a>
</template>

<script>
export default {
  props: {
    link: {
      type: String,
      default: ""
    },
    image: {
      type: String,
      default: ""
    },
    title: {
      type: String,
      default: ""
    }
  }
};
</script>

<style lang="less" scoped>
.goods-item {
  .fj(center, center);
  flex-direction: column;
  font-size: 13px;
  text-align: center;
}
img {
  width: 70px;
  height: 70px;
  border-radius: 50%;
}
</style>
