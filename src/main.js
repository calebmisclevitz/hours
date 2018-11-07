import Vue from 'vue'
import App from './App.vue'
import iNoBounce from 'inobounce'

iNoBounce.enable()
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')