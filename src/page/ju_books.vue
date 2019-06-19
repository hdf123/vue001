<template>
  <div class='books'>
    <ul>
        <li v-for="(item,ind) in datas" :key="ind">
            <h3>{{ind+1}}:{{item.title}}</h3>
            <img class="imgks" src="" v-real-img="item.img" :default-img="imgks" alt="">
            <div>{{item.catalog}}</div>
            <p>{{item.reading}}</p>
        </li>
    </ul>
    <div class="few_pages">
      <button @click="previous">上一页</button>
      <input type="text" @keyup.enter="enter()" ref="getValue" placeholder="请输入要跳转的页数">
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
          datas:[],
          imgks:require('../assets/img/loadinga.gif'),//图片错误时显示的图片
          pn:0,////数据返回起始
          rn:5
      };
    },

    components: {},

    computed: {},

    beforeMount() {},

    created() {},

    mounted() {
        console.log(this.$route.query.userId);
        this.dataks();
    },

    methods: {
      enter(){
        this.making();
      },
      making(){
        var contentk=this.$refs.getValue.value;
        console.log(contentk);
        // this.dataks();
      },
      previous(){//上一页
        console.log(this.pn);
        this.pn=this.pn/this.rn-1;
        console.log(this.pn);
        this.dataks();
      },
      nexts:function(){//下一页
        this.pn=(this.pn+1)*this.rn;
        
        this.dataks();
      },
      dataks:function(){
        var url=this.APT3+'/goodbook/query'
        this.$axios.get(url,{
        params:{
            key:"29fbc7faebdc36dded9c3ebd3b5f286a",
            dtype:'json',//返回数据的格式,xml或json，默认json
            catalog_id:this.$route.query.userId,//目录编号
            pn:this.pn,//数据返回起始
            rn:this.rn//数据返回条数，最大30
        }
        }).then(res=>{
            console.log(res.data);
            this.datas=res.data.result.data
            console.log(this.datas);
        }).catch(err=>{
            console.log(err);
        })
      }
    },

    watch: {}

  }

</script>
<style lang='scss' scoped>
    .books{
        width:100%;
        position: absolute;
        top:0;
        left:0;
        bottom:0;
        overflow: auto;
        background: rgba(0,0,0,0.6);
    }
    ul{
      width:100%;
      height:93%;
      overflow:auto;
      background:white;
        >li{
          padding:20px;
          border-bottom:1px solid #dddddd;/*no*/
            >img{
              display:block;
              width:30%;
              margin:20px auto;
            }
            >p{
              margin-top:10px;
            }
        }
    }
    .few_pages{
      width:100%;
      height:7%;
      display: flex;
      justify-content: space-between;
      position:absolute;
      left: 0;
      bottom:0;
      >button{
        width:20%;
      }
      >input{
        width:50%;
      }
    }
</style>