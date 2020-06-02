<template>
  <div class="feature-container">
    <h3>本周流行</h3>
    <div class="feature">
      <div v-for="(item, index) in features" :key="index" class="feature-box">
        <goods-item
          :link="item.link"
          :image="item.image"
          :title="item.title"
        ></goods-item>
      </div>
    </div>
  </div>
</template>

<script>
import GoodsItem from "./GoodsItem";
export default {
  props: {
    features: {
      type: Array,
      default() {
        return [];
      }
    }
  },
  components: {
    GoodsItem
  }
};
</script>

<style lang="less" scoped>
.feature-container {
  padding: 15px 0;
}
h3 {
  text-align: center;
  font-size: @h3Size;
  color: @h3Color;
  font-weight: bold;
}
.feature {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  justify-content: space-around;
  border-bottom: 8px solid #eee;
}
.feature-box {
  flex: 25%;
  padding: 10px 0;
}
</style>
