<template>
  <div class='computedk'>
    <table>
      <thead>
        <tr>
          <td>序号</td>
          <td>名称</td>
          <td>数量</td>
          <td>单价</td>
          <td>总价</td>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item, ind) in list" :key="ind">
          <td>{{item.id}}</td>
          <td>{{item.name}}</td>
          <td>
            <div>
              <button @click="reduce(index)">-</button>
              {{item.count}}
              <button @click="add(index)">+</button>
            </div>
          </td>
          <td>{{item.price}}</td>
          <td>{{item.count * item.price}}</td>
        </tr>
      </tbody>
    </table>
    <p>一共{{totalCount}}件商品总价：{{totalPrice}}</p>

    <hr>

    <div v-for="(val,name,ind) in object" :key="ind">
      <template v-if="ind==1">{{ind}}---{{name}}---{{val}}</template>
      <template v-else-if="ind!=1">{{ind}}---{{name}}---{{val}}</template>
    </div>
  </div>
</template>

<script>
  export default {
    name:'',
    props:[''],
    data () {
      return {
        list:[
          {id:'001',name:'苹果',price:100,count:2},
          {id:'002',name:'香蕉',price:200,count:6},
          {id:'003',name:'葡萄',price:300,count:9}
        ],
        object: {
          title: 'How to do lists in Vue',
          author: 'Jane Doe',
          publishedAt: '2016-04-10'
        },
      };
    },

    components: {},

    computed: {
      totalCount:function(){//总数量
        var totalCount=0;
        for(let i=0;i<this.list.length;i++){
          totalCount += this.list[i].count;
        }
        return totalCount;
      },
      totalPrice:function(){//总价格
        var totalPrice=0;
        for(let i=0;i<this.list.length;i++){
          totalPrice += this.list[i].price * this.list[i].count;
        }
        return totalPrice;
      }
    },

    beforeMount() {},

    mounted() {},

    methods: {
      add:function(index){
        //获取当前点击事件上面商品的数量
        var buy_num = this.list[index].count;
        this.list[index].count++;
      },
      reduce:function(index){
        var buy_num = this.list[index].count;
        if(buy_num<1) return;
        this.list[index].count--;
      }
    },

    watch: {}

  }

</script>
<style lang='scss' scoped>
  .computedk{
    background:rgba(0,0,0,0.5);
  }
  table{
    width:100%;
    tr{
      width:100%;
      >td{
        text-align: center;
        // border:1px solid rgba(0,0,0,0.5);
      }
      >td:nth-child(1){
        width:10%;
      }
      >td:nth-child(2){
        width:15%;
      }
      >td:nth-child(3){
        width:35%;
        padding:0 10px;
        >div{
          width:100%;
          display: flex;
          align-items: center;
          justify-content: space-between;
        }
      }
      >td:nth-child(4){
        width:20%;
      }
      >td:nth-child(5){
        width:20%;
      }
    }
  }
</style>