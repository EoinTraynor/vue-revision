import Vue from 'vue'
import App from './App.vue'

export const bus = new Vue();

// custom directives
Vue.directive('rainbow', {
  bind(el, binding, vnode) {
    el.style.color = `#${Math.random().toString().slice(2,8)}`
  }
});

Vue.directive('transformCase', {
  bind(el, binding, vnode) {
    if (binding.value === 'uppercase') {
      el.style.textTransform = 'uppercase';
    }
    if (binding.value === 'capitalize') {
      el.style.textTransform = 'capitalize';
    }
    if (binding.arg === 'largeText') {
      el.style.fontSize = '2em';
    }
  }
});

new Vue({
  el: '#app',
  render: h => h(App)
})
