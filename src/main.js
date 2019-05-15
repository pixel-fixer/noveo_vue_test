import Vue from 'vue'
import App from './App.vue'
import store from './store'
import axios from 'axios'
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

Vue.config.productionTip = false

window.axios = axios;

new Vue({
  render: h => h(App),
  store
}).$mount('#app')
