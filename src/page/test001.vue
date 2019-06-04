<template>
  <div class='test001'>
      <div>
        <!-- @keyup.enter="enter()"--@keyup.13="enter()" -->
        <input type="number" class="inps" @keyup.13="enter()" placeholder="请输入手机号"/>
        <button class="btn" @click="changeInt">确认</button>

        <ul class="tab-tit">
            <li v-for="(title,ind) in tabTitle" @click="cur=ind" :class="{active:cur==ind}" :key="ind">{{title}}</li>
        </ul>
        <div class="tab-content">
            <div v-for="(m,inds) in tabMain" v-show="cur==inds" :key="inds">{{m}}</div>
        </div>
      </div>
  </div>
</template>

<script>
  export default {
    name:'',
    props:[''],
    data () {
      return {
        tabTitle: ['标题一', '标题二', '标题三', '标题四'],
        tabMain: ['内容一', '内容二', '内容三', '内容四'],
        cur: 0 //默认选中第一个
      };
    },

    components: {},

    computed: {},

    beforeMount() {},

    mounted() {
    },

    methods: {
        enter(){
          this.changeInt();
        },
        changeInt() {
            var phone=$(".inps").val();
            // 手机号正则
            var reg=/^1[3456789]\d{9}$/;
            // var reg=/^1([38][0-9]|4[579]|5[0-3,5-9]|6[6]|7[0135678]|9[89])\d{8}$/;
            console.log(reg.test(phone));
            if(reg.test(phone)){
                alert("手机号正确");
            }else{
              alert("手机号错误");
            }
        }

    },

    watch: {}

  }

</script>
<style lang='' scoped>
        .tab-tit{
            width:100%;
        }
        .tab-tit li{
            float: left;
            width: 25%;
            padding: 10px 0;
            text-align: center;
            background-color:#f4f4f4;
            cursor: pointer;
        }
        /* 点击对应的标题添加对应的背景颜色 */
        .tab-tit .active{
            background-color: #09f;
            color: #fff;
        }
        .tab-content div{
            float: left;
            width: 25%;
            line-height: 100px;
            text-align: center;
        }
</style>