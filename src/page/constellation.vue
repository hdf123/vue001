<template>
  <div class='requestk'>
    <div class="title_box">
      <input type="text" class="inps" @keyup.13="enter()" ref="getValue" placeholder="请输入你的星座" />
      <button class="btn" @click="making">今日运势</button>
    </div>
      <ul v-show="isShow">
        <li>
          <div>星座名称：</div>
          <div>{{data.name}}</div>
        </li>
        <li>
          <div>日期：</div>
          <div>{{data.datetime}}</div>
        </li>
        <li>
          <div>综合指数：</div>
          <div>{{data.all}}</div>
        </li>
        <li>
          <div>幸运色：</div>
          <div>{{data.color}}</div>
        </li>
        <li>
          <div>健康指数：</div>
          <div>{{data.health}}</div>
        </li>
        <li>
          <div>爱情指数：</div>
          <div>{{data.love}}</div>
        </li>
        <li>
          <div>财运指数：</div>
          <div>{{data.money}}</div>
        </li>
        <li>
          <div>工作指数：</div>
          <div>{{data.work}}</div>
        </li>
        <li>
          <div>幸运数字：</div>
          <div>{{data.number}}</div>
        </li>
        <li>
          <div>速配星座：</div>
          <div>{{data.QFriend}}</div>
        </li>
        <li>
          <div>今日概述：</div>
          <div>{{data.summary}}</div>
        </li>
      </ul>
      <div @click="movie()" class="movie">看电影去</div>
  </div>
</template>

<script>
  export default {
    name:'',
    props:[''],
    data () {
      return {
        data:{},
        isShow:false
      };
    },

    components: {},

    computed: {},

    beforeMount() {},

    mounted() {},

    methods: {
      enter(){
        this.making();
      },
      making:function(){
        var constellation=this.$refs.getValue.value;
        if(constellation.indexOf("座") <= -1){
          constellation=constellation+"座"
        }
        this.ajaxds(constellation);
      },
      ajaxds:function(constellation){
        var url=this.APT2+'/constellation/getAll'
        this.$axios.get(url,{
          params:{
            key:"97535694b4a86c8a40ecdb47e9f26237",
            consName:constellation,
            type:'today'//运势类型：today,tomorrow,week,month,year
          }
        }).then(res=>{
          console.log(res.data);
          if(res.data.resultcode==201){
            return alert("输入错误，请重新输入");
          }
          this.data=res.data;
          this.isShow=true;
        }).catch(err=>{
          console.log(err);
        })
      },
      movie:function(){
        var url=this.APT3+'/wepiao/query'
        this.$axios.get(url,{
          params:{
            key:"3de4149fc68371b91e775f98bf5714b6"
          }
        }).then(res=>{
          console.log(res.data);
          location.href=res.data.result.h5url;
        }).catch(err=>{
          console.log(err);
        })
      }
    },

    watch: {}

  }
</script>

<style lang='scss' scoped>
  .movie{
    width:100%;
    height:80px;
    display: flex;
    align-items: center;
    justify-content: center;
    color:rgba(0,0,0,0.6);
    background: rgba(199,199,199,0.5);
    position: absolute;
    left:0;
    bottom:0;
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
    }
  }
  ul{
    >li{
      display: flex;
      padding:0 20px;
      border-bottom:1px solid rgba(199,0,0,0.5);
      >div:nth-child(1){
        width:25%;
        height:50px;
        text-align: justify;
        line-height:50px;
        overflow: hidden;
      }
      >div:nth-child(1):after{
        display: inline-block;
        width: 100%;
        content: '';
      }
      >div:nth-child(2){
        width:75%;
        padding:10px 0;
      }
    }
  }
</style>