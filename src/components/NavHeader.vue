<template lang="pug">
  el-row.NavHeader
    el-col(:span="24")
      div.content
        div.left-content.left
          div.logo-border
            img(src="./../assets/logo.png" width="50px" height="50px")
        h2.left.name.margin-left-1 {{name}}
        div.right-content
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
  height = 70px
  logo-width = 50px
  .NavHeader
    width 100%
    height height
    background-color #409EFF
    .el-col
      height height
    .content
      width 1200px
      height height
      margin 0 auto
      .left-content
        width logo-width
        height logo-width
        margin ( (height - logo-width) / 2 )
        .logo-border
          width logo-width
          height logo-width
          border 1px solid #fff
          border-radius logo-width
          img
            width logo-width - 2
            height logo-width -2
            border-radius logo-width - 2
            margin 1px
      .name
        color #fff
        height height
        line-height height

</style>
