// 定义base请求访问类，预先封装好url和code参数等等；
import Vue from "vue";
import global_ from "./global";
import router from "../../router";

exports.install = function (vue, options) {
    Vue.prototype.baserequest = (params) => {
        let myurl = global_.severSrc + "/api.php/" + params.url;
        params.data.token = sessionStorage.token;
        Vue.http.post(myurl, params.data).then(response => {
            // success callback
            response = response.body;
            if (response.code === "200") {
                params.sCallback && params.sCallback(response.data);
            } else if (response.code === "401") {
                localStorage.removeItem("login");
                router.push("/land");
            } else {
                params.eCallback && params.eCallback(response);
            }
        }, response => {
            // error callback
        });
    };
};
