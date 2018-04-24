<template>
  <div id="app">
    <router-view @getperinfo="getperinfo" :perinfo="perinfo" @getfrozen="getfrozen" @updatedPer="updatedPer"/>
    <v-footer v-if="login==='1'"></v-footer>
  </div>
</template>

<script type="text/ecmascript-6">
import router from "./router";
import myfooter from "./components/footer/footer";
import { watch } from "fs";
export default {
  name: "App",
  data() {
    return {
      login: "",
      perinfo: {}
    };
  },
  created() {
    this.verlogin();
  },
  components: {
    "v-footer": myfooter
  },
  methods: {
    updatedPer (data) {
      this.perinfo=data;
    },
    getperinfo(data) {
      this.perinfo = data;
    },
    getfrozen(data) {
      this.perinfo.agent_cash = (Number(this.perinfo.agent_cash) + Number(data)).toFixed(2);
    },
    // 验证登录
    verlogin() {
      if (!this.perinfo.user_uid) {
        localStorage.removeItem("login");
      }
      if (localStorage.login) {
        this.login = localStorage.login;
      } else {
        this.login = null;
      }
    }
  },
  watch: {
    $route: function(e) {
      this.verlogin();
    },
    login: function(val) {
      if (val === null) {
        router.push("/land");
      }
    },
    router(e) {
    }
  }
};
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
</style>
