<template>
  <div class="progess">
    <div class="gg-progress" :style="{height:height + 'px'}">
      <div class="gg-bar">
        <div class="gg-bar-box" :class="aShow?'gg-bar-show':''" :style="{width:probar+'%',backgroundColor:color}"></div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    props: {},
    components: {},
    data() {
      return {
        line: 0,
        height: 10,
        probar: 80,
        aShow: true,
        color: 'blue'
      }
    },
    computed: {},
    created() {
    },
    methods: {},
    filters: {},
    watch: {}
  }
</script>

<style lang="less">
  .progess {
    width: 1200px;
    margin: 40px auto;
    .gg-progress {
      width: 100%;
      border-radius: 4px;
      overflow: hidden;
      background-color: rgb(245, 245, 245);
      .gg-bar {
        height: 100%;
        .gg-bar-box {
          height: 100%;
          border-radius: 4px 0 0 4px;
          &.gg-bar-show {
            transition: width 1s ease;
            animation: line 1s linear;
            @keyframes line {
              from {
                width: 0;
              }
              to {
                width: -100%;
              }
            }
          }
        }
      }
    }
  }
</style>
