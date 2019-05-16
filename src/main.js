import Vue from 'vue'
import App from './App.vue'
import store from './store'
import axios from 'axios'
import VueRouter from 'vue-router'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faFolder } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faFolder)

Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.use(VueRouter)

Vue.config.productionTip = false

window.axios = axios

const index = () => import('./views/index')
const router = new VueRouter({
  routes: [
    { path: '/', component: index },
    { path: '/dir/:dir',  component: index }
  ],
  mode: 'history'
})

new Vue({
  render: h => h(App),
  store,
  router
}).$mount('#app')
