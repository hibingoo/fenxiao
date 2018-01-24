import Vue from "vue";
import Router from "vue-router";
import personal from "../components/personal/personal";
import withdraw from "../components/withdraw/withdraw";
import extension from "../components/extension/extension";
import playerList from "../components/playerList/playerList";
import perInfo from "../components/perInfo/perInfo";
import myProfit from "../components/myProfit/myProfit";
import dailyData from "../components/dailyData/dailyData";
import land from "../components/land/land";
import modepass from "../components/modepass/modepass";
import forgetpass from "../components/forgetpass/forgetpass";

Vue.use(Router);

export default new Router({
  routes: [
    { path: "/personal", name: "personal", component: personal },
    { path: "/withdraw", name: "withdraw", component: withdraw },
    { path: "/extension", name: "extension", component: extension },
    { path: "/playerList", name: "playerList", component: playerList },
    { path: "/perInfo", name: "perInfo", component: perInfo },
    { path: "/myProfit", name: "myProfit", component: myProfit },
    { path: "/dailyData", name: "dailyData", component: dailyData },
    { path: "/land", name: "land", component: land },
    { path: "/modepass", name: "modepass", component: modepass },
    { path: "/forgetpass", name: "forgetpass", component: forgetpass }
  ],
  linkActiveClass: "active"
});
