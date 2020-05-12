<template>
  <div>
      <h2>------------Show.vue----------</h2>
    <h3>my name is {{name}}</h3>
  </div>
</template>

<script>
  export default {
    computed: {
      name() {
        return this.$store.state.username
      }
    },
  }
</script>
