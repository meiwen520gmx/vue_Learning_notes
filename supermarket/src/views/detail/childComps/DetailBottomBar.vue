<template>
  <div class="bottom-bar">
    <div class="bar-item bar-left">
      <div>
        <i class="icon service"></i>
        <span class="text">客服</span>
      </div>
      <div>
        <i class="icon shop"></i>
        <span class="text">店铺</span>
      </div>
      <div>
        <i class="icon select"></i>
        <span class="text">收藏</span>
      </div>
    </div>
    <div class="bar-item bar-right">
      <div class="cart" @click="addToCart">加入购物车</div>
      <div class="buy">购买</div>
    </div>
    <!-- <sport-ball ref="ball" class="sport-ball"></sport-ball> -->
  </div>
</template>

<script>
export default {
  data() {
    return {
      
    }
  },
  methods: {
    addToCart() {
      this.$emit("addToCart")
    }
  },
};
</script>

<style lang="less" scoped>
.bottom-bar {
  height: 49px;
  background-color: #fff;
  position: relative;
  display: flex;
  text-align: center;
}
.bar-item{
  flex: 1;
  display: flex;
}
.bar-item>div{
  flex: 1;
}
.bar-left .text{
  font-size: 13px;
}
.bar-left .icon{
  display: block;
  width: 18px;
  height: 18px;
  margin: 6px auto 2px;
  // background: url("~assets/imgs/tabbar/category_active.png") 0 0/100%;
}
.bar-left .service{
  // background-position: 0 -54px;
  background: url("~assets/imgs/detail/kefu1.png") center center no-repeat;
}
.bar-left .shop{
  // background-position: 0 -98px;
  background: url("~assets/imgs/detail/shangcheng.png") center center no-repeat;
}
.bar-left .select{
  background: url("~assets/imgs/detail/collection-b.png") center center no-repeat;
}
.bar-right{
  font-size: @h3Size;
  color: #fff;
  line-height: 49px;
}
.bar-right .cart{
  background-color: #ffe817;
  color: #333;
}
.bar-right .buy{
  background-color: @colorTint;
}
.sport-ball{
  position: absolute;
  left: 225px;
  bottom: 20px;
}
</style>
