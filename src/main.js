// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from "vue";
import App from "./App";
import router from "./router";
import vueResource from "vue-resource";
import base from "./common/js/base.js";
import global_ from "./common/js/global";
import buttomCon from "./common/js/buttomCon.js";

import "./common/stylus/index.styl";

Vue.prototype.GLOBAL = global_;
Vue.config.productionTip = false;
Vue.use(vueResource);
Vue.use(base);
Vue.use(buttomCon);
Vue.http.options.emulateJSON = true;
Vue.http.options.header = {
  "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8"
};
/* eslint-disable no-new */

Vue.directive("title", {
  inserted: function (el, binding) {
    document.title = binding.value;
  }
});
/* eslint-disable no-new */
new Vue({
  el: "#app",
  router,
  components: { App },
  template: "<App/>"
});
