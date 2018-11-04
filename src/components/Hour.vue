<template>
  <div class="hour"
       :class="{ 'busy': busy }"
       :mouseDown="mouseDown"
       @mouseover="handleMouseover"
       @mousedown="toggleBusy"
       >
  </div>
</template>

<script>
export default {
  name: 'Hour',
  props: {
    msg: String,
    index: Number,
    mouseDown: Boolean
  },
  data () {
    return {
      busy: false
    }
  },
  methods: {
    handleMouseover () {
      if (this.mouseDown) {
        this.busy = !this.busy
      }
    },
    toggleBusy () {
        this.busy = !this.busy
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
