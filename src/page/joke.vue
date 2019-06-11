<template>
  <div class='requestk'>
    <div class="box" v-for="(item,ind) in data" :key="ind">
      <template v-if="ind<9">0{{ind+1}}:{{item.content}}</template>
      <template v-else>{{ind+1}}:{{item.content}}</template>
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
      // var times = Date.parse( new Date() ).toString();
      //     times = times.substr(0,10);
      var times = (new Date()).valueOf(); //1280977330748
          times = new Date().getTime();   // 同上
          times = Math.round(new Date().getTime()/1000).toString();
      var url=this.APT1+'/joke/content/list.php'
      this.$axios.get(url,{
        params:{
          key:"e280d4235744d275aa6ca4fda0ae182e",
          page:2,//当前页数,默认1
          pagesize:5,	//每次返回条数,默认1,最大20
          sort:'desc',//类型，desc:指定时间之前发布的，asc:指定时间之后发布的
          time:times//	时间戳（10位）
        }
      }).then(res=>{
        console.log(res.data);
        if(res.data.resultcode==112) alert(res.data.reason);
        this.data=res.data.result.data;

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
    padding:25px 20px;
    border-bottom:1px solid #dddddd;
  }
</style>