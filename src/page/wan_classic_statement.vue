<template>
  <div class=''>
    <div class="title_box">
      <input type="text" class="inps" @keyup.13="enter()" ref="getValue" placeholder="请输入关键字" />
      <button class="btn" @click="making">确定</button>
    </div>
    <div class="box" v-for="(item,ind) in data" :key="ind">
      <h3>{{item.name}}</h3>
      <div v-for="(items,inds) in item.mottoList" :key="inds">
        {{inds+1}}:{{items}}
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name:'',
    props:[''],
    data () {
      return {
        content:'',
        data:[],
      };
    },

    components: {},

    computed: {},

    beforeMount() {},

    created() {},

    mounted() {},

    methods: {
      enter(){
        this.making();
      },
      making:function(){
        this.content=this.$refs.getValue.value;
        this.ajaxds();
      },
      ajaxds:function(){
        this.bus.$emit('loading', true);//加载loading
        this.$axios.get('/api4/1646-1',{
          params:{
          showapi_timestamp:this.wan_time.times(),//客户端时间。 
          showapi_appid:"97504",//易源应用id
          showapi_sign:"ff9e442404ae485eb5b5e993bfe42566",//数字签名
          page:"",//页码
          name:this.content//关键词
          }
        }).then(res=>{
          console.log(res.data);
          this.bus.$emit('loading', false);
          this.data=res.data.showapi_res_body.result.contentlist;
          console.log(this.data);
        }).catch(err=>{
          console.log(err);
        })
      }
    },

    watch: {}

  }

</script>
<style lang='scss' scoped>
  .title_box{
    display: flex;
    height:70px;
    >input{
      width:75%;
      outline: none;
    }
    >button{
      width:25%;
    }
  }
  .box{
    border-bottom:1px solid red;
    >h3{
      text-align:center;
      padding:10px 0;
      font-size:40px;
      color:rgba(0,0,99,0.8);
    }
    >div{
      padding:10px;
      border-bottom:1px solid #dddddd;
    }
  }

</style>