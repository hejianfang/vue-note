<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
*{
  margin: 0;
  padding: 0;
}
  html{
    /*background-color: rgb(245,245,245);*/
  }
.el-input{
  display: inline-block;
  width: 300px;
  margin-bottom: 10px;
}
.el-input__inner{
  height: 40px;
}
.el-button{
  width: 300px;
  margin-bottom:5px ;
}
.el-button+.el-button{
  margin-left: 0;
}
  ul li{
    list-style: none;
  }
</style>
