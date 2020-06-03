<template>
  <div class="goods">
    <goods-list-item v-for="(item, index) in goods" :key="index" >
    </goods-list-item>
  </div>
</template>

<script>
import GoodsListItem from "./GoodsListItem";
export default {
  components: {
    GoodsListItem
  },
  props: {
    goods: {
      type: Array,
      default() {
        return [];
      }
    }
  }
};
</script>

<style lang="less" scoped></style>
