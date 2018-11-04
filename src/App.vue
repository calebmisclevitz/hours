<template>
  <div id="app">
    <Week msg="Hello from week"/>
  </div>
</template>

<script>
import Week from './components/Week.vue'

export default {
  name: 'app',
  components: {
    Week
  }
}
</script>

<style>
* {
  box-sizing: border-box;
}

html, body {
  width: 100%;
  height: 100%;
  padding: 0;
  margin: 0;
}

#app {
  font-family: helvetica;
}
</style>
