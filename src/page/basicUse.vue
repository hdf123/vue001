<template>
  <div class='basicUse'>
    <!-- 组件一 -->
    <fatherTheSon class="fatherTheSon_box" :lists="'今晚打老虎'"></fatherTheSon>
    <div>子组件二传出来的数据---{{out}}{{as}}</div>
    <!-- 组件二 -->
    <sonTheFather class="sonTheFather_box" @closesd="closesdk"></sonTheFather>
    <!-- 组件三-->
    <!-- <cycle class="cycle_box">slot不具名插槽传值</cycle> -->
    
    <cycle class="cycle_box">
      <div slot="header">我是传入的头部</div>
      <div slot="footer">我是传入的底部</div>
    </cycle>
    star组件
    <stars class="" :score="a1[0]" :size="b1[0]" :menus="c1[0]"></stars>
    <stars class="" :score="a1[1]" :size="b1[1]" :menus="c1[1]"></stars>
  </div>
</template>

<script>
  import fatherTheSon from '@/page/father_the_son'
  import sonTheFather from '@/page/son_the_father'
  import cycle from '@/page/cycle'
  import stars from "@/plug/star"
  export default {
    name:'',
    props:[''],
    data () {
      return {
        listdata:[1,2,3,4,5],
        out:"",
        as:"",
        a1:[3,4],
        b1:[20,16],
        c1:[5,10]
      };
    },
    components: {
      fatherTheSon,
      sonTheFather,
      cycle,
      stars
    },

    computed: {},

    beforeMount() {},

    mounted() {
      
    },

    methods: {
      closesdk(one,two,three){
        this.out=three.out;
        this.as=three.as;
      },
      funk(){
        alert(12);
      }
    },

    watch: {}

  }

</script>
<style lang='scss' scoped>
  .headers{
    width:100%;
    height:80px;
    display: flex;
    align-items: center;
    justify-content: center;
    color:white;
    font-size:30px;
    background:#FFB94A;
    
  }
  .fatherTheSon_box,.sonTheFather_box,.cycle_box,.stars_box{
    width:100%;
    height:200px;
    overflow: auto;
    background:rgba(199,199,199,0.8);
    margin-bottom:50px;
  }
  .cycle_box{
    height:300px;
  }
</style>