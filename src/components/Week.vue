<template>
  <div ref="week" class="week">
    <header class="week-header">
      <h1 class="week-header__date">{{this.prettyWeekRange}}</h1>
      <span class="week-header__free-hours">{{this.freeHours}} hours free</span>
    </header>
    <div class="hours">
      <ul class="hours-legend">
        <li class="hours-legend__label">12a</li>
        <li class="hours-legend__label">3a</li>
        <li class="hours-legend__label">6a</li>
        <li class="hours-legend__label">9a</li>
        <li class="hours-legend__label">12p</li>
        <li class="hours-legend__label">3p</li>
        <li class="hours-legend__label">6p</li>
        <li class="hours-legend__label">9p</li>
      </ul>
      <h2 class="day-label">M</h2>
      <Hour v-for="(hour, index) in hoursInDay(0)"
            :key="hour.id"
            :index="index"
            :busy="hour.busy"
            :forecasted="hour.forecasted"
            :id="hour.id"
            v-on:paintForecast="handlePaintForecast($event)"
            :mouseDown="mouseDown"
      />
      <h2 class="day-label">T</h2>
      <Hour v-for="(hour, index) in hoursInDay(1)"
            :key="hour.id"
            :index="index"
            :busy="hour.busy"
            :forecasted="hour.forecasted"
            :id="hour.id"
            v-on:paintForecast="handlePaintForecast($event)"
            :mouseDown="mouseDown"
      />
      <h2 class="day-label">W</h2>
      <Hour v-for="(hour, index) in hoursInDay(2)"
            :key="hour.id"
            :index="index"
            :busy="hour.busy"
            :forecasted="hour.forecasted"
            :id="hour.id"
            v-on:paintForecast="handlePaintForecast($event)"
            :mouseDown="mouseDown"
      />
      <h2 class="day-label">T</h2>
      <Hour v-for="(hour, index) in hoursInDay(3)"
            :key="hour.id"
            :index="index"
            :busy="hour.busy"
            :forecasted="hour.forecasted"
            :id="hour.id"
            v-on:paintForecast="handlePaintForecast($event)"
            :mouseDown="mouseDown"
      />
      <h2 class="day-label">F</h2>
      <Hour v-for="(hour, index) in hoursInDay(4)"
            :key="hour.id"
            :index="index"
            :busy="hour.busy"
            :forecasted="hour.forecasted"
            :id="hour.id"
            v-on:paintForecast="handlePaintForecast($event)"
            :mouseDown="mouseDown"
      />
      <h2 class="day-label">S</h2>
      <Hour v-for="(hour, index) in hoursInDay(5)"
            :key="hour.id"
            :index="index"
            :busy="hour.busy"
            :forecasted="hour.forecasted"
            :id="hour.id"
            v-on:paintForecast="handlePaintForecast($event)"
            :mouseDown="mouseDown"
      />
      <h2 class="day-label">S</h2>
      <Hour v-for="(hour, index) in hoursInDay(6)"
            :key="hour.id"
            :index="index"
            :busy="hour.busy"
            :forecasted="hour.forecasted"
            :id="hour.id"
            v-on:paintForecast="handlePaintForecast($event)"
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
      armedForecast: 'sleep',
      busyHours: 0
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
      var changedTouch = e.changedTouches[0]
      var elem = document.elementFromPoint(changedTouch.clientX, changedTouch.clientY)
      if (elem.__vue__) {
        if (elem.__vue__.$vnode.key != this.lastElem) {
          elem.__vue__.handleHourTouch()
        }
        this.lastElem = elem.__vue__.$vnode.key
      }
    },
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
    handlePaintForecast (hour) {
      var hourToChange = this.hours.filter(item => {
        return item.id === hour.id
      })[0]
      if (hourToChange.forecasted != this.armedForecast) {
        hourToChange.forecasted = this.armedForecast
        hourToChange.busy = true
        this.busyHours++
      } else {
        hourToChange.forecasted = 'unassigned'
        hourToChange.busy = false
        this.busyHours--
      }
    },
    hoursInDay (day) {
      let start = day * 24
      let end = start + 24
      return this.hours.slice(start, end)
    }
  },
  mounted () {
    window.addEventListener('mousedown', this.startDrag, { passive: true })
    window.addEventListener('mouseup', this.stopDrag, { passive: true })
    window.addEventListener('touchmove', this.handleTouchmove, { passive: true })
    window.addEventListener('mousemove', this.handleMouseover, { passive: true })
    this.setHours()
  },
  computed: {
    freeHours () {
      return 168 - this.busyHours
    },
    prettyWeekRange () {
      return this.weekOf.format('MMMM Do') + '—' + this.weekOf.add(6, 'days').format('Do')
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.week {
  background: #000;
  color: #999;
  height: 100%;
  max-height: 700px;
  max-width: 500px;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
}
.week-header {
  margin-bottom: 1.5rem;
  text-align: right;
  line-height: 1.25rem;
  font-size: 1rem;
}
.week-header__date {
  color: #eee;
}
.hours {
  overflow: hidden;
  display: grid;
  grid-auto-flow: column;
  grid-template-rows: repeat(25, 1fr);
  grid-template-columns: repeat(8, 1fr);
  justify-items: center;
  width: 100%;
  height: 100%;
}
.hours-legend,
.day-label {
  font-size: .75rem;
  pointer-events: none;
  -moz-user-select: none;
  -khtml-user-select: none;
  -webkit-user-select: none;
  -ms-user-select: none;
  user-select: none;
}
.hours-legend {
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(8, 1fr);
  grid-row: 2 / 26;
}
.day-label {
  grid-row: 1 / 2;
}
</style>
