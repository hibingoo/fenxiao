<template>
 <div class="page" v-title="'我的收益'">
   <div class="title">收益列表</div>
   <div class="search">
     <input type="text" placeholder="输入 UID">
     <button>搜索</button>
   </div>
  <div class="table">
    <table>
      <tr>
        <th >UID</th>
        <th>充值(元)</th>
        <th>收益(元)</th>
        <th>时间</th>
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
  name: "myProfit",
  components: {}
};
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
.page
  .title
    height 39px
    line-height 39px
    padding 0 15px
    background #EFEEF0
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
    margin 8px
    table
      width 100%
      th, td
        width 24%
        line-height 1.6
        padding 8px 0
</style>
