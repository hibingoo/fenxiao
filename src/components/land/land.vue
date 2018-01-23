<template>
 <div class="page" v-title="'登录'">
   <div class="title">Username</div>
   <div class="box" :class="blue1">
     <input type="text" v-model="account" data-status="1" @focus="myfocus" @blur="myblur" placeholder="账户(你注册的游戏ID)">
   </div>
   <div class="title">Password</div>
   <div class="box" :class="blue2">
     <input type="password" v-model="password" data-status="2" @focus="myfocus" @blur="myblur" placeholder="密码">
   </div>
   <div class="control">
     <input  type="checkbox" v-model="remember">记住我 &nbsp;&nbsp;忘记密码
   </div>
   <div class="control">
     <input  type="checkbox" v-model="agree">&nbsp;同意 《合作协议》
   </div>
   <div class="button" @click="login">登&nbsp;&nbsp;&nbsp;录</div>
   <div class="showtitle" v-if="showtitle!==''" v-html="showtitle"></div>
 </div>
</template>

<script type="text/ecmascript-6">
export default {
  data() {
    return {
      blue1: "",
      blue2: "",
      account: "",
      password: "",
      remember: false,
      agree: true,
      showtitle: ""
    };
  },
  components: {},
  created() {
    if (localStorage.account) {
      this.account = localStorage.account;
      this.remember = true;
    }
  },
  methods: {
    myfocus(e) {
      if (e.target.dataset.status === "1") {
        this.blue1 = "blue";
      } else if (e.target.dataset.status === "2") {
        this.blue2 = "blue";
      }
    },
    myblur(e) {
      if (e.target.dataset.status === "1") {
        this.blue1 = "";
      } else if (e.target.dataset.status === "2") {
        this.blue2 = "";
      }
    },
    login() {
      if (this.agree === false) {
        return;
      }
      if (this.account === "" || this.password === "") {
        this.showtitle = "账号或密码不能为空";
      }
      if (this.remember === true) {
        localStorage.account = this.account;
      } else {
        localStorage.removeItem("account");
      }

      this.baserequest({
        url: "Login/login",
        data: {
          user_uid: this.account,
          agent_password: this.password
        },
        sCallback: function(res) {
          console.log(res);
        }
      });
    }
  }
};
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
.page
  position relative
  margin-top 40px
  padding 100px 37px 0 37px
  .title
    font-family 'Helvetica Neue', Helvetica, Arial, sans-serif
    font-size 14px
    font-weight 600
    color #333
    margin-bottom 15px
  .box
    border solid 1px #ddd
    border-radius 10px
    margin-bottom 30px
    padding 10px 8px 10px 37px
    input
      width 100%
      height 100%
      border 0
      outline none
  .blue
    border-color rgb(59, 180, 242)
  .control
    margin-left 80px
    margin-bottom 20px
    font-size 14px
  .button
    width 200px
    text-align center
    background #46A0DF
    margin 0 auto
    color #fff
    height 41px
    line-height 41px
    border-radius 10px
  .showtitle
    color #ff0000
    position absolute
    top 40px
</style>
