<template>
  <ul id="forecast-bar" class="forecast-bar">
    <li class="forecast-bar__category">Sleep</li>
    <li class="forecast-bar__category">Work</li>
    <li class="forecast-bar__category">Friends</li>
    <li class="forecast-bar__category">Exercise</li>
    <li class="forecast-bar__category">Read</li>
    <li class="forecast-bar__category">Family</li>
  </ul>
</template>

<script>
export default {
  name: 'ForecastBar'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.forecast-bar {
    width: calc(100% + 2rem);
    height: 4rem;
    color: #666;
    font-size: .875rem;
    padding: 1rem;
    margin: 0 -1rem -1rem -1rem;
    overflow-x: auto;
    overflow-y: hidden;
    white-space: nowrap;
    -webkit-overflow-scrolling: touch;
}
.forecast-bar__category {
    display: inline-block;
    margin-right: .5rem;
    line-height: 1rem;
    height: 2rem;
    padding: .4rem .75rem .6rem .75rem;
    border: .5px solid #666;
    border-radius: .25rem;
}
</style>
