<template>
  <div class='requestk'>
    <swiper :options="swiperOption" ref="mySwiper">
      <swiper-slide>
        <router-link tag="div" class="ksk" :to="{path:'/home/test002/joke'}">笑话大全</router-link>
      </swiper-slide>
      <swiper-slide>
        <router-link tag="div" class="ksk" :to="{path:'/home/test002/constellation'}">星座测试</router-link>
      </swiper-slide>
    </swiper>




    <!-- <div class="box">
      <router-link tag="div" :to="{path:'/home/test002/joke'}">笑话大全</router-link>
      <router-link tag="div" :to="{path:'/home/test002/constellation'}">星座测试</router-link>
    </div> -->
    <router-view class="boxks"></router-view>

  </div>
</template>

<script>
  import { swiper, swiperSlide } from 'vue-awesome-swiper'
  export default {
    name:'',
    props:[''],
    data () {
      return {
        swiperOption: {
          autoplay: 3000,
          slidesPerView : 2
        }
      };
    },

    components: {
      swiper,
      swiperSlide
    },

    computed: {},

    beforeMount() {},

    mounted() {},

    methods: {},

    watch: {}

  }

</script>
<style lang='scss' scoped>
  // .box{
  //   display: flex;
  //   height:7%;
  //   >div{
  //     width:100%;
  //     height:100%;
  //     display: flex;
  //     align-items: center;
  //     justify-content: center;
  //     border:1px solid #d6c8c8;
  //   }
  // }
  .swiper-container{
      height:7%;
      >.swiper-slide{
          height:100%;
      }
  }
  .ksk{
    width:100%;
    height:100%;
    display: flex;
    align-items: center;
    justify-content: center;
    border:1px solid #d6c8c8;
  }
  .router-link-active{
    color:rgba(175, 52, 52, 0.8);
  }
  .boxks{
    width:100%;
    height:93%;
    overflow: hidden;
    position: relative;
  }
</style>