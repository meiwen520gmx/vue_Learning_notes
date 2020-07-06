<template>
  <div id="shop-item">
    <div class="item-select">
      <check-button @click.native="checkBtnClick"  :value="itemInfo.checked"></check-button>
    </div>
    <div class="item-img">
      <img :src="itemInfo.image" alt="商品图片">
    </div>
    <div class="item-info">
      <div class="item-title">{{itemInfo.title}}</div>
      <div class="item-desc">{{itemInfo.desc}}</div>
      <div class="info-bottom">
        <div class="item-price left">￥{{itemInfo.price}}</div>
        <div class="item-count right">x{{itemInfo.count}}</div>
      </div>
    </div>
  </div>
</template>

<script>
import CheckButton from "components/content/checkButton/CheckButton";
  export default {
    props: {
      itemInfo: {
        type: Object,
        default(){
          return {}
        }
      }
    },
    data() {
      return {
        
      }
    },
    methods: {
      checkBtnClick() {
          this.itemInfo.checked = !this.itemInfo.checked;
      }
    },
    components: {
      CheckButton,
    },
  }
</script>

<style lang="less" scoped>
#shop-item{
  width: 100%;
  display: flex;
  font-size: 0;
  padding: 5px;
  border-bottom: 1px solid #ccc;
}
.item-select{
  width: 20px;
  .fj(center, center);
}
.item-img img{
  width: 80px;
  height: 100px;
  display: block;
  border-radius: 5px;
  margin-left: 10px;
}
.item-info{
  font-size: 17px;
  color: #333;
  padding: 5px 10px;
  position: relative;
  overflow: hidden;
}
.item-info, .item-desc {
  font-size: @fontSize;
  color: @colorText;
  margin-top: 5px;
}
.item-title, .item-desc{
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}
.info-bottom{
  margin-top: 10px;
  position: absolute;
  bottom: 10px;
  left: 10px;
  right: 10px;
  .fj();
}
.info-bottom, .item-price{
  color: @colorHithText;
}
</style>