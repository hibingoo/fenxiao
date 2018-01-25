<template>
 <div class="page" v-title="'提现申请'">
    <div class="title">
      <span>余额提现</span>
      <span>
        <router-link to="/modepass">提现记录:</router-link>
      </span>
    </div>
    <div class="box">
      <div class="balance">可用余额：0.0元</div>
      <div class="list">
        <div class="title">
          <span>*</span>
          提现金额:
        </div>
        <div class="input-box">
          <input type="text">
        </div>
      </div>
      <div class="list">
        <div class="title">
          <span>*</span>
          密码:
        </div>
        <div class="input-box">
          <input type="text">
        </div>
      </div>  
      <div class="list">
        <div class="title">
          <span>*</span>
          确认密码:
        </div>
        <div class="input-box">
          <input type="text">
        </div>
      </div>            
    </div>
 </div>
</template>

<script type="text/ecmascript-6">
export default {
  name: "withdraw",
  data() {
    return {};
  },
  components: {}
};
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  .page
    &>.title
      padding 15px 20px
      background rgb(239, 238, 240)
      display flex
      font-size 14px
      span
        flex 1
        &:last-child
          text-align right
  .box
    margin 7% 0 0 5%
    line-height 1.6 
    .balance
      padding-left 30px
      color #ff0000      
    .list 
      margin-top 30px 
      text-align right 
      display flex
      height 30px
      line-height 30px
      .title
        flex 0 0 80px
        span 
          color #ff0000
      .input-box
        flex 0 0 58%
        margin-left 5px 
        input 
          width 100%
          height 100%
          border 1px solid #ddd 
          border-radius 5px 
          &:focus
            border 1px solid #3bb4f2

</style>
