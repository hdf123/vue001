<template>
  <div class="father_the_son">
    <h3 class="hea">组件一</h3>
    <div class="lists">这是父组件传进来的数据---{{lists}}</div>
    <div>这是兄弟组件传进来的数据---{{msg}}</div>
  </div>
</template>

<script>
import Bus from "@/js/bus.js";
export default {
  name: "",
  data() {
    return {
      msg: ""
    };
  },
  props: {
    lists: {
      // type:[String, Number,Array,Boolean,Object,Function,Symbol],//多个可能的类型
      type: null //null//允许任何类型
    }
  },
  components: {},

  computed: {},

  beforeMount() {},

  mounted() {
    let _this = this;
    Bus.$on("msg", e => {
      _this.msg = e;
      console.log(`传来的数据是：${e}`);
    });
  },

  methods: {},

  watch: {}
};
</script>
<style lang='scss' scoped>
.father_the_son {
    > div {
        widows: 100%;
        height: 50px;
        line-height: 50px;
        border-bottom: 1px solid red;
    }
}
</style>