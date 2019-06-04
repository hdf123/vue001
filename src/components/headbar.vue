<template>
  <div @click="fun($event)" :data-txt="11" class='headbar headers'>
    headbar
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

    methods: {
      fun(e){
        console.log(e.srcElement.dataset.txt);
        console.log(e.target.innerText);
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
</style>