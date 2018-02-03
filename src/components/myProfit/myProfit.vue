<template>
 <div class="page" v-title="'我的收益'">
   <div class="title">收益列表</div>
   <div class="search">
     <input type="number" placeholder="输入 UID" v-model="UID">
     <button @click="query">搜索</button>
   </div>
  <div class="table">
    <table>
      <tr>
        <th >UID</th>
        <th>充值(元)</th>
        <th>收益(元)</th>
        <th>时间</th>
      </tr>
      <tr v-for="item in incomeInfo">
        <td>{{item.uid}}</td>
        <td>{{item.user_money}}</td>
        <td>{{item.profit}}</td>
        <td>{{item.time}}</td>
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
      UID: "",
      incomeInfo: []
    };
  },
  props: {
    perinfo: {
      type: Object
    }
  },
  created() {
    page = 1;
    this.incomeInfo = this.getIncome();
  },
  name: "myProfit",
  components: {},
  methods: {
    query() {
      page = 1;
      let array = this.getIncome();
      this.incomeInfo = array;
    },
    getIncome() {
      let inco = [];
      this.baserequest({
        url: "Spread/income",
        data: {
          page: page++,
          user_uid: this.UID
        },
        sCallback: function(res) {
          for (let i = 0; i < res.length; i++) {
            let profit = {};
            profit.uid = res[i].order_user;
            if (this.perinfo.user_uid === res[i].level1) {
              profit.profit = res[i].money_level1;
            }
            if (this.perinfo.user_uid === res[i].level2) {
              profit.profit = res[i].money_level2;
            }
            if (this.perinfo.user_uid === res[i].level3) {
              profit.profit = res[i].money_level3;
            }
            profit.time = this.getTime(res[i].time);
            profit.user_money = res[i].user_money;
            inco.push(profit);
          }
        }.bind(this)
      });
      return inco;
    },
    getTime(data) {
      data = Number(data) * 1000;
      let time = new Date(data);
      let now =
        time.getFullYear() +
        "-" +
        this.add0(time.getMonth() + 1) +
        "-" +
        time.getDate();
      let timestamp = Date.parse(new Date());
      return now;
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
        let array = this.getIncome();
        this.incomeInfo = this.incomeInfo.concat(array);
      }.bind(this)
    );
  }
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
        text-align center
</style>
