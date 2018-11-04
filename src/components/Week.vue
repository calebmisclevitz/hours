<template>
  <div class="week">
    <Hour v-for="(hour, index) in 168"
          :key="index"
          :index="index"
          :mouseDown="mouseDown"
    />
  </div>
</template>

<script>
import Hour from './Hour.vue'

export default {
  name: 'Week',
  components: {
    Hour
  },
  data () {
    return {
      mouseDown: false
    }
  },
  methods: {
    startDrag () {
      this.mouseDown = true
    },
    stopDrag () {
      this.mouseDown = false
    }
  },
  mounted () {
    window.addEventListener('mousedown', this.startDrag)
    window.addEventListener('mouseup', this.stopDrag)
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.week {
  padding: 1rem;
  display: grid;
  grid-auto-flow: column;
  grid-template-rows: repeat(24, 1fr);
  grid-template-columns: repeat(7, 1fr);
  width: 100vw;
  height: 100vh;
  justify-items: center;
  align-items: center;
}
</style>
