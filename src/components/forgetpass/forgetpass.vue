<template>
 <div class="page" v-title="'忘记密码'">
    <div class="box">
     <input type="number" v-model="account" placeholder="账号">
    </div>
    <div class="box">
     <input type="password" v-model="newpassword" placeholder="新密码">
    </div>
    <div class="box">
     <input type="password" v-model="surepassword" placeholder="确认密码">
    </div>
    <div class="verbox">
      <div class="input">
        <input type="num" v-model="code">
      </div>
      <div v-if="getver" class="button blue" @click="getcode">{{vertext}}</div>
      <div v-else class="button">{{vertext}}</div>
    </div>
    <div class="sure" @click="upsure">确定</div>
    <div class="showtitle" v-if="showtitle!==''" v-html="showtitle"></div>
 </div>
</template>

<script type="text/ecmascript-6">
import router from "../../router";
export default {
  data() {
    return {
      account: "",
      newpassword: "",
      surepassword: "",
      showtitle: "",
      vertext: "获取验证码",
      getver: true,
      showtitle:"",
      code:"",
    };
  },
  methods: {
    getcode(){
      if(this.account==""){
        this.showtitle="帐号为空，请输入账号"
        return
      }
      this.baserequest({
        url:"Login/sendMessage",
        data:{
          user_uid:this.account
        },
        sCallback:function(res){
          this.showtitle="短信发送成功，请填写验证码"
          this.countdown();
        }.bind(this),
        eCallback:function(res){
          if(res.code=="300"){
            this.showtitle="短信发送失败，请检查账号或联系客服"
          }
        }.bind(this)
      })
    },
    countdown() {
      let num = 60;
      this.vertext = num + "S后重新获取";
      this.getver = false;
      let timer = setInterval(
        function() {
          num--;
          this.vertext = num + "S后重新获取";
          if (num === 0) {
            clearInterval(timer);
            this.vertext = "重新获取";
            this.getver = true;
          }
        }.bind(this),
        1000
      );
    },
    upsure(){
      if(this.account==""||this.newpassword==""||this.surepassword==""){
        this.showtitle="账号或密码不能为空"
        return;
      }
      if(this.newpassword!=this.surepassword){
        this.showtitle="密码输入不一致"
        return;
      }
      if(this.code==""){
        this.showtitle="验证码不能为空"
        return;
      }
      this.baserequest({
        url:"Login/changePasswordByPassword2",
        data:{
          user_uid:this.account,
          message:this.code,
          agent_password_new:this.newpassword
        },
        sCallback:function(res){
          this.showtitle="修改成功";
          router.push("/land");
        }.bind(this),
        eCallback:function(res){
          if(res.code==301){
            this.showtitle="修改失败请稍后再试"
          }else if(res.code==302){
            this.showtitle="验证码不正确"
          }
        }.bind(this)
      })
    },
  },
  components: {}
};
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
.page
  padding 120px 37px 0 37px
  position relative
  .box
    margin-bottom 30px
    width 300px
    border-radius 10px
    input
      border solid 1px #ddd
      width 255px
      padding 10px 8px 10px 37px
      border-radius 10px
      &:focus
        border 1px solid #3bb4f2
  .sure
    width 200px
    height 41px
    line-height 41px
    margin 20px auto
    text-align center
    border-radius 10px
    background #46a0df
    color #fff
  .showtitle
    position absolute
    top 60px
    color #ff0000
  .verbox
    margin-bottom 30px
    width 300px
    display flex
    .input
      flex 0 0 60%
      border 1px solid #ddd
      padding 10px 2px 10px 37px
      box-sizing border-box
      border-top-left-radius 10px
      border-bottom-left-radius 10px
      input
        width 100%
        height 100%
    .button
      flex 0 0 40%
      background #eee
      text-align center
      line-height 38px
      border-top-right-radius 10px
      border-bottom-right-radius 10px
      &.blue
        background #46a0df
        color #fff
  .showtitle
    color #ff0000
    position absolute
    top 70px      
</style>
