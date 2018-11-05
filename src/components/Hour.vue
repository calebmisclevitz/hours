<template>
  <div class="hour"
       :class="{ 'busy': isBusy }"
       :mouseDown="mouseDown"
       @mouseover="handleMouseover"
       @mousedown="toggleBusy"
       >
  </div>
</template>

<script>
export default {
  name: 'Hour',
  data () {
    return {
      isBusy: this.busy,
      newForecasted: this.forecasted
    }
  },
  props: {
    msg: String,
    index: Number,
    mouseDown: Boolean,
    busy: Boolean,
    forecasted: String,
    id: String,
    armedForecast: String
  },
  methods: {
    handleMouseover () {
      if (this.mouseDown) {
        this.toggleBusy()
      }
    },
    handleHourTouch () {
      this.toggleBusy()
    },
    toggleBusy () {
      this.isBusy = !this.isBusy
    },
    paintForecast (currentForecast) {
      this.$emit('paintForecast', currentForecast)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.hour {
  width: .5rem;
  height: .5rem;
  border-radius: .5rem;
  background-color: transparent;
  border: 1px solid #444;
  position: relative;
  animation: pulsedown 600ms cubic-bezier(0.0, 0.0, 0.2, 1);
}

.hour:after {
  content: '';
  position: absolute;
  top: -1rem;
  right: -1rem;
  bottom: -1rem;
  left: -1rem;
}

.busy {
  background-color: #eee;
  border: none;
  animation: pulseup 300ms cubic-bezier(0.4, 0.0, 0.2, 1);;
}

@keyframes pulseup {
  0%   {transform: scale(1)}
  50% {transform: scale(1.5)}
  100% {transform: scale(1)}
}

@keyframes pulsedown {
  0%   {transform: scale(1)}
  50% {transform: scale(.75)}
  100% {transform: scale(1)}
}
</style>
