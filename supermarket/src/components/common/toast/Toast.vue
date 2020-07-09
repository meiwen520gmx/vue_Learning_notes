<template>
  <div class="toast"  v-show="isShow">
    <div>{{message}}</div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        message: "",
        isShow: false
      }
    },
    methods: {
      show(message, duration=2000) {
        this.isShow = true;
        this.message = message;
        setTimeout(() => {
          this.isShow = false;
          this.message = "";
        },duration)
      }
    },
  }
</script>

<style lang="less" scoped>
.toast{
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: rgba(0,0,0,.5);
  color: #fff;
  padding: 10px 15px;
  border-radius: 5px;
  z-index: 99;
}
</style>