<template>
  <div class="recommend">
      <div v-for="(item, index) in recommends" :key="index">
          <goods-item :link="item.link" :image="item.image" :title="item.title"></goods-item>
      </div>
  </div>
</template>

<script>
import GoodsItem from "./GoodsItem"
  export default {
    props: {
      recommends: {
        type: Array,
        default(){
          return []
        }
      }
    },
    components: {
      GoodsItem,
    },
    
  }
</script>

<style lang="less" scoped>
.recommend{
  padding: 15px 0 20px 0;
  display: flex;
  align-items: center;
  justify-content: space-around;
  border-bottom: 8px solid #eee;
}

</style>