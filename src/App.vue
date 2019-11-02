<template>
  <div id="app">
    <hour v-for="hour in hours" :key="hour.id" :hour="hour" :categories="categories" />
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
          hours: [],
          color: "#666"
        },
        {
          name: "Sleep",
          hours: [],
          color: "#00f"
        },
        {
          name: "Work",
          hours: [],
          color: "#0f0"
        },
        {
          name: "Friends",
          hours: [],
          color: "#f00"
        }
      ],
      hours: []
    };
  },
  methods: {
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
</style>
