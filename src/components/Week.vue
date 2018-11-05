<template>
  <div>
    <div class="week">
      <Hour v-for="(hour, index) in hours"
            :key="index"
            :index="index"
            :busy="hour.busy"
            :forecasted="hour.forecasted"
            :id="hour.id"
            :armedForecast="armedForecast"
            v-on:paintForecast="handlePaintForecast()"
            :mouseDown="mouseDown"
      />
    </div>
  </div>
</template>

<script>
import Hour from './Hour.vue'
import moment from 'moment'

export default {
  name: 'Week',
  components: {
    Hour
  },
  data () {
    return {
      mouseDown: false,
      lastElem: null,
      weekOf: moment('2018-11-05T00:00:00'),
      hours: [],
      armedForecast: 'sleep'
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
    },
    // handleMouseover (e) {
    //   var elem = document.elementFromPoint(e.clientX, e.clientY)
    //   if (elem.__vue__) {
    //     if (elem.__vue__.$vnode.key != this.lastElem) {
    //       console.log(elem)
    //       elem.__vue__.handleHourTouch()
    //     }
    //     this.lastElem = elem.__vue__.$vnode.key
    //   }
    // },
    setHours () {
      for (let i = 0; i < 168; i++) {
        let newHour = {
          timestamp: moment(this.weekOf).add(i, 'hours'),
          id: moment(this.weekOf).add(i, 'hours').format(),
          forecasted: 'unassigned',
          busy: false
        }
        this.hours.push(newHour)
      }
    },
    handlePaintForecast (armedForecast) {
      console.log(armedForecast)
    }
  },
  mounted () {
    window.addEventListener('mousedown', this.startDrag)
    window.addEventListener('mouseup', this.stopDrag)
    window.addEventListener('touchmove', this.handleTouchmove) 
    window.addEventListener('mousemove', this.handleMouseover)
    this.setHours()
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
