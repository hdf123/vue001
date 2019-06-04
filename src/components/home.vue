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
<style lang='' scoped>

</style>