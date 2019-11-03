<template>
  <div id="app">
    <div ref="week" class="week">
      <header class="week-header">
        <h1>Hi</h1>
        <!-- <h1 class="week-header__date">{{this.prettyWeekRange}}</h1> -->
        <!-- <span class="week-header__free-hours">{{this.freeHours}} hours free</span> -->
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
        <hour v-for="hour in hours" :key="hour.id" :hour="hour" :categories="categories" />
      </div>
    </div>
  </div>
</template>

<script>
import Hour from "./components/Hour.vue";
// import Week from "./components/Week.vue";
// import ForecastBar from "./components/ForecastBar.vue";
import moment from "moment";

export default {
  name: "app",
  components: {
    Hour
    // Week,
    // ForecastBar
  },
  data() {
    return {
      weekOf: moment("2018-11-05T00:00:00"),
      selectedCategory: "Clear",
      categories: [
        {
          name: "Clear",
          color: "#666"
        },
        {
          name: "Sleep",
          color: "#00f"
        },
        {
          name: "Work",
          color: "#0f0"
        },
        {
          name: "Friends",
          color: "#f00"
        }
      ],
      hours: []
    };
  },
  methods: {
    testFunction() {
      console.log("hi");
    },
    initHours() {
      for (let i = 0; i < 168; i++) {
        let newHour = {
          timestamp: moment(this.weekOf).add(i, "hours"),
          id: moment(this.weekOf)
            .add(i, "hours")
            .format(),
          category: "Clear"
        };
        this.hours.push(newHour);
      }
    }
  },
  mounted() {
    this.initHours();
  }
};
</script>

<style>
html,
body,
div,
span,
applet,
object,
iframe,
h1,
h2,
h3,
h4,
h5,
h6,
p,
blockquote,
pre,
a,
abbr,
acronym,
address,
big,
cite,
code,
del,
dfn,
em,
img,
ins,
kbd,
q,
s,
samp,
small,
strike,
strong,
sub,
sup,
tt,
var,
b,
u,
i,
center,
dl,
dt,
dd,
ol,
ul,
li,
fieldset,
form,
label,
legend,
table,
caption,
tbody,
tfoot,
thead,
tr,
th,
td,
article,
aside,
canvas,
details,
embed,
figure,
figcaption,
footer,
header,
hgroup,
menu,
nav,
output,
ruby,
section,
summary,
time,
mark,
audio,
video {
  margin: 0;
  padding: 0;
  border: 0;
  font-size: 100%;
  font: inherit;
  vertical-align: baseline;
}
/* HTML5 display-role reset for older browsers */
article,
aside,
details,
figcaption,
figure,
footer,
header,
hgroup,
menu,
nav,
section {
  display: block;
}
body {
  line-height: 1;
}
ol,
ul {
  list-style: none;
}
blockquote,
q {
  quotes: none;
}
blockquote:before,
blockquote:after,
q:before,
q:after {
  content: "";
  content: none;
}
table {
  border-collapse: collapse;
  border-spacing: 0;
}

* {
  box-sizing: border-box;
}

html,
body {
  width: 100%;
  height: 100%;
  padding: 0;
  margin: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  overflow: hidden;
  /* background: #000; */
}

#app {
  font-family: helvetica;
  width: 100%;
  max-width: 500px;
  height: 100%;
  max-height: 700px;
  display: flex;
  padding: 1rem;
  flex-direction: column;
}
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
  font-size: 0.75rem;
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
