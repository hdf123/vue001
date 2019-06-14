<template>
  <div class=''>
    <div class="box" v-for="(item,ind) in data" :key="ind">
      {{ind+1}}:{{item.question}}
      <p>答案：{{item.answer}}</p>
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
        var url=this.APT4+'/1623-2'
        this.$axios.get(url,{
          params:{
          showapi_timestamp:this.wan_time.times(),//客户端时间。 
          showapi_appid:"97504",//易源应用id
          showapi_sign:"ff9e442404ae485eb5b5e993bfe42566",//数字签名
          page:"",
          question:"天气",
          isAnswer:true
          }
        }).then(res=>{
          console.log(res.data);
          this.data=res.data.showapi_res_body.contentlist;
          console.log(this.data);
          this.page++;
          this.data=this.data.concat(res.data.result.data)
          this.$set(this.data)
          this.loading = true
        }).catch(err=>{
          console.log(err);
        })
    },

    methods: {},

    watch: {}

  }

</script>
<style lang='' scoped>
  .box{
    padding:10px;
    border-bottom:1px solid red;
  }
</style>