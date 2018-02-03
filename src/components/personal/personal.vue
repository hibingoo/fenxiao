<template>
 <div v-title="'个人中心'" class="page">
     <div class="title">
       <span>我的信息</span>
       <span>
         <router-link to="/modepass">修改密码</router-link>
         </span>
     </div>
     <div class="info">
       <div class="basmsg">账户信息</div>
       <div class="info-detail">
         <ul>
           <li>UID:{{perinfo.user_uid}}</li>
           <li>代理UID:{{perinfo.superior_uid}}</li>
           <li>手机号：{{perinfo.user_phone}}</li>
           <li>账户(元)：{{perinfo.agent_account}}</li>
         </ul>
         <ul>
           <li>真实姓名:{{perinfo.agent_name}}</li>
           <!-- <li>绑定微信：未绑定</li> -->
           <li>状态：{{status[Number(perinfo.agent_status)-1]}}</li>
           <li>冻结(元)：{{perinfo.agent_cash}}</li>
         </ul>
         <div class="clearfix"></div>
       </div>
     </div>
     <div class="function">
       <router-link to="/myProfit">
       <img src="./myProfit.png" alt="">
       我的收益</router-link>
       <router-link to="/dailyData">
       <img src="./dailyData.png" alt="">
       每日数据</router-link>
       <router-link to="/perInfo">
       <img src="./perInfo.png" alt="">
       个人信息</router-link>
       <router-link to="/playerList">
       <img src="./playerList.png" alt="">
       玩家列表</router-link>
     </div>
     <div class="login" @click="dropout">退 出 登 录</div>
 </div>
</template>

<script type="text/ecmascript-6">
import router from "../../router";
export default {
  name: "personal",
  data() {
    return {
      status: ["申请中", "正常", "冻结"]
    };
  },
  components: {},
  props: {
    perinfo: {
      type: Object
    }
  },
  methods: {
    dropout() {
      localStorage.removeItem("login");
      router.push("/land");
    }
  }
};
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
.page
  background rgb(245, 246, 246)
  width 100%
  height 100%
  display block
  position absolute
  top 0px
  .title
    padding 15px 20px
    background rgb(239, 238, 240)
    display flex
    font-size 14px
    span
      flex 1
      &:last-child
        text-align right
  .info
    margin 10px 10px
    background rgb(237, 237, 234)
    height 170px
    border-radius 5px
    border-bottom 1px solid #ccc
    padding 15px 0 20px 20px
    .basmsg
      padding-right 6px
      margin 10px 0
      color #333
      font-weight 700
      font-size 14px
    .info-detail
      margin 10px 0
      ul
        width 50%
        float left
        li
          width 100%
          padding 5px 0
          text-align left
          font-size 14px
          line-height 1.6
  .function
    margin 10px
    display flex
    flex-wrap wrap
    a
      flex 0 0 25%
      position relative
      text-align center
      margin-right 12.5%
      padding 2.6rem 0 1rem 0
      background rgb(237, 237, 234)
      margin-bottom 1rem
      color #333
      &:nth-child(3n)
        margin-right 0
      img
        width 25px
        height 25px
        position absolute
        left 50%
        top 6px
        margin-left -15px
  .login
    width 80%
    height 40px
    line-height 40px
    color #fff
    background #F05050
    margin 20px auto
    border-radius 18px
    font-weight 600
    text-align center
</style>
