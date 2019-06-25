<template>
    <div class="rules">
        <div class="bscroll" ref="bscroll">
            <p class="drop-down" v-if="dropDown">松手刷新数据...</p>
            <div class="bscroll-container">
                <ul>
                   <li v-for="(item,ind) in data" :key="ind">{{ind+1}}--{{item.content}}</li>
                    <p class="prompt" v-if="more">松开加载更多...</p>
                </ul>
            </div>
        </div>
    </div>
</template>
 
<script>
import BScroll from 'better-scroll'
export default {
    data(){
        return{
          data:[],
          page:1,//页数
          pagesize:10,//每次获取数量
          dropDown:false,
          more:false
        }
    },
    mounted(){
      this.bus.$emit('loading', true);//加载loading
      this.kdata()
      this.scrollFn()
    },
    methods:{
      kdata(){
        var times = Date.parse( new Date() ).toString();
            times = times.substr(0,10);
            console.log(times);
        // var times = (new Date()).valueOf(); //1280977330748
        //     times = new Date().getTime();   // 同上
        //     times = Math.round(new Date().getTime()/1000).toString();
        this.$axios.get('/api1/joke/content/list.php',{
          params:{
            key:"e280d4235744d275aa6ca4fda0ae182e",
            page:this.page,//当前页数,默认1
            pagesize:this.pagesize,	//每次返回条数,默认1,最大20
            sort:'desc',//类型，desc:指定时间之前发布的，asc:指定时间之后发布的
            time:times//时间戳（10位）
          }
        }).then(res=>{
          if(res.data.resultcode==112) alert(res.data.reason);
          var _this=this;
          setTimeout(function(){
             _this.bus.$emit('loading', false);//加载loading
          },1000);
          this.data=this.data.concat(res.data.result.data)
          console.log(this.data);
          this.$set(this.data)
          this.page++;
          this.more=false;
          this.scroll.finishPullUp();//上拉加载完成后
          
        }).catch(err=>{
          console.log(err);
        })
      },
        scrollFn(){
            this.$nextTick(() => {
                this.scroll = new BScroll(this.$refs.bscroll, {
                    scrollY: true,
                    pullDownRefresh: {//下拉配置
                        threshold: 50,
                        stop:20
                    },
                    pullUpLoad: {//上拉配置
                        threshold: -35
                    },
                });
                this.scroll.on('scroll', (pos) => {
                    if(pos.y>50){//如果下拉超过50px 就显示下拉刷新的文字
                        this.dropDown = true
                    }else{
                        var _this=this;
                        setTimeout(function(){
                            _this.dropDown = false;
                        },3000);
                    }
                    // console.log(this.scroll.maxScrollY)
                    // if(this.scroll.maxScrollY>pos.y+10){
                    //     console.log("加载更多")
                    // }
                })
                this.scroll.on('pullingDown', () => {//下拉
                    this.bus.$emit('loading', true);//加载loading
                    this.kdata()
                    this.dropDown=true;
                    console.log(456);
                }),
                this.scroll.on('pullingUp', () => {// 上拉
                    this.bus.$emit('loading', true);//加载loading
                    this.kdata()
                    this.more=true;
                })
                this.scroll.refresh();//重新计算 better-scroll
            });
        }
    }
}
</script>
 
 
<style lang="scss" scoped>
    .bscroll{
        width: 100%;
        height:100%;
        overflow: hidden;
    }
    .bscroll-container{
        li{
            padding-bottom:20px;
            padding-top:20px;
            border-bottom:1px solid lime;/*no*/
        }
    }
    .drop-down{
        position: absolute;
        top:0px;
        lefT:0px;
        width: 100%;
        height: 50px;
        line-height:50px;
        text-align: center;
        font-size:0.8rem;
        color:#CCC;
    }
    .prompt{
        font-size:40px;
        text-align: center;
        padding:25px 0;
        color:rgba(0,0,0,0.6);
    }
</style>