<template>
 <div class="page">

 </div>
</template>

<script type = "text/ecmascript-6">
const severSrc = "http://ces.fengtunote.com";
var token = "safa";
if (sessionStorage.token) {
  token = sessionStorage.token;
}
export default {
  severSrc, // 服务器地址
  token // 身份标识
};
</script>

<style>

</style>
