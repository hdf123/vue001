<template>
  <div class='contbar'>
    <div @click="basicUse">基本使用</div>

    <router-link tag="div" :to="{path:'/computedk'}">计算属性</router-link>

    <router-link tag="div" :to="{path:'/test001'}">模拟操作</router-link>
    
  </div>
</template>

<script>
  import computedk from '@/page/computedk'
  export default {
    name:'',
    props:[''],
    data () {
      return {
        
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
        this.$router.push('/basicUse');
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
    width:100%;
    position:absolute;
    top:100px;
    left:auto;
    right:auto;
    bottom:100px;
    overflow: auto;
    background:rgba(0,0,0,0.5);
    >div{
      height:80px;
      color:white;
      font-size:30px;
      line-height:80px;
      padding-left:20px;
      border-bottom:1px solid  rgb(255, 0, 0);
    }
  }
</style>