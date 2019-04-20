import Vue from 'vue'
import Vuex from 'vuex'
import globalData from './globalData'
Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    globalData
  }
})
