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
  },
  data () {
    return {
      categories: [
        {
          name: 'unassigned',
          hours: [],
          color: 'transparent'
        },
        {
          name: 'sleep',
          hours: [],
          color: '#00f'
        },
        {
          name: 'work',
          hours: [],
          color: '#0f0'
        },
        {
          name: 'friends',
          hours: [],
          color: '#f00'
        }
      ]
    }
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
  overflow: hidden;
  -webkit-overflow-scrolling: touch;
}

#app {
  font-family: helvetica;
}
</style>
