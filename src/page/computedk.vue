<template>
  <div class='computedk'>
    <div id="example">
      <p>Original message: "{{ message }}"</p>
      <p>Computed reversed message: "{{ reversedMessage }}"</p>
    </div>
  </div>
</template>

<script>

  export default {
    name:'',
    props:[''],
    data () {
      return {
        message: 'Hello'
      };
    },
    components: {},

    computed: {
      reversedMessage: function () {
        return this.message.split('').reverse().join('')
      }
    },

    beforeMount() {},

    mounted() {},

    methods: {},

    watch: {}

  }

</script>
<style lang='scss' scoped>
  .computedk{
    background:rgba(0,0,0,0.5);
  }
</style>