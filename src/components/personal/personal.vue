<template>
 <div v-title="'个人中心'" class="page">
     <div class="title">
       <span>我的信息</span>
       <span>修改密码</span>
     </div>
     <div class="info">
       <div class="basmsg">账户信息</div>
       <div class="info-detail">
         <ul>
           <li>UID:123456</li>
           <li>代理UID:1453442</li>
           <li>手机号：15775958312</li>
           <li>账户(元)：0.0</li>
         </ul>
         <ul>
           <li>真实姓名:测试</li>
           <li>绑定微信：未绑定</li>
           <li>状态：正常</li>
           <li>冻结(元)：0.0</li>
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
 </div>
</template>

<script type="text/ecmascript-6">
export default {
  name: "personal",
  data() {
    return {};
  },
  components: {}
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
</style>
