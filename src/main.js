import Vue from 'vue'
import VueRouter from 'vue-router'
import routes from './router/router'

import App from './App.vue'
import store from './store/index'
import ajax from './config/ajax'
import './style/common.css'
import './config/rem'

Vue.config.productionTip = false
Vue.use(VueRouter)
const router = new VueRouter({
  routes
})

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
