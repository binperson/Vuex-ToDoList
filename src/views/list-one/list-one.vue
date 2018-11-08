<template>
<div class="list-one">{{name}}</div>
</template>
<script type='text/ecmascript-6'>
import { mapState } from 'vuex'
export default {
  computed: {
    ...mapState('listone', {
      name: state => state.name
    })
  }
}
</script>
<style scoped lang='stylus' rel='stylesheet/stylus'>
</style>
