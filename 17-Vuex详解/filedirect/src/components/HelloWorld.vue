<template>
  <div class="hello">
      <!-- <button @click="saveName">保存名字</button> -->
      <h2>展示名字：{{username}}</h2>
      <button @click="saveName('zhangsan')">保存名字</button>
  </div>
</template>

<script>
import {  mapActions, mapState, mapMutations } from 'vuex'
export default {
  name: 'HelloWorld',
  data () {
    return {
      
    }
  },
  computed: {
    ...mapState(['username'])//使用哪个就引入哪个
  },
  methods: {
    ...mapActions(['saveName']),//使用哪个就引入哪个
    // saveName() {
    //     this.$store.dispatch('saveName', 'zhangsan')
    // }
  },
}
</script>

