<template>
  <div>
    <h2 class="title">{{ message }}</h2>
    <button>按钮</button>
    <Cpn />
  </div>
</template>

<script>
import Cpn from "./Cpn.vue";
export default {
  components: {
    Cpn,
  },
  data() {
    return {
      message: "我是vue实例里面的数据",
    };
  },
};
</script>

<style lang="less" scoped>
.title {
  color: #fff;
}
</style>
