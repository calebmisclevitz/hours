<template>
  <label
    class="hour"
    :style="{backgroundColor: category.color}"
    @mousedown="handleMousedown"
    @mouseover="handleMouseover"
  >
    <time class="hour__time" :datetime="hour.id">{{hour.timestamp.format("dddd, hA")}}</time>
    <select class="hour__dropdown" v-model="hour.category">
      <option
        v-for="category in categories"
        :key="hour.id + category.name"
        :value="category.name"
      >{{ category.name }}</option>
    </select>
  </label>
</template>

<script>
import Moment from "moment";

export default {
  name: "Hour",
  props: {
    hour: Object,
    categories: Array,
    mouseDown: Boolean
  },
  computed: {
    category() {
      return this.categories.find(object => {
        return object.name === this.hour.category;
      });
    }
  },
  methods: {
    handleMousedown() {
      this.setCategory();
    },
    handleMouseover() {
      if (this.mouseDown) {
        this.setCategory();
      }
    },
    handleHourTouch() {
      this.setCategory();
    },
    setCategory() {
      this.$emit("setCategory", this);
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
.hour__time,
.hour__dropdown {
  display: none;
}
.hour {
  width: 1rem;
  height: 1rem;
  border-radius: 50%;
  /* background-color: transparent; */
  /* border: 1px solid #444; */
  /* position: relative; */
  animation: pulsedown 600ms cubic-bezier(0, 0, 0.2, 1);
}

/* .hour:after {
  content: "";
  position: absolute;
  top: -0.25rem;
  right: -1rem;
  bottom: -0.25rem;
  left: -1rem;
} */

.busy {
  /* background-color: #eee; */
  /* border: none; */
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
