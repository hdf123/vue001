<template>
    <div class='test005'>
        <div>
            <div v-for="(item,index) in arr" :key="index">
                <template v-if="item.msg1 || item.msg2">
                    <span v-if="item.msg1">{{item.msg1}}</span>
                    <span v-if="item.msg2">{{item.msg2}}</span>
                </template>
                <template v-else>没有内容</template>
            </div>
        </div>

        <div>
            <div v-for="(ks,ind) in arr1" class="as" @click="fff(ind)" :key="ind">{{ks}}</div>
        </div>

        <input type="text" @keyup.enter="search" @input="search($event)"/>


    </div>
</template>

<script>

  export default {
    name:'',
    props:[''],
    data () {
      return {
          arr:[
              {msg1:3},
              {msg2:""},
          ],
          arr1:[1,2,3,4,5]
      };
    },

    components: {},

    computed: {},

    beforeMount() {},

    created() {},

    mounted() {},

    methods: {
        fff(ind){
            console.log(ind);
        },
        search(event){
            console.log(event.currentTarget.value)
        }
    },

    watch: {}

  }

</script>
<style lang='scss' scoped>
    .as{
        width:300px;
        height:100px;
        display: flex;
        align-items: center;
        justify-content: center;
        border-bottom:1px solid red;
    }
</style>