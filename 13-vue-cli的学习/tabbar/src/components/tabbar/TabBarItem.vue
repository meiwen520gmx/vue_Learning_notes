<template>
  <div class="tab_bar_item" @click="itemClick">
    <!-- 插槽最终会被替代 -->
    <div v-if="!isActive"><slot name="item-icon"></slot></div>
    <div v-else><slot name="item-icon-active"></slot></div>
    <div :style="activeStyle">
      <slot name="item-text"></slot>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    path: String,
    activeColor: {
      type: String,
      default: 'red'
    }
  },
  data() {
    return {
      
    };
  },
  computed: {
    isActive() {
      return this.$route.path.indexOf(this.path) !== -1
    },
    activeStyle(){
      return this.isActive ? {color: this.activeColor} : {}
    }
  },
  methods: {
    itemClick() {
        this.$router.push(this.path)
    }
  },
};
</script>

<style scoped>
.tab_bar_item {
  flex: 1;
  text-align: center;
  height: 49px;
  font-size: 14px;
}
.tab_bar_item img {
  margin-top: 3px;
  width: 24px;
  height: 24px;
  vertical-align: middle;
}
</style>
