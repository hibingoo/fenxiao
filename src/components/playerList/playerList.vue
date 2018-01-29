<template>
 <div class="page" v-title="'玩家列表'">
   <div class="title">玩家列表</div>
   <div class="search">
     <input type="text" placeholder="输入 UID">
     <button>搜索</button>
   </div>
   <div class="table">
     <table >
       <tr>
         <th>UID</th>
         <th>昵称</th>
         <th>绑定时间</th>
         <th>是否代理</th>
         <th>总充值(元)</th>
       </tr>
     </table>
   </div>

 </div>
</template>

<script type="text/ecmascript-6">
export default {
  data() {
    return {};
  },
  props: {
    perinfo: {
      type: Object
    }
  },
  components: {}
};
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
.page
  position absolute
  top 0px
  width 100%
  height 100%
  background #F5F6F6
  .title
    background #EFEEF0
    padding 0 15px
    line-height 39px
    height 39px
    color #666
  .search
    padding 8px
    margin 8px
    background #EDEDEA
    input
      width 70%
      height 26px
      border 1px solid #ddd
      border-radius 5px
      padding 2px
      &:focus
        border 1px solid #46A0DF
    button
      height 30px
      width 25%
      background #46A0DF
      border #46A0DF
      color #fff
      border-radius 5px
  .table
    margin 30px 8px 0 8px
    background #EDEDEA
    table
      width 100%
      th, td
        padding 10px 0
        width 20%
        text-align center
        color #666
</style>
