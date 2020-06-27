import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

let vm = new Vue({
  render: h => h(App),
})

vm.$mount('#app')

console.log(vm.$data);
