<template>
 <div class="page" v-title="'玩家列表'">
   <div class="title">玩家列表</div>
   <div class="search">
     <input type="text" placeholder="输入 UID" v-model="user_uid">
     <button @click="getperList">搜索</button>
   </div>
   <div class="table">
     <table >
       <tr>
         <th>UID</th>
         <th class="nickname">昵称</th>
         <th>绑定时间</th>
         <th>是否代理</th>
         <th>总充值(元)</th>
       </tr>
       <tr v-for="item in perList">
         <td>{{item.user_id}}</td>
         <td>{{item.user_name}}</td>
         <td>{{item.binding_time}}</td>
         <td>{{item.is_agent=="1" ? "是":"否"}}</td>
         <td>{{item.moeny}}</td>
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
      perList: [],
      user_uid: ""
    };
  },
  props: {
    perinfo: {
      type: Object
    }
  },
  created() {
    page = 1;
    this.baserequest({
      url: "spread/getLowerInfo",
      data: {
        page: page++,
        user_uid: this.user_uid
      },
      sCallback: function(res) {
        for (let i = 0; i < res.length; i++) {
          res[i].user_uid=res[i].user_id;
          res[i].binding_time= this.getnow(res[i].binding_time);
        }
        this.perList = res;
      }.bind(this)
    });
  },
  components: {},
  methods: {
    getperList() {
      page = 1;
      this.baserequest({
        url: "spread/getLowerInfo",
        data: {
          page: page++,
          user_uid: this.user_uid
        },
        sCallback: function(res) {
          for (let i = 0; i < res.length; i++) {
            res[i].user_uid=res[i].user_id;
            res[i].binding_time= this.getnow(res[i].binding_time);
          }
          this.perList = res;
        }.bind(this)
      });
    },
    add0(num) {
      if (num >= 1 && num <= 9) {
        num = "0" + num;
      }
      return num;
    },
    // 获取当前时间，以YY-MM-DD HH:MM:SS格式
    getnow(res) {
      let time = new Date(Number(res)*1000);
      let now =
        time.getFullYear() +
        "-" +
        this.add0(time.getMonth() + 1) +
        "-" +
        time.getDate();
      return now;
    }
  },
  mounted() {
    this.onbottom(
      function() {
        this.baserequest({
          url: "spread/getLowerInfo",
          data: {
            page: page++,
            user_uid: this.user_uid
          },
          sCallback: function(res) {
            for (let i = 0; i < res.length; i++) {
              res[i].user_uid=res[i].user_id;
              res[i].binding_time= this.getnow(res[i].binding_time);
            }
            this.perList = this.perList.concat(res);
          }.bind(this)
        });
      }.bind(this)
    );
  }
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
    margin 30px 8px 52px 8px
    background #EDEDEA
    table
      width 100%
      th, td
        padding 10px 0
        width 20%
        text-align center
        color #666
        .nickname
          overflow hidden
</style>
