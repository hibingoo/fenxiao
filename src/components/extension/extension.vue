<template>
  <div class="page" v-title="'我的推广'">
    <div class="title">我的推广</div>
    <div class="person">
      <div>今日绑定数:{{extension.curDayAgentBindNumber}}</div>
      <div>本月绑定数:{{extension.curMonthAgentBindNumber}}</div>
      <div>总绑定数:{{extension.toatlAgentBindNumber}}</div>
    </div>
    <div class="ul">
      <ul class="agent">
        <li>&nbsp;</li>
        <li>一级代理</li>
        <li>二级代理</li>
        <li>三级代理</li>
      </ul>
      <ul class="profit">
        <li>今日/总收益</li>
        <li>{{extension.curDayAgent1Money}}元/{{extension.totalAgent1Money}}元</li>
        <li>{{extension.curDayAgent2Money}}元/{{extension.totalAgent2Money}}元</li>
        <li>{{extension.curDayAgent3Money}}元/{{extension.totalAgent3Money}}元</li>
      </ul>
      <ul class="user">
        <li>今日/总用户数</li>
        <li>{{extension.curDayAgent1BindNumber}}人/{{extension.toatlAgent1BindNumber}}人</li>
        <li>{{extension.curDayAgent2BindNumber}}人/{{extension.toatlAgent2BindNumber}}人</li>
        <li>{{extension.curDayAgent3BindNumber}}人/{{extension.toatlAgent3BindNumber}}人</li>
      </ul>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
export default {
  name: "extension",
  data() {
    return {
      extension: {}
    };
  },
  props: {
    perinfo: {
      type: Object
    }
  },
  components: {},
  created() {
    this.baserequest({
      url: "Spread/getInfo",
      data: {
        user_uid: this.perinfo.user_uid
      },
      sCallback: function(res) {
        this.extension = res;
      }.bind(this)
    });
  }
};
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
.page
  .title
    padding 0 15px
    height 39px
    line-height 39px
    background #EFEEF0
  .person
    padding 15px 0 20px 20px
    background #EDEDEA
    margin 8px
    div
      padding 5px 0
      line-height 1.6
  .ul
    display flex
    padding 15px 0 20px 20px
    background #EDEDEA
    margin 8px
    ul
      box-sizing content-box
      padding-right 5%
      &:nth-child(3n)
        padding-right 0
      li
        margin 10px 0
        line-height 1.6
    .agent
      flex 0 0 25%
    .profit
      flex 0 0 30%
    .user
      flex 0 0 35%
</style>
