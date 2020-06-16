<template>
  <div v-if="Object.keys(comment).length !== 0" class="comment">
    <div class="comment-title">
      <span>用户评价</span>
      <span>更多</span>
    </div>
    <div class="comment-item" v-for="(item, index) in comment" :key="index">
      <div class="item-header">
        <img :src="item.avator" alt="">
        <span>{{item.name}}</span>
      </div>
      <div class="item-cont">{{item.cont}}</div>
      <div class="item-footer">
        <span>{{item.time}}</span>
        <span>颜色：{{item.color}}</span>
        <span>尺码：{{item.size}}</span>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    props: {
      comment: {
        type: Array,
        default(){
          return []
        }
      }
    }
  }
</script>

<style lang="less" scoped>
.comment{
  padding: 10px;
  border-bottom: 3px solid @lineColor;
  margin-bottom: 10px;
  .comment-title{
    .fj();
    color: #000;
    padding-bottom: 10px;
    border-bottom: 2px solid @lineColor;
  }
  .comment-item{
    padding: 10px 0;
    .item-header{
      .fj(flex-start,center);
      img{
        border-radius: 50%;
        margin-right: 10px;
      }
      span{
        color: #000;
      }
    }
    .item-cont{
      padding: 10px;

    }
    .item-footer{
      color: @subtitle;
      font-size: @smallText;
      span{
        margin: 0 10px;
      }
    }
  }
}
</style>