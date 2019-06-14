<template>
  <div class='requestk'>
    <div class="wrapper" ref="wrapper">
      <ul class="main">
        <!-- <li v-for="(item, index) in 50" :key="index">{{index+1}}</li> -->
        <li v-for="(item, index) in data" :key="index">{{index+1}}{{item.content}}</li>
        <div class="loading" v-show="!loading">加载中....</div>
      </ul>
    </div>
  </div>
</template>

<script>
import BScroll from 'better-scroll'
  export default {
    name:'',
    props:[''],
    data () {
      return {
        data:[],
        page:1,//页数
        pagesize:10,//每次获取数量
        loading:true,
      };
    },

    components: {},

    computed: {},

    beforeMount() {},

    created(){},

    mounted() {
      this.kdata()

      this.$nextTick(() => {
        if (!this.scroll) {
          this.scroll = new BScroll('.wrapper', {
            pullDownRefresh:{
              threshold: 80,
              stop:0
            }
          })
          this.scroll.on('touchEnd', (pos) => {
            // 下拉刷新
            if (pos.y > 50) {
              console.log(3333333333333333);
              // this.kdata()
            }
            //上拉加载
            if(pos.y <= (this.scroll.maxScrollY + 100) && this.loading) {
              this.loading = false
              this.page++;
              this.kdata();
              setTimeout(()=>{
                this.loading = true
              },1000)
            }
          })
        }else{
          this.scroll.refresh()
        }
      })


      console.log(this.data);
    },

    methods: {
      kdata(){
        var times = Date.parse( new Date() ).toString();
            times = times.substr(0,10);
      // var times = (new Date()).valueOf(); //1280977330748
      //     times = new Date().getTime();   // 同上
      //     times = Math.round(new Date().getTime()/1000).toString();
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
          // if(res.data.resultcode==112) alert(res.data.reason);
          this.data=this.data.concat(res.data.result.data)
          this.$set(this.data)
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
  .wrapper{
    width: 100%;
    height: 100%;
    overflow: hidden;
  }
  .main{
      >li{
        border-top:1px solid red;
      }
  }
</style>