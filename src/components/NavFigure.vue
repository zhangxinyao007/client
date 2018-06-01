<template lang="pug">
  figure#NavFigure
    p
      span 欢迎光临{{user}}的个人博客网站！
</template>

<script>
export default {
  data () {
    return {
      user: '张欣尧'
    }
  }
}
</script>

<style lang="stylus" scoped>
  figure
    width 100%
    background rgba(51,51,51,0.7)
    clear both
    height 28px
    position fixed
    z-index 9999
    margin 0
    p
      width 1030px
      margin 0 auto
      color #fff
      line-height 28px
</style>
