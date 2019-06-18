<template>
  <div class=''>
    <div class="add">
        <span>添加图片：</span>
        <input type="text" v-model="addImgSrc">
        <button @click="addImg">添加</button>
        <button @click="delImg">删除</button>
    </div>
    <ul class="img-list">
        <!-- <img class="imgks" :src="kkk" onerror="onerror=null;src='../assets/img/loadinga.gif'" alt=""> -->
        <li v-for="(item,index) in imgList" :key="index">
            <!-- <img class="imgks" src="/static/img/loadings.8107247.gif" v-real-img="item" default-img="kkk" alt=""> -->
            <img class="imgks" src="../assets/img/loadings.gif" v-real-img="item" default-img="" alt="">
            <!-- <img class="imgks" src="../assets/img/loadings.gif" v-real-img="item" default-img="https://hxkj.vip/demo/vueImgOnerror/img/logo.16af1ba4.png" alt=""> -->
        </li>
    </ul>
  </div>
</template>

<script>
    export default {
        name: "imgError",
        data() {
            return {
                kkk:require('../assets/img/loadings.gif'),
                imgList: [
                    'https://upload.jianshu.io/users/upload_avatars/7412714/d16e0222-2645-41c7-b4c0-9719b4dbb1f6.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/240/h/240'
                ],//图片列表
                addImgSrc: 'https://upload.jianshu.io/users/upload_avatars/7412714/d16e0222-2645-41c7-b4c0-9719b4dbb1f6.jpg',//待添加的图片地址
            }
        },
        mounted() {

        },
        computed: {},
        methods: {
            addImg() {
                this.imgList.unshift(this.addImgSrc);
            },
            delImg() {
                if (this.imgList.length === 0) return;
                this.imgList.shift();
            }
        }
    }
</script>
<style lang='scss' scoped>
    .add {
        width:100%;
        text-align:center;
        margin:10px 0;
    }

    .add input {
        width:50%;
        border:1px solid main-font-color;
        padding:5px 10px;
        border-radius:5px;
    }

    .add button {
        border:1px solid main-color;
        padding:5px 10px;
        border-radius:5px;
        color:main-color;
        margin:0 10px;
        background:none;
        cursor:pointer;
    }

    .img-list {
        display:flex;
        align-items:center;
        flex-wrap:wrap;
    }

    .img-list li {
        width:150px;
        margin:10px;
    }

    .img-list {
        // >>>img{
        //     width:100%;
        //     text-align:center;
        //     border:3px solid main-color;
        //     padding:5px;
        // }
    }
    .imgks{
        width:100%;
        height:200px;
        text-align:center;
        border:3px solid main-color;
        padding:5px;   
    }
</style>