<template>
  <div class="header">
   <div class="back iconfont">&#xe623;</div>
   <div class="search">
     <div class="search-content">
      <span class="iconfont">&#xe603;</span>
       请输入城市/景点/游玩主题
     </div>
   </div>
   <div class="city">北京</div>
  </div>
</template>

<script>
export default {
  name: 'index-header'
}
</script>

<style lang="stylus" scoped>
    @import '../../assets/stylus/variables.styl'
  .header
    display: flex
    height: .88rem
    background: $bgColor
    .back
      width: .8rem
      line-height: .88rem
      text-align: center
      font-size: .44rem
      font-weight: blod
      color: #fff
    .city
      overflow: hidden
      position: realative
      float: right
      max-width: 1.6rem
      line-height: .88rem
      padding: 0 .46rem 0 .22rem
      font-size: .28rem
      white-space: nowrap
      text-overflow: ellipsis
      color: #fff
      &::before
        position: absolute
        right: 0.1rem
        top: 0.4rem
        content: '\0020'
        width: 0
        height: 0
        border-left: .12rem solid transparent;
        border-right: .12rem solid transparent;
        border-top: .12rem solid #fff;
    .search
      flex: 1
      .search-content
        width: 100%
        height: .6rem
        line-height: .6rem
        margin : .14rem
        background: #fff
        border-radius: .1rem
        text-indent: .2rem
        color: #ccc
</style>
