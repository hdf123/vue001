<template>
  <div id="app">
    <router-view />
    <tips></tips>
    <loading></loading>  
  </div>
</template>

<script>
  import tips from '@/plug/tips'
  import loading from '@/plug/loading'
  export default {
    name: 'App',
    components:{
      tips,
      loading
    }
  }
</script>
  
<style>

</style>
