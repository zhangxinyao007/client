<template lang="pug">
  div.index
    NavFigure
    NavHeader

</template>

<script>
import NavHeader from './../components/NavHeader'
import NavFigure from './../components/NavFigure'
export default {
  data () {
    return {
      name: 'zhangxinyao',
      password: '123456'
    }
  },
  components: {
    NavHeader,
    NavFigure
  }
}
</script>

<style lang="stylus" scoped>

</style>
