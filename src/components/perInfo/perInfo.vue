<template>
 <div class="page" v-title="'个人信息'">
    <div class="title">
      <span>我的信息</span>
    </div>
    <div class="info">
      <div class="basmsg">账户信息</div>
      <div class="info-detail">
        <ul>
          <li>UID:{{perinfo.user_uid}}</li>
          <li>真实姓名:{{perinfo.agent_name}}</li>
          <li>手机号：{{perinfo.user_phone}}</li>
        </ul>
        <ul>
          <li>用户名:{{perinfo.user_nickname}}</li>
        </ul>
        <div class="clearfix"></div>
        <div class="dis">注册时间:{{perinfo.register_time}}</div>
        <div class="dis">登录时间:{{perinfo.login_time}}</div>
        <div class="dis">地址:{{perinfo.address}}</div>
        <div class="entrance">
          <router-link to="/banding_bank">绑定或修改银行卡号</router-link>
          </div>
      </div>
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
        text-align left
  .info
    margin 10px 10px
    background rgb(237, 237, 234)
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
    .dis
      clear both
      padding 5px 0
      line-height 1.6
      font-size 14px
    .entrance
      padding 5px 0
      line-height 1.6
      text-align center
      text-decoration underline
      color #707070
      a
        color #707070
</style>
