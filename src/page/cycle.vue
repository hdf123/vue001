<template>
  <div class="content">
    <h3 class="hea">组件三</h3>
    <span v-for="(item, index) in datas" class="btn" :class="{active:index==isShow}" @click="changeColor(index)" :key="index">{{item.city}}</span>
    <hr />

    <div class="divs">
      <span v-for="(item, index) in datas" :class="styles(item.states)" :key="index">{{item.city}}</span>
    </div>

    <!-- <slot>slot不具名插槽</slot> -->
    <slot name="header">slot插槽</slot>
    <slot name="footer">slot插槽</slot>
    
  </div>
</template>
<script>
export default {
  data() {
    return {
      datas: [
        { city: "上海",states:0 },
        { city: "北京",states:1 },
        { city: "关东",states:2 },
        { city: "安徽",states:3 }
      ],
      isShow:0
    };
  },
  methods: {
    changeColor(index) {
      console.log(index);
      this.isShow = index
    },
    styles(i){
      switch(i){
        case 0:return 'statesA';
        case 1:return 'statesB';
        case 2:return 'statesC';
        case 3:return 'statesD';
      }
    }
  }
};
</script>
<style lang="scss" scoped>
.content {
   width:100%;
}
.btn {
  display: inline-block;
  margin: 10px;
  border: 2px solid #666;
  border-radius: 10px;
  padding:4px 8px;
  color: #5e13b4;
  font-size: 14px;
  cursor: pointer;
}
.active {
  background-color: #5e13b4;
  color: #fff;
}
.divs{
  >span{
    display: inline-block;
    padding:4px 8px;
    margin: 10px;
    border-radius: 10px;
  }
}
.statesA{
  color:yellow;
  border: 2px solid yellow;
}
.statesB{
  color:lime;
  border: 2px solid lime;
}
.statesC{
  color:rebeccapurple;
  border: 2px solid rebeccapurple;
}
.statesD{
  color:cornflowerblue;
  border: 2px solid cornflowerblue;
}
</style>
