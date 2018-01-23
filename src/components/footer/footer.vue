<template>
 <div class="page">
     <div class="footer">
         <div>
            <router-link to="/extension">
            <img src="./extension.png" alt="">
            推广</router-link>
         </div>
         <div>
            <router-link to="/withdraw">
            <img src="./withdraw.png" alt="">
            提现</router-link>
         </div>
         <div>
            <router-link to="/personal">
            <img src="./personal.png" alt="">
            我的</router-link>
         </div>
     </div>

 </div>
</template>

<script type="text/ecmascript-6">
import router from "../../router";
router.push("/personal");
export default {
  data() {
    return {};
  },
  name: "myfooter",
  components: {}
};
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
.footer
    background rgb(234, 234, 227)
    width 100%
    padding 5px 0 10px 0
    position fixed
    bottom 0
    display flex
    div
        flex 1
        text-align center
        a
            display block
        img
            width 15px
            height 17px
            display block
            margin 3px auto
</style>
