<template>
    <div class="content">
      <scroll :on-refresh="onRefresh" :on-infinite="onInfinite" :isLading="isLading" :reset="reset">
        <ul>
          <li v-for="item in oData" :key="item.id">{{item}}</li>
        </ul>
      </scroll>
    </div>
</template>

<script>
export default {
  name: 'index',
  data () {
    return {
      isLading: 2, // 0:加载完成，1:加载中，2:提示上拉加载
      reset: 0, // 0初始化
      paging: {count: 10, page: 1}, // 请求条数和当前请求页
      // 模拟数据
      getData: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30],
      oData: []
    }
  },
  mounted () {
    this.getFun()
  },
  methods: {
    /* 下拉刷新 */
    onRefresh (done) {
      this.getFun(0, done)
    },
    /* 上拉加载 */
    onInfinite (done) {
      if (this.isLading === 2) {
        this.paging.page++
        this.isLading = 1
        this.getFun(1, done)
      }
    },
    // 数据请求
    /* nums=0:初始化数据 */
    getFun (nums, done) {
      if (nums === 0) {
        this.reset = 0
        this.oData = []
        this.isLading = 2
        this.paging.page = 1
      }
      if (this.isLading !== 0) {
        let pageUp = ((this.paging.page - 1) * this.paging.count)
        let oSend = this.getData.slice(pageUp, pageUp + this.paging.count)
        console.log(oSend)
        if (oSend.length > 0) {
          this.oData = this.oData.concat(oSend)
          this.isLading = 2 // 数据请求完成后请求状态修改
        } else {
          this.isLading = 0 // 数据请求完成后请求状态修改
        }
      }
      /* 请求完成后初始化上拉或下拉 */
      if (done) { done() }
    }
  }
}
</script>

<style scoped>
  .content, ul{
    position: relative;
    overflow: hidden;
  }
  ul li{
    font-size: 20px;
    width: 100%;
    list-style: none;
    line-height: 150px;
    color: red;
    text-align: center;
    background: #eeeeee;
  }
  ul li:nth-child(2n){
    background: #bdbdbd;
  }
</style>
