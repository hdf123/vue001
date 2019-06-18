<template>
  <div class='book'>
    <ul class="menu">
        <li v-for="(item,ind) in data" :key="ind" :stid='item.id' @click="book(item)">
            <div>{{item.catalog}}</div>
        </li>
    </ul>
    <router-view></router-view>
  </div>
</template>

<script>

  export default {
    name:'',
    props:[''],
    data () {
      return {
          data:[]
      };
    },

    components: {},

    computed: {},

    beforeMount() {},

    created() {},

    mounted() {
        var url=this.APT3+'/goodbook/catalog'
        this.$axios.get(url,{
          params:{
            key:"29fbc7faebdc36dded9c3ebd3b5f286a",
            dtype:'json',
          }
        }).then(res=>{
          console.log(res.data);
          if(res.data.resultcode != 200) alert(res.data.reason);
          this.bus.$emit('loading', false);//加载loading
          this.data=res.data.result
          console.log(this.data);
          
        }).catch(err=>{
          console.log(err);
        })
    },

    methods: {
        book:function(menu){
            this.$router.push({ name: 'books', query: { userId: menu.id }})
        }
    },

    watch: {}

  }

</script>
<style lang='scss' scoped>
    .book{
        position: relative;
    }
    .menu{
        padding:30px 0;
        display: flex;
        flex-wrap: wrap;
        >li{
            width:25%;
            height:80px;
            >div{
                width:80%;
                height:80%;
                margin:0 auto;
                display: flex;
                align-items: center;
                justify-content: center;
                border:1px solid #dddddd;/*no*/
                border-radius:5px;/*no*/
            }
        }
    }
</style>