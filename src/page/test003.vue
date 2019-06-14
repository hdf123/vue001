<template>
  <div class='requestk'>
    <div class="box">
      <router-link tag="div" :to="{path:'/home/test003/wan_classic_statement'}">经典语句</router-link>
      <router-link tag="div" :to="{path:'/home/test003/wan_riddle'}">谜语</router-link>
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
    height:93%;
    overflow: auto;
  }
</style>