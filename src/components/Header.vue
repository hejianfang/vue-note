<template>
  <div class="index-header">
    <div class="warp">
      <div class="fll">
        <h1>
          云笔记
        </h1>
      </div>
      <div class="flr">
        <i class="iconfont icon-sousu" @click="search"></i>
        <button @click="handleclick">写笔记</button>
      </div>
    </div>
  </div>
</template>

<script>
    export default {
        name: "Header",
      methods:{
        handleclick(){
          this.$router.push('/writes')
        },
        search(){
          this.$router.push('/search')
        }
      }
    }
</script>

<style scoped lang="less">
  .index-header{
    width: 100%;
    height: 60px;
    background-color: rgb(57,141,238);
    .warp{
      width: 60%;
      margin: 0 auto;
      line-height: 60px;
      .fll{
        float: left;
        h1{
          color: #fff;
        }
      }
      .flr{
        float:right;
        i{
          font-size: 22px;
          color: #fff;
          margin-right: 5px;
          cursor: pointer;
        }
        button{
          width: 100px;
          text-align: center;
          padding: 5px 0;
          vertical-align: center;
          background-color: #fff;
          outline: none;
          border: none;
          border-radius: 5px;
        }
      }
    }
  }

</style>
