<template>
  <div class=''>
    <div class="box" v-for="(item,ind) in data" :key="ind">
      <h3>{{item.name}}</h3>
      <div v-for="(items,inds) in item.mottoList" :key="inds">
        {{inds+1}}:{{items}}
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name:'',
    props:[''],
    data () {
      return {
          data:[],
      };
    },

    components: {},

    computed: {},

    beforeMount() {},

    created() {},

    mounted() {
      this.bus.$emit('loading', true);//加载loading
        var url=this.APT4+'/1646-1'
        this.$axios.get(url,{
          params:{
          showapi_timestamp:this.wan_time.times(),//客户端时间。 
          showapi_appid:"97504",//易源应用id
          showapi_sign:"ff9e442404ae485eb5b5e993bfe42566",//数字签名
          page:"",//页码
          name:"地球"//关键词
          }
        }).then(res=>{
          console.log(res.data);
          this.bus.$emit('loading', false);
          this.data=res.data.showapi_res_body.result.contentlist;
          console.log(this.data);
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
    border-bottom:1px solid red;
    >h3{
      text-align:center;
      padding:10px 0;
      font-size:40px;
      color:rgba(0,0,99,0.8);
    }
    >div{
      padding:10px;
      border-bottom:1px solid #dddddd;
    }
  }

</style>