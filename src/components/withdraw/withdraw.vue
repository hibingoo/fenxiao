<template>
 <div class="page" v-title="'提现申请'">
    <div class="title">
      <span>余额提现</span>
      <span>
        <router-link to="/presentRec">提现记录</router-link>
      </span>
    </div>
    <div class="box">
      <div class="balance">可用余额：{{balance}}元</div>
      <div class="list">
        <div class="title">
          <span>*</span>
          提现金额:
        </div>
        <div class="input-box">
          <input type="number" v-model="amount">
        </div>
      </div>
      <div class="list">
        <div class="title">
          <span>*</span>
          密码:
        </div>
        <div class="input-box">
          <input type="password" v-model="password">
        </div>
      </div>
      <div class="list">
        <div class="title">
          <span>*</span>
          确认密码:
        </div>
        <div class="input-box">
          <input type="password" v-model="surepassword">
        </div>
      </div>
    </div>
    <div class="withdraw" @click="withdraw">确 定 提 现
      <div class="remind" v-html="remind" v-if="remind!==''"></div>
    </div>
 </div>
</template>

<script type="text/ecmascript-6">
export default {
  name: "withdraw",
  data() {
    return {
      balance: Number,
      remind: "",
      amount: null,
      password: "",
      surepassword: "",
      frozen: ""
    };
  },
  props: {
    perinfo: {
      type: Object
    }
  },
  created() {
    this.balance =
      Number(this.perinfo.agent_account) - Number(this.perinfo.agent_cash);
  },
  components: {},
  watch: {
    amount: function(val) {
      if (val > this.balance) {
        this.remind = "提现金额不能大于可用余额";
        this.amount = this.balance;
      }
    },
    surepassword: function(val) {
      if (val !== this.password) {
        this.remind = "密码不一致";
      } else {
        this.remind = "";
      }
    }
  },
  methods: {
    withdraw() {
      if (
        this.password === "" ||
        this.surepassword === "" ||
        this.password !== this.surepassword
      ) {
        this.remind = "密码不能为空";
        return;
      }
      if (!this.amount) {
        this.remind = "提现金额不能为空";
        return;
      }
      this.baserequest({
        url: "Spread/withdrawCash",
        data: {
          money: this.amount,
          password: this.password
        },
        sCallback: function(res) {
          this.balance = this.balance - this.amount;
          this.frozen = this.amount;
          this.$emit("getfrozen", this.frozen);
          this.amount = null;
          this.password = "";
          this.surepassword = "";
        }.bind(this)
      });
    }
  }
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
  .withdraw
    position relative
    text-align center
    width 60%
    height 41px
    line-height 41px
    background #46a0df
    margin 60px auto
    color #fff
    border-radius 5px
    .remind
      color #ff0000
      position absolute
      top -41px
</style>
