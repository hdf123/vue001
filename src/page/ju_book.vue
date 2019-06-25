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
      this.bus.$emit('loading', true);//加载loading
      this.$axios.get('/api3/goodbook/catalog',{
        params:{
          key:"29fbc7faebdc36dded9c3ebd3b5f286a",
          dtype:'json',
        }
      }).then(res=>{
        this.bus.$emit('loading', false);//加载loading
        if(res.data.resultcode != 200) return alert(res.data.reason);
        console.log(res.data);
        this.data=res.data.result
        console.log(this.data);
        
      }).catch(err=>{
        console.log(err);
      })
    },

    methods: {
        book:function(menu){
            this.$router.push({ name: 'ju_books', query: { userId: menu.id }})
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