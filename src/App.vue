<template>
  <div id="app">
    <router-view/>
    <v-footer v-if="token!==null"></v-footer>
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
      token: ""
    };
  },
  created() {
    if (localStorage.token) {
      this.token = localStorage.token;
    } else {
      this.token = null;
    }
  },
  components: {
    "v-footer": myfooter
  },
  watch: {
    token: function(val) {
      console.log(val);
      if (val === null) {
        router.push("/land");
      }
    }
  }
};
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
</style>
