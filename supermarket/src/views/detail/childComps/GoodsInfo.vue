<template>
  <div v-if="Object.keys(detailInfo).length !== 0" class="goods-info">
    <div class="info-desc clear-fix">
      <div class="start"></div>
      <div class="desc">{{ detailInfo.desc }}</div>
      <div class="end"></div>
    </div>
    <div class="info-key">{{ detailInfo.detailImage[0].key }}</div>
    <div class="info-list">
      <img
        v-for="(item, index) in detailInfo.detailImage[0].list"
        :key="index"
        :src="item"
        alt=""
        @load="imgLoad"
      />
    </div>
    <div class="price-desc">
      <div class="price-desc-deco">
        <span>价格说明</span>
        <span class="desc-line"></span>
      </div>
      {{ detailInfo.priceDesc }}
    </div>
  </div>
</template>

<script>
export default {
  props: {
    detailInfo: {
      type: Object,
      default() {
        return {};
      }
    }
  },
  data() {
    return {
      counter: 0,
      imagesLength: 0
    };
  },
  watch: {
    detailInfo() {
      this.imagesLength = this.detailInfo.detailImage[0].list.length;
    }
  },
  methods: {
    //监听所有图片加载完成才触发事件，事件只回调一次
    imgLoad() {
      if (++this.counter === this.imagesLength) {
        this.$emit("imageLoad");
      }
    }
  }
};
</script>

<style lang="less" scoped>
.goods-info {
  padding: 20px 0;
}
.info-desc {
  padding: 0 10px;
  .start,
  .end {
    width: 100px;
    height: 1px;
    background-color: @subtitle;
    position: relative;
  }
  .start {
    &::before {
      position: absolute;
      content: "";
      width: 5px;
      height: 5px;
      background-color: #000;
    }
  }
  .end {
    float: right;
    &::before {
      position: absolute;
      content: "";
      width: 5px;
      height: 5px;
      background-color: #000;
      right: 0;
      top: -4px;
    }
  }
  .desc {
    padding: 10px 0;
  }
}
.info-key {
  padding: 10px;
  font-weight: bold;
  color: #000;
}
.info-list {
  text-align: center;
  margin: 10px;
  img {
    width: 100%;
    object-fit: cover;
  }
}
.price-desc {
  padding: 10px;
  border-left: 5px solid @colorHithText;
  line-height: 25px;
  .price-desc-deco {
    .fj();
    span {
      font-size: @h3Size;
      font-weight: bold;
      color: @colorHithText;
      flex: 2;
    }
    .desc-line {
      display: inline-block;
      height: 1px;
      background-color: @lineColor;
      flex: 8;
    }
  }
}
</style>
