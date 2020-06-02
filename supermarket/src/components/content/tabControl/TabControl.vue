<template>
  <div class="tab-control">
    <div
      v-for="(item, index) in titles"
      :key="index"
      class="tab-control-item"
      :class="{ active: index === currentIndex }"
      @click="itemClick(index)"
    >
      <span>{{ item }}</span>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    titles: {
      type: Array,
      default() {
        return [];
      }
    }
  },
  data() {
    return {
      currentIndex: 0
    };
  },
  methods: {
    itemClick(index) {
      this.currentIndex = index
    }
  },
};
</script>

<style lang="less" scoped>
.tab-control {
  display: flex;
  text-align: center;
  height: 40px;
  line-height: 40px;
  font-size: @h3Size;
  background-color: #fff;
}
.tab-control-item {
  flex: 1;
  span{
    padding: 5px;
  }
}
.active {
  color: @colorTint;
  span {
    border-bottom: 3px solid @colorTint;
  }
}
</style>
