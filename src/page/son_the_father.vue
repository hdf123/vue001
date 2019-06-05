<template>
  <div class='son_the_father'>
    <h3 class="hea">组件二</h3>
    <div>这是要传给父组件的数据---{{out}}{{as}}</div>
    <div>这是要传给兄弟组件的数据---{{msg}}</div>
  </div>
</template>

<script>
import Bus from "@/assets/js/bus.js";
  export default {
    name:'',
    props:[''],
    data () {
      return {
        out:"出去",
        as:"123",
        msg:"我要传给兄弟组件们，你收到没有"
      };
    },

    components: {},

    computed: {},

    beforeMount() {},

    mounted() {
      this.fun();
      this.funs();
    },

    methods: {
      fun(){
        this.$emit('closesd',1,'22',{out:this.out,as:this.as})
      },
      funs(){
          Bus.$emit('msg',this.msg)
      }
    },

    watch: {}

  }

</script>
<style lang='scss' scoped>
  .son_the_father{
    >div{
      padding:10px;
      border-bottom:1px solid red;
    }
  }
</style>