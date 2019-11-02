<template>
  <ul id="forecast-bar" class="forecast-bar">
    <li
      v-for="category in categories"
      :key="category.id"
      class="forecast-bar__category"
      :style="{ borderColor: category.color, color: category.color }"
      @click="armForecast(category)"
    >{{category.name}}</li>
  </ul>
</template>

<script>
export default {
  name: "ForecastBar",
  props: {
    categories: Array
  },
  methods: {
    armForecast(category) {
      this.$emit("armForecast", category);
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.forecast-bar {
  width: calc(100% + 2rem);
  height: 4rem;
  color: #666;
  font-size: 0.875rem;
  padding: 1rem;
  margin: 0 -1rem -1rem -1rem;
  overflow-x: auto;
  overflow-y: hidden;
  white-space: nowrap;
  -webkit-overflow-scrolling: touch;
}
.forecast-bar__category {
  display: inline-block;
  margin-right: 0.5rem;
  line-height: 1rem;
  height: 2rem;
  padding: 0.4rem 0.75rem 0.6rem 0.75rem;
  border: 0.5px solid #666;
  border-radius: 0.25rem;
  cursor: pointer;
}
</style>
