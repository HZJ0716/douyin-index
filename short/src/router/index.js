import Vue from 'vue'
import Router from 'vue-router'
import Index from '../page/index'
import axios from 'axios'

Vue.use(Router)
Vue.prototype.$http = axios

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: Index
    }
  ]
})
