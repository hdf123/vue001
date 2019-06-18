<template>
  <div class='books'>
      <img class="kkk" :src="imgs" alt="">
    <ul>
        <li v-for="(item,ind) in datas" :key="ind">
            <h3>{{item.title}}</h3>
            <img :onerror="errorUserPhoto" :src='item.img' alt="">
            <div>{{item.sub1}}</div>
            <p>{{item.reading}}</p>
        </li>
    </ul>
  </div>
</template>

<script>
  import userPhoto from '@/assets/img/loadinga.gif'
  export default {
    name:'',
    props:[''],
    data () {
      return {
          imgs:'',
          datas:[],
          errorUserPhoto:'this.src="' + require('../assets/img/loadinga.gif') + '"'
        //   errorUserPhoto:'this.src="' + userPhoto + '"'
      };
    },

    components: {},

    computed: {},

    beforeMount() {},

    created() {},

    mounted() {
        this.imgs=this.errimg
        console.log(this.imgs);
        console.log(this.$route.query.userId);

        var url=this.APT3+'/goodbook/query'
        this.$axios.get(url,{
        params:{
            key:"29fbc7faebdc36dded9c3ebd3b5f286a",
            dtype:'json',//返回数据的格式,xml或json，默认json
            catalog_id:this.$route.query.userId,//目录编号
            pn:0,//数据返回起始
            rn:10//数据返回条数，最大30
        }
        }).then(res=>{
            console.log(res.data);
            this.datas=res.data.result.data
            console.log(this.datas);
        }).catch(err=>{
            console.log(err);
        })

    },

    methods: {},

    watch: {}

  }

</script>
<style lang='scss' scoped>
    .books{
        width:100%;
        background: rgba(0,0,0,0.6);
        position: absolute;
        top:0;
        left:0;
        bottom:0;
        overflow: auto;
    }
    ul{
        background:white;
        >li{
            background:white;
        }
    }
    .kkk{
        width:100%;
        height:200px;
    }
</style>