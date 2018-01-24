<template>
 <div class="page" v-title="'修改密码'">
    <div class="box" :class="blue2">
     <input type="password" v-model="oldpassword" data-status="1" @focus="myfocus" @blur="myblur" placeholder="旧密码">
    </div>
    <div class="box" :class="blue2">
     <input type="password" v-model="newpassword" data-status="2" @focus="myfocus" @blur="myblur" placeholder="新密码">
    </div>
    <div class="box" :class="blue2">
     <input type="password" v-model="surepassword" data-status="3" @focus="myfocus" @blur="myblur" placeholder="确认密码">
    </div>
    <div class="sure" @click="upsure">确定</div>
 </div>
</template>

<script type="text/ecmascript-6">
export default {
  data() {
    return {
      blue2: "",
      oldpassword: "",
      newpassword: "",
      surepassword: ""
    };
  },
  props: {
    perinfo: {
      type: Object
    }
  },
  components: {},
  methods: {
    myfocus(e) {},
    myblur(e) {},
    upsure() {
        if(this.newpassword!==this.surepassword){
            return;
        }
        this.baserequest({
            url:"cahngePasswordByPassword",
            data:{
                user_uid:this.perinfo.user_uid,
                agent_password:this.oldpassword,
                agent_password_new:this.newpassword
            },
            sCallback:function(res){
                console.log(res)
            }
        })
    }
  }
};
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
.page
    padding 120px 37px 0 37px
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
</style>
