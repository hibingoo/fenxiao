<template>
 <div class="page" v-title="'提现记录'">
     <div class="title">提现记录</div>
     <div class="table">
         <table>
             <tr>
                 <th class="applytime">申请时间</th>
                 <th class="withdraw">提现金额</th>
                 <th class="status">状态</th>
             </tr>
             <tr>
                 <td>1</td>
                 <td>2</td>
                 <td>3</td>
             </tr>
         </table>
     </div>
 </div>
</template>

<script type="text/ecmascript-6">
export default {
  data() {
    return {
      record: {}
    };
  },
  components: {},
  created() {
    this.baserequest({
      url: "Spread/withdrawCashList",
      data: {},
      sCallback: function(res) {
        for(let i=0;i<res.length;i++){
            
        }
      }
    });
  }
};
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
.page
    background rgb(245, 245, 246)
    position absolute
    top 0px
    height 100%
    width 100%
    .title
        background #EFEEF0
        padding 0 15px
        line-height 39px
        height 39px
    .table
        width 95%
        margin 30px auto
        table
            width 100%
            border-collapse collapse
            background #f5fafe
            td, th
                border 1px solid #ddd
                line-height 1.6
                padding 8px 0
                text-align center
            .applytime
                width 40%
                font-weight 600
            .withdraw
                width 40%
                font-weight 600
            .status
                width 20%
                font-weight 600
</style>
