<template>
  <div class="bottom-bar">
    <div class="check-all" @click="handleCheckAll">
      <check-button :value="checkAll"></check-button>
      <span>全选</span>
    </div>
    <span>合计：￥{{ totalPrice }}</span>
    <span class="calculation">去计算({{ checkLength }})</span>
  </div>
</template>

<script>
import CheckButton from "components/content/checkButton/CheckButton";
import { mapMutations, mapState } from "vuex";
export default {
  data() {
    return {
      // checkAll: false,
    };
  },
  methods: {
    ...mapMutations(["check_all"]),
    handleCheckAll() {
      if (this.checkAll) {
        //全部选中
        this.check_all(false); //让他全部不选中
      } else {
        //部分或全部不选中
        this.check_all(true); //让他全部选中
      }
    }
  },
  computed: {
    ...mapState(["cartList"]),
    totalPrice() {
      return this.cartList
        .filter(item => {
          return item.checked;
        })
        .reduce((preVal, item) => {
          return preVal + item.price * item.count;
        }, 0);
    },
    checkLength() {
      return this.cartList.filter(item => item.checked).length;
    },
    //是否全选的状态
    checkAll() {
      //都可以
      if (this.cartList.length == 0) return false;
      // return !this.cartList.filter(item => !item.checked).length;
      return !this.cartList.find(item => !item.checked);
      //find的性能比filter要好，因为find() 返回符合条件的元素，之后的值不会再调用执行函数,而filter要全部查找一遍，不同场景使用不同的方法
    }
  },
  components: {
    CheckButton
  }
};
</script>

<style lang="less" scoped>
.bottom-bar {
  height: 40px;
  background-color: @bgColor;
  position: relative;
  bottom: 0px;
  .fj();
  .check-all {
    padding-left: 15px;
    width: 50px;
    .fj();
  }
  .calculation {
    background-color: @calculateColor;
    color: #fff;
    height: 40px;
    line-height: 40px;
    padding: 0 15px;
  }
}
</style>
