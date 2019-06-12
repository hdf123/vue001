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
        data:[],
        page:1,//页数
        pagesize:10,//每次获取数量
        off_on:false
      };
    },

    components: {},

    computed: {},

    beforeMount() {},

    created(){
      window.addEventListener('scroll', this.onScroll,true);
    },

    mounted() {
      this.kdata();
      /*
      var times = Date.parse( new Date() ).toString();
          times = times.substr(0,10);
      // var times = (new Date()).valueOf(); //1280977330748
      //     times = new Date().getTime();   // 同上
      //     times = Math.round(new Date().getTime()/1000).toString();
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
      */
    },

    methods: {
      onScroll() {
        console.log("1---"+$(".requestk")[0].scrollTop);
        console.log("2---"+$(".requestk").height());
        console.log("3---"+$(".requestk")[0].scrollHeight);
        if (($(".requestk")[0].scrollTop + $(".requestk").height() + 60) >= $(".requestk")[0].scrollHeight) {
            //这里用 [ off_on ] 来控制是否加载 （这样就解决了 当上页的条件满足时，一下子加载多次的问题啦）
            if (this.off_on) {
                this.off_on = false;
                this.page++;
                console.log("第"+page+"页");
                this.kdata();  //调用执行上面的加载方法
            }
        }
      },
      kdata(){
        var times = Date.parse( new Date() ).toString();
            times = times.substr(0,10);
        var url=this.APT1+'/joke/content/list.php'
        this.$axios.get(url,{
          params:{
            key:"e280d4235744d275aa6ca4fda0ae182e",
            page:this.page,//当前页数,默认1
            pagesize:this.pagesize,	//每次返回条数,默认1,最大20
            sort:'desc',//类型，desc:指定时间之前发布的，asc:指定时间之后发布的
            time:times//	时间戳（10位）
          }
        }).then(res=>{
          console.log(res.data);
          if(res.data.resultcode==112) alert(res.data.reason);
          this.data=res.data.result.data;
          this.off_on = true; 
        }).catch(err=>{
          console.log(err);
        })
      }
    },

    watch: {}

  }

</script>
<style lang='scss' scoped>
  .requestk{
    width:100%;
    height:93%;
    overflow: auto;
  }
  .box{
    padding:25px 20px;
    border-bottom:1px solid #dddddd;
  }
</style>