<template>
  <div class='basicUse'>
    <header class="headers">页面传参</header>
    <fatherTheSon class="fatherTheSon_box" :lists="'今晚打老虎'"></fatherTheSon>
    <div>子组件二传出来的数据---{{out}}{{as}}</div>
    <sonTheFather class="sonTheFather_box" @closesd="closesdk"></sonTheFather>

    <!-- <cycle class="cycle_box">slot不具名插槽传值</cycle> -->
    <cycle class="cycle_box">
      <div slot="header">我是传入的头部</div>
      <div slot="footer">我是传入的底部</div>
    </cycle>
    star组件
    <stars class="" :score="a1[0]" :size="b1[0]"></stars>
    <stars class="" :score="a1[1]" :size="b1[1]"></stars>
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
        a1:[3,2],
        b1:[20,16]
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
      // $(".btn").after(`<div class="adds">123</div>`);
      // $(".btn").on("click", ".adds", this.funk);
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
    height:100px;
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
    background:rgba(0,0,0,0.1);
    margin-bottom:50px;
  }
  .cycle_box{
    height:300px;
  }
  .btn{
    width:50%;
    height:60px;
    background: rgba(99,0,0,0.5);
    margin-bottom:50px;
  }
  .basicUse>>>.adds{
    width:50%;
    height:60px;
    background: rgba(0,99,0,0.5);
  }
</style>