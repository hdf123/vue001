<template>
    <div class="loading" v-show="loading">
        <i class="iconfont">&#xe65d;</i>
    </div>
</template>
<script>
export default {
    name: 'loading',
    data() {
        return {
            loading: false
        }
    },
    created() {
        var that = this;
        this.bus.$on('loading', function(data) {
            that.loading = !!data;
        })
    }
}
</script>
<style scoped lang="scss">
.loading {
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    position: fixed;
    left: 0;
    top: 0;
    z-index: 999;
    width: 100%;
    height: 100%;
    color: #fff;
    background-color: rgba(0, 0, 0, 0.6);
    p {
        padding: .15rem .15rem .2rem;
        color: #fff;
        font-size: .16rem;
    }
    i{
        font-size:1.5rem;
        border-radius:50%;
        background: rgba(99, 0, 0, 0.1);
        -webkit-animation: circle 1s linear infinite;
    }
    @-webkit-keyframes circle{
    0%{ transform: rotate(0deg);}
    100%{ transform: rotate(360deg);}
    }
}
</style>