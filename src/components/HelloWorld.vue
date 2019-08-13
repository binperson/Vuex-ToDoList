<template>
  <div class="hello">
    {{statusBarHeight}}
    {{titleBarHeight}}
    <div @click="add">
      a
    </div>
    <div @click="reduce">
      b
    </div>
  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex'

export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  data () {
    return {
      num: 0
    }
  },
  methods: {
    add () {
      this.num++
      this['globalData/updateStatusBarHeight'](this.num)
    },
    reduce () {
      this.num--
      this['globalData/updateStatusBarHeight'](this.num)
    },
    ...mapMutations(['globalData/updateStatusBarHeight', 'globalData/updateTitleBarHeight'])
  },
  computed: {
    ...mapState('globalData', {
      statusBarHeight: state => state.statusBarHeight,
      titleBarHeight: state => state.titleBarHeight
    })
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="stylus">
h3
  margin 40px 0 0

ul
  list-style-type none
  padding 0

li
  display inline-block
  margin 0 10px

a
  color #42b983
</style>
