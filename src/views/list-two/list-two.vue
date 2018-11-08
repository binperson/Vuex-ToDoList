<template>
<div class="list-two">{{name}}</div>
</template>
<script type='text/ecmascript-6'>
import { mapState } from 'vuex'
export default {
  computed: {
    ...mapState('listtwo', {
      name: state => state.name
    })
  }
}
</script>
<style scoped lang='stylus' rel='stylesheet/stylus'>
</style>
