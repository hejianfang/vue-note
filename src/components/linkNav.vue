<template>
  <div>
    <div class="nav clearfix">
                        <span class="nav-item active">
                            <a to="/" target="_blank">首页</a>
                        </span>
      <span class="nav-item">
                            <a href="/secondHand" target="_blank">二手房</a>
                        </span>
      <span class="nav-item">
                            <a href="newHouseIndex.html" target="_blank">新房</a>
                        </span>
      <span class="nav-item">
                            <a href="rentalList.html" target="_blank">租房</a>
                        </span>
      <span class="nav-item">
                            <a href="secondSchoolHomesList.html" target="_blank">学区房</a>
                        </span>
      <span class="nav-item">
                            <a href="residentialQuartersList.html" target="_blank">小区</a>
                        </span>
      <span class="nav-item">
                            <a href="brokerList.html" target="_blank">经纪人</a>
                        </span>
      <span class="nav-item">
                            <a href="encyclopedias.html" target="_blank">百科</a>
                        </span>
      <span class="nav-item spinner">
                            <a class="toggle" target="_blank">在线委托</a>
                            <div class="spinner-content">
                                <div>
                                    <a href="homeOwer.html" target="_blank">我是业主</a>
                                </div>
                                <div>
                                    <a href="huntHouse.html" target="_blank">帮我找房</a>
                                </div>
                            </div>
                        </span>
      <span class="nav-item">
                            <a href="tool.html" target="_blank">工具</a>
                        </span>
      <span class="nav-item">
                            <a href="special.html" target="_blank">专题</a>
                        </span>
    </div>
  </div>
</template>


<script>
  export default {}
</script>

<style lang="less">
  .nav {
    padding-top: 20px;
    float: right;
    span {
      float: left;
      padding-left: 35px;
    }
    .nav .active {
      color: #c30d23;
    }
    .nav-item:hover > a {
      color: #c30d23;
      border-bottom: 2px solid #c30d23;
    }
    .nav .active > a {
      color: #c30d23;
      border-bottom: 2px solid #c30d23;
    }

    .nav > .nav-item > a {
      display: block;
      padding: 10px 0 20px;
    }
  }
</style>
