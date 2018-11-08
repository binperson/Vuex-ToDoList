import Vuex from 'vuex'
import listone from './list-one'
import listtwo from './list-two'

export default () => {
  const store = new Vuex.Store({
    modules: {
      listone: listone,
      listtwo: listtwo
    }
  })
  return store
}
