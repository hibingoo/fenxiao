<template>
 <div class="page" v-title="'忘记密码'">
    <div class="box" :class="blue2">
     <input type="password" v-model="account" data-status="1" @focus="myfocus" @blur="myblur" placeholder="旧密码">
    </div>
    <div class="box" :class="blue2">
     <input type="password" v-model="phonenum" data-status="2" @focus="myfocus" @blur="myblur" placeholder="新密码">
    </div>
    <div class="box" :class="blue2">
     <input type="password" v-model="surepassword" data-status="3" @focus="myfocus" @blur="myblur" placeholder="确认密码">
    </div>
 </div>
</template>

<script type="text/ecmascript-6">
export default {
  data() {
    return {
      account: "",
      phonenum: "",
      newpassword: "",
      surepassword: ""
    };
  },
  methods: {
    myfocus() {},
    myblur() {}
  },
  components: {}
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
