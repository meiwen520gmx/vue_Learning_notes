<template>
  <div>
    <nav-bar class="home-nav">
      <div slot="left" class="back" @click="back">
        <img src="~/assets/imgs/detail/fanhui.png" alt="" />
      </div>
      <div slot="center" class="title">
        <div
          v-for="(item, index) in titles"
          :key="index"
          :class="{ active: index === currentIndex }"
          @click="handleClick(index)"
        >
          {{ item }}
        </div>
      </div>
    </nav-bar>
  </div>
</template>

<script>
//公共组件：
import NavBar from "components/common/navbar/NavBar";
export default {
  data() {
    return {
      titles: ["商品", "参数", "评论", "推荐"],
      currentIndex: 0
    };
  },
  methods: {
    handleClick(index) {
      this.currentIndex = index;
    },
    back(){
      this.$router.go(-1);
    }
  },
  components: {
    NavBar
  }
};
</script>

<style lang="less" scoped>
.title {
  .fj(space-around);
  font-size: 13px;
}
.active {
  color: @colorTint;
}
.back {
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}
.back img{
  width: 25px;
  height: 25px;
}
</style>
