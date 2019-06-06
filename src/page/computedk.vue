<template>
  <div class='computedk'>
    <div id="example">
      <p>Original message: "{{ message }}"</p>
      <p>Computed reversed message: "{{ reversedMessage }}"</p>
    </div>
    <input type="text" v-model="childrens.name" />
    <input type="text" v-model="lastName" />

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
        <tr v-for="(item, index) in list" :key="index">
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
  </div>
</template>

<script>

  export default {
    name:'',
    props:[''],
    data () {
      return {
        message: 'Hello',
        childrens: {
          name: '小强',
          age: 20,
          sex: '男'
        },
        tdArray:["1","2"],
        lastName:"张三",
        list:[
          {id:'001',name:'苹果',price:100,count:2},
          {id:'002',name:'香蕉',price:200,count:6},
          {id:'003',name:'葡萄',price:300,count:9}
        ]
      };
    },
    components: {},
    computed: {
      reversedMessage: function () {
        return this.message.split('').reverse().join('')
      },


      totalCount:function(){
        var totalCount=0;
        for(let i=0;i<this.list.length;i++){
          totalCount += this.list[i].count;
        }
        return totalCount;
      },
      totalPrice:function(){
        var totalPrice=0;
        for(let i=0;i<this.list.length;i++){
          totalPrice += this.list[i].price * this.list[i].count;
        }
        return totalPrice;
      }
    },

    beforeMount() {},

    mounted(){},

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

    watch: {
      childrens:{
        handler:function(val,oldval){
          console.log(val.name)//46
        },
        deep:true//对象内部的属性监听，也叫深度监听
      },
      'childrens.name':function(val,oldval){
        console.log(val+"aaa")//51
      },//键路径必须加上引号
      lastName:function(val,oldval){
        console.log(this.lastName)
      }
    }

  }

</script>
<style lang='scss' scoped>
*{
  box-sizing: border-box;
}
  .computedk{
    background:rgba(0,0,0,0.5);
  }
  table{
    width:100%;
    tr{
      width:100%;
      >td{
        text-align: center;
        border:1px solid rgba(0,0,0,0.5);
      }
      >td:nth-child(1){
        width:10%;
      }
      >td:nth-child(2){
        width:15%;
      }
      >td:nth-child(3){
        width:35%;
        >div{
          width:100%;
          display: flex;
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