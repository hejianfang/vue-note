<template>
  <div class="group_cont" :style="{width:groupcont/75+'rem'}">
    <div class="group_bar">
      <div class="group_bar_box" :style="{width:probar+'%'}">
        <div :class="imgshow?'progress group_line':'progress group_line progress_fail'"></div>
      </div>
      <i>{{text1}} <span>{{text2}}</span></i>
    </div>
    <div class="bar_cricle_box" v-show='iconshow' :style="{width:probar+'%'}">
      <img v-if='imgshow' src="./image/sign.png">
      <img v-else src="./image/sign2.png">
    </div>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        line: 0,
        probar: '50', //进度条百分比
        iconshow: false, //进度条图标是否显示
        groupcont: '6000', //进度条宽
        text1: '123', //进度条左边文字
        text2: '444', //进度条右边文字
        imgshow: false //控制进度条颜色
      }
    },
    props: {

    }

  }
</script>
<style scoped>
  @keyframes line {
    from {
      width: 0;
    }

    to {
      width: 100%;
    }
  }

  .group_cont {
    margin-top: 50px;
    padding: 20px 0;
    position: relative;
    width: 100%;
  }

  /*g过度条图标*/
  .bar_cricle_box {
    position: absolute;
    left: 0;
    top: 0;
    width: 0;
    height: 48px;
  }

  @keyframes cricle {
    from {
      left: 0;
    }

    to {
      left: 100%;
    }
  }

  .bar_cricle_box img {
    width: 18px;
    height: 48px;
    position: absolute;
    left: 100%;
    margin-left: -9px;
    top: -23px;
    transition: 1s all linear;
    animation: cricle 1s linear;
  }

  .group_bar {
    background-color: #cfcccc;
    /*width: 240px;*/
    height: 24px;
    line-height: 24px;
    color: #fff;
    font-size: 20px;
    margin-bottom: 18px;
    border-radius: 20px;
    overflow: hidden;
    position: relative;
  }

  .group_line {
    animation: line 1s linear;
    background-image: url(./image/redLine.png);
    background-size: contain;
  }

  .progress {
    height: 24px;
    background-color: #e90000;

  }

  .group_bar_box {
    position: absolute;
    left: 0;
    top: 0;
    width: 0;
    height: 24px;
  }

  .group_bar>i {
    width: 100%;
    position: absolute;
    left: 12px;
    top: 1px;
  }

  .group_bar>i span {
    float: right;
    position: absolute;
    right: 20px;

  }

  .group_cont {
    padding: 20px 0;
    position: relative;
    width: 100%;
  }

  /*g过度条图标*/
  .bar_cricle_box {
    position: absolute;
    left: 0;
    top: 0;
    width: 0;
    height: 48px;
  }

  @keyframes cricle {
    from {
      left: 0;
    }

    to {
      left: 100%;
    }
  }

  .bar_cricle_box img {
    width: 18px;
    height: 48px;
    position: absolute;
    left: 100%;
    margin-left: -9px;
    top: -4px;
    transition: 1s all linear;
    animation: cricle 1s linear;
  }


  /**/
  .progress_fail {
    height: 25px;
    background-color: #b3b3b3;
    position: relative;
    background-image: url(./image/greyLine.png);
    background-size: contain;
  }
</style>
