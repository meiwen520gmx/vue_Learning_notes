<template>
  <div>
    <h2>------------Login.vue----------</h2>
    <button @click="login">登录</button>
    <!-- 这里方便查看 -->
    <h2>{{ $store.state.username }}</h2>
    <h2>count的平方==={{ $store.getters.powerCount }}</h2>
    <h2>学生年龄大于20==={{ $store.getters.more20stu }}</h2>
    <h2>学生年龄大于20的个数==={{ $store.getters.more20stuLen }}</h2>
    <h2>学生年龄大于age的个数==={{ $store.getters.moreAgestu(18) }}</h2>

    <h2>count的平方==={{ power }}</h2>
    <h2>学生年龄大于20==={{ more20 }}</h2>
    <h2>学生年龄大于20的个数==={{ num }}</h2>
  </div>
</template>

<script>
export default {
  methods: {
    login() {
      this.$store.commit("saveName", "huahua");
    }
  },
  computed: {
    power() {
      return this.$store.getters.powerCount;
    },
    more20(){
      return this.$store.getters.more20stu;
    },
    num(){
      return this.$store.getters.more20stuLen
    }
  }
};
</script>
