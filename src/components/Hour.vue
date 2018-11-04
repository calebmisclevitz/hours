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
  width: 1rem;
  height: 1rem;
  border-radius: .5rem;
  background-color: #eee;
  position: relative;
}

.hour:after {
  content: '';
  position: absolute;
  top: -.5rem;
  right: -.5rem;
  bottom: -.5rem;
  left: -.5rem;
}

.busy {
  background-color: black;
}
</style>
