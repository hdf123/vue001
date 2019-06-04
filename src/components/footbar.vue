<template>
  <div class='footbar'>
    footbar
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
  .footbar{
    position: absolute;
    left:0;
    bottom:0;
    width:100%;
    height:100px;
    display: flex;
    align-items: center;
    justify-content: center;
    color:white;
    font-size:30px;
    background:rgba(99,0,0,0.5);
  }
</style>