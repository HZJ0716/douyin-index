// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import VueLazyload  from 'vue-lazyload'

Vue.config.productionTip = false
Vue.use(VueLazyload,{
	preLoad: 1.3,
  error: 'static/image/CD.svg',
  loading: 'static/image/CD.svg',
  attempt: 1
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
