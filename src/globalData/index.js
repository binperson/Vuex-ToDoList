export default {
  namespaced: true,
  state: {
    statusBarHeight: 0,
    titleBarHeight: 0
  },
  mutations: {
    updateStatusBarHeight: (state, data) => {
      state.statusBarHeight = data
    },
    updateTitleBarHeight: (state, data) => {
      state.titleBarHeight = data
    }
  },
  getters: {

  },
  actions: {

  }
}
