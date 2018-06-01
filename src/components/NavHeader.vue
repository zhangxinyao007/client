<template lang="pug">
  header.NavHeader
    img.left(src="./../assets/logo.png" alt="个人博客" width="60px" height="60px")
    h1
      a(href="/") 张欣尧个人博客网站
    p 关注互联网和搜索引擎的个人博客网站
</template>

<script>
export default {
  data () {
    return {
      name: '张欣尧'
    }
  }
}
</script>

<style lang="stylus" scoped>
  header
    padding 50px 0 0 0
    width 1100px
    height 77px
    margin auto
    img
      margin 0 20px 0 30px
      -webkit-animation 'flipInX' 1s ease 1s backwards
      -moz-animation 'flipInX' 1s ease 1s backwards
      -ms-animation 'flipInX' 1s ease 1s backwards
      -o-animation 'flipInX' 1s ease 1s backwards
      animation 'flipInX' 1s ease 1s backwards
    h1
      font-size 16px
      font-weight normal
      text-shadow #fff 1px 1px 1px
      a
        color #000
    p
      margin 17px 0 0 0
      text-shadow #000 1px 1px 1px
      color #fff
</style>
