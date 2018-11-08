import defaultState from './state/state'
import mutations from './mutations/mutations'
import getters from './getters/getters'
import actions from './actions/actions'

export default {
  namespaced: true,
  state: defaultState,
  mutations,
  getters,
  actions
}
