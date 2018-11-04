<template>
  <div>
    <div class="week">
      <Hour v-for="(hour, index) in 168"
            :key="index"
            :index="index"
            :mouseDown="mouseDown"
      />
    </div>
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
      mouseDown: false,
      lastTouch: null,
      lastElem: null
    }
  },
  methods: {
    startDrag () {
      this.mouseDown = true
    },
    stopDrag () {
      this.mouseDown = false
    },
    handleTouchmove (e) {
      e.preventDefault()
      e.stopPropagation()
      var changedTouch = e.changedTouches[0]
      var elem = document.elementFromPoint(changedTouch.clientX, changedTouch.clientY)
      if (elem.__vue__) {
        if (elem.__vue__.$vnode.key != this.lastElem) {
          elem.__vue__.toggleBusy()
        }
        this.lastElem = elem.__vue__.$vnode.key
      }
    }
  },
  mounted () {
    window.addEventListener('mousedown', this.startDrag)
    window.addEventListener('mouseup', this.stopDrag)
    window.addEventListener('touchmove', this.handleTouchmove) 
    window.addEventListener('mousemove', this.handleMouseover)
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.week {
  overflow: auto;
  -webkit-overflow-scrolling: touch;
  padding: 1rem;
  display: grid;
  grid-auto-flow: column;
  grid-template-rows: repeat(24, 1fr);
  grid-template-columns: repeat(7, 1fr);
  height: 100vh;
  justify-items: center;
  align-items: center;
  background: #111;
}
</style>
