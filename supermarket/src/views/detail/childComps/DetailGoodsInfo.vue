<template>
  <div class="goods-info">
      <p class="goods-intro">
        {{goodsInfo.desc}}
      </p>
      <p class="price">￥{{goodsInfo.price}}</p>
      <div class="goods-people">
        <span v-for="(item, index) in goodsInfo.columns" :key="index">{{item}}</span>
      </div>
      <div class="sure">
        <div>
          <img src="~/assets/imgs/detail/zhengque.png" alt=""><span>退货补运费</span>
        </div>
        <div>
          <img src="~/assets/imgs/detail/zhengque.png" alt=""><span>全国包邮</span>
        </div>
        <div>
          <img src="~/assets/imgs/detail/zhengque.png" alt=""><span>7天无理由退货</span>
        </div>
      </div>
  </div>
</template>

<script>
  export default {
    props: {
      goodsInfo: {
        type: Object,
        default(){
          return {}
        }
      }
    }
  }
</script>

<style lang="less" scoped>
.goods-info{
  padding: 10px;
  border-bottom: 3px solid @lineColor;
  .goods-intro{
    font-size: @h3Size;
    font-weight: bold;
    margin-bottom: 10px;
  }
  .price{
    font-size: @priceMaxColor;
    color: @colorHithText;
    margin-bottom: 20px;
  }
  .goods-people{
    .fj();
    padding-bottom: 5px;
    border-bottom: 1px solid @lineColor;
    color: @subtitle;
  }
  .sure{
    padding: 20px 0 10px 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
    div{
      display: flex;
      align-items: center;
    }
    img{
      width: 15px;
      height: 15px;
    }
  }

}
</style>