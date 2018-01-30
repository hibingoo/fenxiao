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
             <tr v-if="record" v-for="item in record">
                 <td>{{item.time}}</td>
                 <td>{{item.agent_money}}</td>
                 <td>{{status[Number(item.status)]}}</td>
             </tr>
         </table>
     </div>
 </div>
</template>

<script type="text/ecmascript-6">
var page;
export default {
  data() {
    return {
      record: [],
      status: ["提现失败", "提现申请中", "提现成功"]
    };
  },
  methods: {
    // 传入时间戳，格式化时间
    gettime(time) {
      let mytime = new Date(time);
      let date =
        mytime.getFullYear() +
        "-" +
        this.add0(mytime.getMonth() + 1) +
        "-" +
        this.add0(mytime.getDay());
      return date;
    },
    add0(num) {
      if (num >= 1 && num <= 9) {
        num = "0" + num;
      }
      return num;
    }
  },
  mounted() {
    this.onbottom(
      function() {
        this.baserequest({
          url: "Spread/withdrawCashList",
          data: {
            page: page++
          },
          sCallback: function(res) {
            for (let i = 0; i < res.length; i++) {
              res[i].time = this.gettime(Number(res[i].time) * 1000);
            }
            this.record = this.record.concat(res);
          }.bind(this)
        });
      }.bind(this)
    );
  },
  components: {},
  created() {
    page = 1;
    this.baserequest({
      url: "Spread/withdrawCashList",
      data: {
        page: page++
      },
      sCallback: function(res) {
        for (let i = 0; i < res.length; i++) {
          res[i].time = this.gettime(Number(res[i].time) * 1000);
        }
        this.record = this.record.concat(res);
      }.bind(this)
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
        padding-bottom 52px
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
                width 30%
                font-weight 600
            .withdraw
                width 30%
                font-weight 600
            .status
                width 40%
                font-weight 600
</style>
