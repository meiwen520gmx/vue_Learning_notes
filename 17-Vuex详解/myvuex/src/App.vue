<template>
  <div id="app">
    <display></display>
    <increment></increment>
  </div>
</template>

<script>
import Display from './components/Display'
import Increment from './components/Increment'
export default {
  name: 'App',
  components: {
    Display,
    Increment
  },
}
</script>

<style>
</style>
