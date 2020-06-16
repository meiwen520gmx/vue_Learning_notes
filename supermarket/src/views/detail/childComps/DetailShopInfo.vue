<template>
  <div class="shop-info">
    <section class="shop-header">
      <img :src="shop.avator" alt="" /><span>{{ shop.shopName }}</span>
    </section>
    <div class="shop-content">
      <div class="content-left">
        <section>
          <p class="numr">{{ toFix(shop.TotalSale, 1) }}万</p>
          <p class="text">总销量</p>
        </section>
        <section>
          <p class="numr">{{ shop.TotalGoods }}</p>
          <p class="text">全部宝贝</p>
        </section>
      </div>
      <div class="content-right">
        <div
          v-for="(item, index) in shop.score"
          :key="index"
          class="score-item"
        >
          <span>{{ item.name }}</span>
          <span :class="item.score >= 5 ? 'red' : 'green'">{{
            toFix(item.score, 1)
          }}</span>
          <span :class="item.score >= 5 ? 'red' : 'green'">{{
            item.score >= 5 ? "高" : "低"
          }}</span>
        </div>
      </div>
    </div>
    <div class="shop-btn">
      <button>进店逛逛</button>
    </div>
  </div>
</template>

<script>
//公共方法
import { toFix } from "common/utils";
export default {
  name: "detailShopInfo",
  props: {
    shop: {
      type: Object,
      default() {
        return {};
      }
    }
  },
  methods: {
    toFix
  },
};
</script>

<style lang="less" scoped>
.red {
  color: @colorHithText;
}
.green {
  color: @green;
}
.shop-info {
  padding: 20px 10px;
  border-bottom: 3px solid @lineColor;
  .shop-header {
    .fj(flex-start, center);
    font-size: @h3Size;
    padding-bottom: 20px;
    img {
      border-radius: 50%;
      margin-right: 10px;
    }
  }
  .shop-content {
    padding: 0 20px;
    color: #000;
    .fj(space-between, center);
    .content-left {
      flex: 1;
      .fj(space-around, center);
      border-right: 1px solid @lineColor;
      section {
        text-align: center;
        .numr {
          font-size: @h3Size;
          font-weight: bold;
          padding-bottom: 5px;
        }
        .text {
          font-size: @smallText;
        }
      }
    }
    .content-right {
      flex: 1;
      text-align: center;
      font-size: @smallText;
      .score-item {
        margin-left: 20px;
        line-height: 25px;
        .fj(center,center);
        span {
          flex: 1;
        }
      }
    }
  }
  .shop-btn{
    text-align: center;
    padding: 10px 0;
    button{
      padding: 10px 20px;
    }
  }
}
</style>
