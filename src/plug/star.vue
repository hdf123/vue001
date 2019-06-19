<template>
  <div>
    <!-- 评价星级组件 -->
    <i class="iconfont" :style="fontSize" :class="item" v-for="(item,ind) in stars" :key="ind"></i>
  </div>
</template>

<script>
  export default{
    props:{
      score:{
        // type:[String, Number,Array,Boolean,Object,Function,Symbol],//多个可能的类型
        type:Number
      },
      size:{
        type:Number
      },
      menus:{
        type:Number
      }
    },
    data(){
      return {
        stars:[],
        fontSize:{}
      }
    },
    mounted(){//绑定事件、数据后，插入页面前
      let arr=[];
      for(let i=0;i<this.score;i++){
        arr.push("icon-xingxing")
      }
      for(let i=0;i<this.menus-this.score;i++){
        arr.push("icon-xingxing1")
      }
      this.stars=arr;
      this.fontSize={
        "font-size":this.size+"px"
      };
    }
  }
</script>

<style lang="css">

</style>
