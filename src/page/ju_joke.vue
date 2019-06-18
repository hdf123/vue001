<template>
    <div class="rules">
        <div class="bscroll" ref="bscroll">
            <p class="drop-down" v-if="dropDown">松手刷新数据...</p>
            <div class="bscroll-container">
                <ul>
                   <li v-for="(item,ind) in data" :key="ind">{{ind+1}}--{{item.content}}</li>
                    <p class="x" v-if="more">加载更多...</p>
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
        var url=this.APT1+'/joke/content/list.php'
        this.$axios.get(url,{
          params:{
            key:"e280d4235744d275aa6ca4fda0ae182e",
            page:this.page,//当前页数,默认1
            pagesize:this.pagesize,	//每次返回条数,默认1,最大20
            sort:'desc',//类型，desc:指定时间之前发布的，asc:指定时间之后发布的
            time:times//时间戳（10位）
          }
        }).then(res=>{
          if(res.data.resultcode==112) alert(res.data.reason);
          this.bus.$emit('loading', false);//加载loading
          this.data=this.data.concat(res.data.result.data)
          console.log(this.data);
          this.$set(this.data)
          this.page++;
          
        }).catch(err=>{
          console.log(err);
        })
      },
        scrollFn(){
            this.$nextTick(() => {
                if (!this.scroll) {
                    this.scroll = new BScroll(this.$refs.bscroll, {
                        click: true,
                        scrollY: true,
                        probeType: 3
                    });
                }else{
                    this.scroll.refresh();
                }
                this.scroll.on('scroll', (pos) => {
                    // console.log(pos.y,this.dropDown)
                    //如果下拉超过50px 就显示下拉刷新的文字
                    if(pos.y>50){
                        this.dropDown = true
                    }else{
                        this.dropDown = false
                    }
                    if(this.scroll.maxScrollY>pos.y+10){

                    }
                })
                //touchEnd（手指离开以后触发） 通过这个方法来监听下拉刷新
                this.scroll.on('touchEnd', (pos) => {
                    // 下拉动作
                    if(pos.y > 50){
                        console.log("下拉刷新成功")
                        this.dropDown = false
                    }
                    //上拉加载 总高度>下拉的高度+10 触发加载更多
                    if(this.scroll.maxScrollY>pos.y+10){
                        console.log("加载更多")
                        this.bus.$emit('loading', true);//加载loading
                        this.kdata()
                        this.more=false;
                        //使用refresh 方法 来更新scroll  解决无法滚动的问题
                        this.scroll.refresh()
                    }
                    console.log(this.scroll.maxScrollY+"总距离----下拉的距离"+pos.y)
                })
                console.log(this.scroll.maxScrollY)
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
</style>