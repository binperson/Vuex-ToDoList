import Vue from 'vue'
import App from './App'
import Vuex from 'vuex'
import Router from 'vue-router'
import createRouter from './router'
import createStore from './store/store'

Vue.config.productionTip = false

Vue.use(Router)
Vue.use(Vuex)
const router = createRouter()
const store = createStore()
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
