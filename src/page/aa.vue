<template>
  <div class='requestk'>
    <div class="box" v-for="(item,ind) in data" :key="ind">
      <img :src="item.img" alt="">
    </div>
  </div>
</template>

<script>
  export default {
    name:'',
    props:[''],
    data () {
      return {
        data:[]
      };
    },

    components: {},

    computed: {},

    beforeMount() {},

    mounted() {
      var timestamp=new Date().getTime();//当前时间戳
      var times=getMyDate(timestamp);
      console.log(getMyDate(timestamp));//2019-05-25 09:02:36:305
        function getMyDate(str){
            var oDate = new Date(str),
                oYear = oDate.getFullYear(),//年
                oMonth = oDate.getMonth()+1,//月
                oDay = oDate.getDate(),//日
                oHour = oDate.getHours(),//时
                oMin = oDate.getMinutes(),//分
                oSen = oDate.getSeconds(),//秒
                oFf=oDate.getMilliseconds()//毫秒
                var oTime = oYear + getzf(oMonth) + getzf(oDay) + getzf(oHour) + getzf(oMin) +getzf(oSen);//最后拼接时间
            return oTime;
        };
        //补0操作
        function getzf(num){
            if(parseInt(num) < 10){
                num = '0'+num;
            }
            return num;
        }
      var url=this.APT4+'/341-2'
      this.$axios.get(url,{
        params:{
          showapi_timestamp:times,//客户端时间。 
          showapi_appid:"97504",//易源应用id
          showapi_sign:"ff9e442404ae485eb5b5e993bfe42566",//数字签名
          page:"1",
          maxResult:"20"
        }
      }).then(res=>{
        console.log(res.data.showapi_res_body.contentlist);
        this.data=res.data.showapi_res_body.contentlist;
      }).catch(err=>{
        console.log(err);
      })

    },

    methods: {},

    watch: {}

  }

</script>
<style lang='scss' scoped>
  .box{
    width:100%;
    >img{
      width:100%;
    }
  }
</style>