<template>
  <div class='books'>
    <ul>
        <li v-for="(item,ind) in datas" :key="ind">
            <h3>{{ind+1}}:{{item.title}}</h3>
            <!--v-real-img 就是刚刚定义的指令，绑定的为真实要显示的图片地址。:default-img为默认图片地址-->
            <img class="imgks" src="" v-real-img="item.img" :default-img="require('../assets/img/loadinga.gif')" alt="">
            <div>{{item.catalog}}</div>
            <p>{{item.reading}}</p>
        </li>
    </ul>
    <div class="few_pages">
      <button @click="previous">上一页</button>
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
          pn:0,////数据返回起始
          rn:5,
          menu:1
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
      previous(){//上一页
        this.pn=this.pn-this.rn;
        console.log(this.pn);
        this.dataks();
      },
      nexts:function(){//下一页
        this.pn=this.pn+this.rn;
        this.dataks();
        console.log(this.pn);
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
        width:50%;
      }
    }
</style>