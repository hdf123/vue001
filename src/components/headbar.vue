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

</style>