<template>
  <div class="goods-item" @click="itemClick">
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
      //方法一：
      // if(this.$route.path.indexOf('/home') !== -1){
      //   console.log(this.$route.path)
      //   this.$bus.$emit("itemImageLoad");//发送到事件总线
      // }else if(this.$route.path.indexOf('/detail') !== -1){
      //   this.$bus.$emit("detailImageLoad");
      // }
      //方法二
      // this.$bus.$emit("itemImageLoad", this.$route.path);接收端判断路由后再决定要不要处理，这样做消耗性能，需要发事件这个行为，用了多少次这个组件就得发多少次事件
      //方法三
      this.$bus.$emit("itemImageLoad");//发送到事件总线 在相应的使用组件中进行处理
    },
    itemClick(){
      this.$router.push({path: '/detail', query: {id: this.goodsItem.id}})
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
