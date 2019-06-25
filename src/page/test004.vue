<template>
  <div class='requestk'>
    <swiper :options="swiperOption" ref="mySwiper">
      <swiper-slide>
        <router-link tag="div" class="ksk" :to="{path:'/home/test004/loadinga'}">加载一号(推荐)</router-link>
      </swiper-slide>
      <swiper-slide>
        <router-link tag="div" class="ksk" :to="{path:'/home/test004/loadingb'}">加载二号</router-link>
      </swiper-slide>
    </swiper>
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
  .swiper-container{
      height:7%;
      >.swiper-slide{
          height:100%;
      }
  }
  .ksk{
    box-sizing: border-box;
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