<template>
  <div class="goods-item">
    <!-- @load="imageLoad"监听图片加载完成 -->
    <img :src="goodsItem.image" alt="" @load="imageLoad"/>
    <div class="goods-info">
      <p>{{ goodsItem.title }}</p>
      <div class="goods-operate">
        <span class="price">{{ goodsItem.price }}</span>
        <img src="~assets/imgs/common/collection-b.svg" alt="" />
        <span class="collect">{{ goodsItem.collectionnum }}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    goodsItem: {
      type: Object,
      default() {
        return {};
      }
    }
  },
  methods: {
    imageLoad() {
      this.$bus.$emit("itemImageLoad");//发送到事件总线
    }
  },
};
</script>

<style lang="less" scoped>
.goods-item {
  padding-bottom: 40px;
  position: relative;
  display: inline-block;
  width: 48%;
  margin-right: 2%;
}
.goods-item img {
  width: 100%;
  border-radius: 5px;
}
.goods-info {
  font-size: @smallText;
  position: absolute;
  bottom: 5px;
  left: 0;
  right: 0;
  overflow: hidden;
  text-align: center;
  p {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
}
.goods-operate {
  .price {
    color: @colorHithText;
    margin-right: 10px;
  }
  img {
    width: 14px;
    height: 14px;
    margin-right: 10px;
  }
}
// .goods-info .collect::before{
//   content: " ";
//   position: absolute;
//   left: -15px;
//   top: -1px;
//   width: 14px;
//   height: 14px;
//   background: url("~assets/imgs/tabbar/category.png") 0 0/14px 14px;
// }
</style>
