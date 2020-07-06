<template>
  <div class="check-button">
    <img v-if="!value" src="~assets/imgs/cart/yuanquan.png" alt="">
    <img v-else src="~assets/imgs/cart/xuanzhong.png" alt="">
  </div>
</template>

<script>
  export default {
    props: {
      value: {
        type: Boolean,
        default: false
      }
    },
    data() {
      return {
        
      }
    },
    methods: {
      // handleChecked() {
      //   this.$emit("checkBtnClick")
      // }
    },
  }
</script>

<style lang="less" scoped>

</style>