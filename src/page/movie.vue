<template>
  <div class='requestk'>

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

    mounted() {
      var url=this.APT3+'/wepiao/query'
      this.$axios.get(url,{
        params:{
          key:"3de4149fc68371b91e775f98bf5714b6"
        }
      }).then(res=>{
        console.log(res.data);

      }).catch(err=>{
        console.log(err);
      })
    },

    methods: {},

    watch: {}

  }

</script>
<style lang='scss' scoped>
 
  .box{
    padding:25px 20px;
    border-bottom:1px solid #dddddd;
  }
</style>