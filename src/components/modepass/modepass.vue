<template>
 <div class="page" v-title="'修改密码'">
    <div class="box">
     <input type="password" v-model="oldpassword" data-status="1" placeholder="旧密码">
    </div>
    <div class="box">
     <input type="password" v-model="newpassword" data-status="2" placeholder="新密码">
    </div>
    <div class="box">
     <input type="password" v-model="surepassword" data-status="3"  placeholder="确认密码">
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
      oldpassword: "",
      newpassword: "",
      surepassword: "",
      showtitle: ""
    };
  },
  props: {
    perinfo: {
      type: Object
    }
  },
  components: {},
  methods: {
    upsure() {
      if (
        this.newpassword !== this.surepassword ||
        this.oldpassword === "" ||
        this.newpassword === "" ||
        this.surepassword === ""
      ) {
        return;
      }
      this.baserequest({
        url: "Login/cahngePasswordByPassword",
        data: {
          user_uid: this.perinfo.user_uid,
          agent_password: this.oldpassword,
          agent_password_new: this.newpassword
        },
        sCallback: function(res) {
          router.push("/personal");
        },
        eCallback: function(res) {
          if (res.code === "302") {
            this.showtitle = "账号密码不匹配";
          }
        }.bind(this)
      });
    }
  }
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
</style>
