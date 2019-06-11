<template>
  <div class='requestk'>
    <div class="box">
      <router-link tag="div" :to="{path:'/home/test002/joke'}">笑话大全</router-link>
      <router-link tag="div" :to="{path:'/home/test002/constellation'}">星座测试</router-link>
      <router-link tag="div" :to="{path:'/home/test002/aa'}">万维易源</router-link>
    </div>
    <router-view class="boxks"></router-view>

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

    mounted() {},

    methods: {},

    watch: {}

  }

</script>
<style lang='scss' scoped>
  .box{
    display: flex;
    height:7%;
    >div{
      width:100%;
      height:100%;
      display: flex;
      align-items: center;
      justify-content: center;
      border:1px solid #d6c8c8;
    }
  }
  .router-link-active{
    color:rgba(175, 52, 52, 0.8);
  }
  .boxks{
    width:100%;
    height:93%;
    overflow: auto;
  }
</style>