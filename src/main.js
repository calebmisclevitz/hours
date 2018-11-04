import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false
window.x = require('inobounce')

new Vue({
  render: h => h(App),
}).$mount('#app')
