import Vue from 'vue';
import App from './App.vue';
import AOS from 'aos'
import 'aos/dist/aos.css'

new Vue({
  render: (h) => h(App),
  mounted() {
    AOS.init({
      duration: 1000,
    })
  },
}).$mount('#app');