<template>
  <div id="app">
    <Week msg="Hello from week"/>
    <ForecastBar/>
  </div>
</template>

<script>
import Week from './components/Week.vue'
import ForecastBar from './components/ForecastBar.vue'

export default {
  name: 'app',
  components: {
    Week,
    ForecastBar
  },
  data () {
    return {
      categories: [
        {
          name: 'unassigned',
          hours: [],
          color: 'transparent'
        },
        {
          name: 'sleep',
          hours: [],
          color: '#00f'
        },
        {
          name: 'work',
          hours: [],
          color: '#0f0'
        },
        {
          name: 'friends',
          hours: [],
          color: '#f00'
        }
      ]
    }
  }
}
</script>

<style>
html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed, 
figure, figcaption, footer, header, hgroup, 
menu, nav, output, ruby, section, summary,
time, mark, audio, video {
	margin: 0;
	padding: 0;
	border: 0;
	font-size: 100%;
	font: inherit;
	vertical-align: baseline;
}
/* HTML5 display-role reset for older browsers */
article, aside, details, figcaption, figure, 
footer, header, hgroup, menu, nav, section {
	display: block;
}
body {
	line-height: 1;
}
ol, ul {
	list-style: none;
}
blockquote, q {
	quotes: none;
}
blockquote:before, blockquote:after,
q:before, q:after {
	content: '';
	content: none;
}
table {
	border-collapse: collapse;
	border-spacing: 0;
}

* {
  box-sizing: border-box;
}

html, body {
  width: 100%;
  height: 100%;
  padding: 0;
  margin: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  overflow: hidden;
  background: #000;
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
