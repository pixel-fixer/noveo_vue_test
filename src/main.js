import Vue from 'vue'
import App from './App.vue'
import store from './store'
import axios from 'axios'
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

import { library } from '@fortawesome/fontawesome-svg-core'
import { faFolder } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faFolder)

Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.config.productionTip = false

window.axios = axios;

new Vue({
  render: h => h(App),
  store
}).$mount('#app')
