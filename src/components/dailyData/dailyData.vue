<template>
 <div class="page" v-title="'每日数据'">
   <div class="title">每日数据</div>
   <div class="box">
     <div class="time">时间:<datePickers @getDate="getDate" :newdate="today"></datePickers>
       <button class="today" @click="getToday">今天</button>
       <button class="before">前一天</button>
     </div>
     <div class="list">组局数：
     </div>
     <div class="list">消耗：0 钻
     </div>
   </div>
   <div class="table">
     <table>
       <tr>
         <th>代理级别</th>
         <th>一级</th>
         <th>二级</th>
         <th>三级</th>
       </tr>
       <tr>
         <td>绑定人数(人)</td>
         <td></td>
         <td></td>
         <td></td>
       </tr>
       <tr>
         <td>收益(元)</td>
       </tr>
     </table>
   </div>
    

 </div>
</template>

<script type="text/ecmascript-6">
import datePickers from "../datepicker/datepicker";
export default {
  data() {
    return {
      date: "",
      today: ""
    };
  },
  components: {
    datePickers: datePickers
  },
  methods: {
    getDate(e) {
      this.date = e;
    },
    getToday() {
      let time = new Date();
      let now =
        time.getFullYear() +
        "-" +
        this.add0(time.getMonth() + 1) +
        "-" +
        time.getDate();
      this.today = now;
      console.log(now);
    },
    add0(num) {
      if (num >= 1 && num <= 9) {
        num = "0" + num;
      }
      return num;
    }
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
  .box
    margin 8px
    padding 15px 0 20px 20px
    background #EDEDEA
    .time
      position relative
      height 42px
      button
        position absolute
        top 50%
        margin-top -15px
        height 30px
        background #5a98de
        border #5a98de
        border-radius 5px
        color #fff
        &.today
          right 25%
        &.before
          right 5%
    .list
      line-height 1.6
      padding 8px 0
  .table
    margin 8px
    table
      width 100%
      th, td
        width 22%
        line-height 1.6
        padding 10px 0
        text-align center
        &:first-child
          width 27%
</style>
