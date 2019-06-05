<template>
  <div class='contbar'>
    <div class="heas">
      <!-- <div @click="basicUse()">基本使用</div> -->
      <router-link tag="div" :to="{path:'/basicUse'}">基本使用</router-link>
      <router-link tag="div" :to="{path:'/computedk'}">计算属性</router-link>
      <router-link tag="div" :to="{path:'/test001'}">模拟操作</router-link>
    </div>
    <router-view class="boxs"></router-view>
  </div>
</template>

<script>
  import computedk from '@/page/computedk'
  export default {
    name:'',
    props:[''],
    data () {
      return {
        inds:''
      };
    },
    // 注册组件
    components: {
      computedk
    },
    // 计算属性
    computed: {},
    //挂载前
    beforeMount() {},
    //挂载完成
    mounted() {},
    //方法
    methods: {
      basicUse(){
        // 字符串
        // this.$router.push('/basicUse');
        // 对象
        // this.$router.push({ path: '/basicUse' })
        // 命名的路由
        // this.$router.push({ name: 'basicUse', params: { userId: 22 }})
      }
    },
    //监听
    watch: {}

  }

</script>
<style lang='scss' scoped>
.contbar{
  display:flex;
}
  .heas{
    width:25%;
    height:100%;
    overflow: auto;
    >div{
      width:100%;
      height:80px;
      color:rgba(0,0,0,0.5);
      font-size:30px;
      line-height:80px;
      text-align:center;
      border-bottom:1px solid  rgba(255,255,255,0.8);
    }
    .router-link-active{
      color:rgba(0,0,0,0.8);
    }
  }
  .boxs{
    width:75%
  }
</style>