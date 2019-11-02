<template>
  <time
    class="hour"
    :class="{ 'busy': busy }"
    :style="{backgroundColor: color}"
    @mouseover="handleMouseover"
    @mousedown="paintForecast"
    v-bind:datetime="id"
  ></time>
</template>

<script>
export default {
  name: "Hour",
  props: {
    msg: String,
    index: Number,
    mouseDown: Boolean,
    busy: Boolean,
    forecasted: String,
    color: String,
    id: String,
    armedForecast: String
  },
  methods: {
    handleMouseover() {
      if (this.mouseDown) {
        this.paintForecast();
      }
    },
    handleHourTouch() {
      this.paintForecast();
    },
    toggleBusy() {
      this.isBusy = !this.isBusy;
    },
    paintForecast() {
      this.$emit("paintForecast", this);
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.hour {
  width: 0.5rem;
  height: 0.5rem;
  border-radius: 0.5rem;
  background-color: transparent;
  border: 1px solid #444;
  position: relative;
  animation: pulsedown 600ms cubic-bezier(0, 0, 0.2, 1);
  margin-top: 0.125rem;
}

.hour:after {
  content: "";
  position: absolute;
  top: -0.25rem;
  right: -1rem;
  bottom: -0.25rem;
  left: -1rem;
}

.busy {
  background-color: #eee;
  border: none;
  animation: pulseup 300ms cubic-bezier(0.4, 0, 0.2, 1);
}

@keyframes pulseup {
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.5);
  }
  100% {
    transform: scale(1);
  }
}

@keyframes pulsedown {
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(0.75);
  }
  100% {
    transform: scale(1);
  }
}
</style>
