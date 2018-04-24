<template>
 <div class="page" v-title="'绑定银行卡'">
     <div class="title">
       <span>绑定银行卡</span>
     </div>
     <div class="box">
        <div class="list">
         <div class="key">银行卡号:</div>
         <div class="value">
             <input type="number" placeholder="请输入银行卡号" v-model="bank_num" @blur="check_bank">
         </div>
        </div>
        <div class="list">
         <div class="key">银行类型:</div>
         <div class="value">
             <select v-model="bank_id" v-if="bank.length>0" >
               <option value="first" selected>请选择银行</option>
               <option v-for="item in bank" v-bind:value="item.bank_id">{{item.bank_name}}</option>
             </select>
        </div>
       </div>
       <span class="warn" v-if="warn">{{warn}}</span>
     </div>
     <div class="sure" @click="modify">
         确定
     </div>
 </div>
</template>

<script type="text/ecmascript-6">
export default {
  data() {
    return {
      bank: [],
      bank_id: "first",
      bank_num: "",
      pass:false,
      warn: ""
    };
  },
  props: {
    perinfo:{
      type:Object
    }
  },
  created() {
    this.baserequest({
      url: "Spread/bankCategory",
      data: {},
      sCallback: res => {
        this.bank = res;
      }
    });
  },
  methods: {
    luhnCheck(bankno) {
      var lastNum = bankno.substr(bankno.length - 1, 1); //取出最后一位（与luhn进行比较）
      var first15Num = bankno.substr(0, bankno.length - 1); //前15或18位
      var newArr = new Array();
      for (var i = first15Num.length - 1; i > -1; i--) {
        //前15或18位倒序存进数组
        newArr.push(first15Num.substr(i, 1));
      }
      var arrJiShu = new Array(); //奇数位*2的积 <9
      var arrJiShu2 = new Array(); //奇数位*2的积 >9

      var arrOuShu = new Array(); //偶数位数组
      for (var j = 0; j < newArr.length; j++) {
        if ((j + 1) % 2 == 1) {
          //奇数位
          if (parseInt(newArr[j]) * 2 < 9)
            arrJiShu.push(parseInt(newArr[j]) * 2);
          else arrJiShu2.push(parseInt(newArr[j]) * 2);
        } else arrOuShu.push(newArr[j]); //偶数位
      }

      var jishu_child1 = new Array(); //奇数位*2 >9 的分割之后的数组个位数
      var jishu_child2 = new Array(); //奇数位*2 >9 的分割之后的数组十位数
      for (var h = 0; h < arrJiShu2.length; h++) {
        jishu_child1.push(parseInt(arrJiShu2[h]) % 10);
        jishu_child2.push(parseInt(arrJiShu2[h]) / 10);
      }

      var sumJiShu = 0; //奇数位*2 < 9 的数组之和
      var sumOuShu = 0; //偶数位数组之和
      var sumJiShuChild1 = 0; //奇数位*2 >9 的分割之后的数组个位数之和
      var sumJiShuChild2 = 0; //奇数位*2 >9 的分割之后的数组十位数之和
      var sumTotal = 0;
      for (var m = 0; m < arrJiShu.length; m++) {
        sumJiShu = sumJiShu + parseInt(arrJiShu[m]);
      }

      for (var n = 0; n < arrOuShu.length; n++) {
        sumOuShu = sumOuShu + parseInt(arrOuShu[n]);
      }

      for (var p = 0; p < jishu_child1.length; p++) {
        sumJiShuChild1 = sumJiShuChild1 + parseInt(jishu_child1[p]);
        sumJiShuChild2 = sumJiShuChild2 + parseInt(jishu_child2[p]);
      }
      //计算总和
      sumTotal =
        parseInt(sumJiShu) +
        parseInt(sumOuShu) +
        parseInt(sumJiShuChild1) +
        parseInt(sumJiShuChild2);

      //计算luhn值
      var k = parseInt(sumTotal) % 10 == 0 ? 10 : parseInt(sumTotal) % 10;
      var luhn = 10 - k;

      if (lastNum == luhn) {
        this.warn="验证通过";
        this.pass=true;
        return true;
      } else {
        this.warn="银行卡不符合规则";
        return false;
      }
    },
    CheckBankNo(bankno) {
      var bankno = bankno.replace(/\s/g, "");
      if (bankno == "") {
        this.warn="请填写银行卡号";
        return false;
      }
      if (bankno.length < 16 || bankno.length > 19) {
        this.warn="银行卡号长度错误";
        return false;
      }
      var num = /^\d*$/; //全数字
      if (!num.exec(bankno)) {
        this.warn="银行卡号必须全为数字";
        return false;
      }
      //开头6位
      var strBin =
        "10,18,30,35,37,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,58,60,62,65,68,69,84,87,88,94,95,98,99";
      if (strBin.indexOf(bankno.substring(0, 2)) == -1) {
        this.warn="银行卡号开头6位不符合规范";
        return false;
      }
      //Luhn校验
      if (!this.luhnCheck(bankno)) {
        return false;
      }
      return true;
    },
    check_bank(){
        this.CheckBankNo(this.bank_num)
    },
    modify(){
        if(this.pass!=true||this.bank_id=="first"){
            return;
            this.warn="信息不完整"
        };
        this.baserequest({
            url:"Spread/changeBank",
            data:{
                bank_id:this.bank_id,
                bank:this.bank_num
            },
            sCallback:(res)=>{
                this.warn="修改成功";
                this.perinfo.bank_card=this.bank_num;
                this.perinfo.bank_type=this.bank_id;
                this.$emit("updatedPer", this.perinfo);
            },
            eCallback:(res)=>{
              if(res.code==301){
                this.warn="修改失败"
              }else if(res.code==402){
                this.warn="卡号不正确"
              }
              
            }
        })
    }
  },
  components: {}
};
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
.page
    &>.title
        padding 15px 20px
        background rgb(239, 238, 240)
        display flex
        font-size 14px
    .box
        position relative
        padding-top 30px 
        .list
            margin 0 0 30px 0
            background #f7f7f7
            padding 10px
            display flex
            .key
                height 24px
                line-height 24px
                font-size 16px
                flex 0 0 80px
            .value
                flex 1
                input
                  width 60%
                  height 100%
                  background #f7f7f7
                  border-radius 5px
                  &:focus
                    border 1px solid #3bb4f2
                select
                  outline none
                  appearance none
                  border none
                  background #f7f7f7
                  height 100%
        .warn
            position absolute
            color #ff0000
            top 5px
            left 10px
    .sure
        background #3bb4f2
        width 60%
        height 40px
        line-height 40px
        text-align center
        margin 40px auto
        border-radius 8px
</style>
