<template>
  <div class='requestk'>
    <!-- <div class="box">
      <router-link tag="div" :to="{path:'/joke'}">笑话大全</router-link>
      <router-link tag="div" :to="{path:'/constellation'}">星座测试</router-link>
      <router-link tag="div" :to="{path:'/movie'}">电影票</router-link>
    </div> -->
    <div class="box">
      <router-link tag="div" :to="{path:'/home/test002/joke'}">笑话大全</router-link>
      <router-link tag="div" :to="{path:'/home/test002/constellation'}">星座测试</router-link>
      <router-link tag="div" :to="{path:'/home/test002/movie'}">电影票</router-link>
    </div>
    <router-view class="boxs"></router-view>

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
    display: flex;
    >div{
      width:100%;
      height:80px;
      text-align: center;
      line-height: 80px;
      border:1px solid #d6c8c8;
    }
  }
  .router-link-active{
    color:rgba(175, 52, 52, 0.8);
  }
</style>