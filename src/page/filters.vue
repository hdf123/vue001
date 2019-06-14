<template>
  <div class='filter'>
    <h3 class="hea">过滤器</h3>
    <div>{{num1  | currencyStyle('currency')}}---货币,保留2位小数</div>
    <div>{{num2  | currencyStyle('number')}}---数字格式</div>
    <div>{{msg1 | lower }}---转小写</div>
    <div>{{msg2 | upper }}---转大写</div>
  </div>
</template>

<script>
  export default {
    name:'',
    props:[''],
    data () {
      return {
        num1: 123456,
        num2: '123,456',
        msg1: 'ABC',
        msg2: 'def'
      };
    },
    filters:{},
    components: {},

    computed: {},

    beforeMount() {},

    mounted() {},

    methods: {},

    watch: {}

  }

</script>
<style lang='scss' scoped>

</style>
