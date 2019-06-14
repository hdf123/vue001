<template>
  <div class='riddle'>
    <div class="title_box">
      <input type="text" @keyup.enter="enter()" ref="getValue" placeholder="请输入关键字">
      <button @click="btn">确定</button>
    </div>
    <div class="box">
      <div v-for="(item,ind) in data" :key="ind">
        {{ind+1}}:{{item.question}}
        <p>答案：{{item.answer}}</p>
      </div>
    </div>
    <div class="btn">
      <button @click="lasts">上一页</button>
      <button @click="nexts">下一页</button>
    </div>
  </div>
</template>

<script>
  export default {
    name:'',
    props:[''],
    data () {
      return {
        contents:'',
        data:[],
        page:2,
      };
    },

    components: {},

    computed: {},

    beforeMount() {},

    created() {},

    mounted() {

    },

    methods: {
      enter(){
        this.btn();
      },
      btn:function(){
        this.contents=this.$refs.getValue.value;
        this.ajaxds();
      },
      lasts:function(){//上一页
        this.page--;
        this.ajaxds();
      },
      nexts:function(){//下一页
        this.page++;
        this.ajaxds();
      },
      ajaxds:function(){
        this.bus.$emit('loading', true);//加载loading
        var url=this.APT4+'/1623-2'
        this.$axios.get(url,{
          params:{
          showapi_timestamp:this.wan_time.times(),//客户端时间。 
          showapi_appid:"97504",//易源应用id
          showapi_sign:"ff9e442404ae485eb5b5e993bfe42566",//数字签名
          page:2,
          question:this.contents,
          isAnswer:true
          }
        }).then(res=>{
          console.log(res.data);
          this.data=res.data.showapi_res_body.contentlist;
          console.log(this.data);
          this.bus.$emit('loading', false);//加载loading
        }).catch(err=>{
          console.log(err);
        })
      }
    },

    watch: {}

  }

</script>
<style lang='scss' scoped>
.riddle{
  position: relative;
}
  .title_box{
    display: flex;
    height:70px;
    >input{
      width:75%;
      outline: none;
    }
    >button{
      width:25%;
      padding:0;
    }
  }
  .box{
    height:86.5%;
    overflow: auto;
    >div{
      padding:10px;
      border-bottom:1px solid red;
    }
  }
  .btn{
    width:100%;
    display: flex;
    position: absolute;
    bottom: 0;
    >button{
      width:100%;
      height:70px;
    }
  }
</style>