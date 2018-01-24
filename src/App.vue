<template>
  <div id="app">
    <router-view @getperinfo="getperinfo" :perinfo="perinfo"/>
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
    getperinfo(data) {
      this.perinfo = data;
      console.log(data);
    },
    // 验证登录
    verlogin() {
      if (localStorage.login) {
        this.login = localStorage.login;
      } else {
        this.login = null;
      }
    }
  },
  watch: {
    $route: function() {
      this.verlogin();
    },
    login: function(val) {
      if (val === null) {
        router.push("/land");
      }
    },
    router(e) {
      console.log(e);
    }
  }
};
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
</style>
