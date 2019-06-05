<template>
  <div class='home'>
    <headbar></headbar>
    <contbar></contbar>
    <footbar></footbar>
  </div>
</template>

<script>
import headbar from "@/components/headbar";
import contbar from "@/components/contbar";
import footbar from "@/components/footbar";
export default {
  name: 'home',
  components:{
    headbar,
    contbar,
    footbar
  }
}
</script>
<style lang='scss' scoped>
  .home>div{
    width:100%;
  }
  .headers{
    height:100px;
    display: flex;
    align-items: center;
    justify-content: center;
    color:white;
    font-size:30px;
    background:#FFB94A;
  }
  .contbar{
    position:absolute;
    top:100px;
    left:auto;
    bottom:100px;
    overflow: auto;
    background:rgba(99,99,99,0.1);
  }
  .footbar{
    position: absolute;
    left:0;
    bottom:0;
    height:100px;
    display: flex;
    align-items: center;
    justify-content: center;
    color:white;
    font-size:30px;
    background:rgba(99,0,0,0.5);
  }
</style>