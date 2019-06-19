<template>
  <div class=''>
        <div class="bscroll" ref="bscroll">
            <p class="drop-down" v-if="dropDown">松手刷新数据...</p>
            <div class="bscroll-container">
                <ul class="ksk">
                   <li v-for="(item,ind) in data" :key="ind">{{ind+1}}</li>
                </ul>
            </div>
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
          data:20,
          dropDown:false,
      };
    },

    components: {},

    computed: {},

    beforeMount() {},

    created() {},

    mounted() {
        this.$nextTick(() => {
            this.scroll = new BScroll(this.$refs.bscroll, {
                scrollY: true,
                pullDownRefresh: {//下拉配置
                    threshold: 50,
                    stop:20
                },
                pullUpLoad: {//上拉配置
                    threshold: -50
                },
            });
            this.scroll.on('scroll', (pos) => {
                //如果下拉超过50px 就显示下拉刷新的文字
                if(pos.y>50){
                    this.dropDown = true
                }else{
                    var _this=this;
                    setTimeout(function(){
                        _this.dropDown = false;
                    },3000);
                    // setTimeout(this.kks,3000);
                }
            })
            this.scroll.on('pullingDown', (pos) => {//下拉
                this.bus.$emit('loading', true);//加载loading
                setTimeout( this.setData,3000)//获取数据方法   
            }),
            this.scroll.on('pullingUp', () => {// 上拉
                this.bus.$emit('loading', true);//加载loading
                setTimeout( this.setData,3000)//获取数据方法   
            })
            this.scroll.refresh();//重新计算 better-scroll
        });
    },

    methods: {
        kks(){
            this.dropDown = false
        },
        setData(){
            this.data+=20;
            console.log("加载完成");
            this.bus.$emit('loading', false);//加载loading
            this.scroll.finishPullDown();//下拉加载完成后
            this.scroll.finishPullUp();//上拉加载完成后
        }
    },

    watch: {}

  }

</script>
<style lang='scss' scoped>
    .bscroll{
        width: 100%;
        height:100%;
        overflow: hidden;
    }
    .ksk{
        >li{
            height:80px;
            border-bottom:1px solid #ca1818;/*no*/
        }
    }
</style>