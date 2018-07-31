<template>
  <div>
    <div class="conent">
      <div class="container">
        <label id="btn-wrap">
          <input type="file" name="file" accept="image/jpeg,image/png" @change="up" id="file-input">
          <img :src="img" v-if="img">
          <i class="iconfont icon-jiahao" v-if="!img"></i>
        </label>
      </div>
      <div class="item-img">
      </div>
      <div id="xiugai2">
      </div>
    </div>
  </div>
</template>

<script>
  import axios from 'axios'
  export default {
    name: "Sixiang",
    data() {
      return {
        token: '',
        img: "",
      }
    },
    methods: {
      up($event) {
        var file = $event.target.files[0];
        var form = new FormData();
        form.append("file", file);
        form.append("token", this.token);
        axios.post("https://upload-z1.qiniup.com", form, {
          headers: {"Content-Type": "multipart/form-data"}
        }).then(res => {
          this.img = res.data.url;
        })
      },
      getToken() {
        axios.get('http://11.yaojunrong.com/api/client/upload').then(res => {
          this.token = res.data.data;
        })
      },
      change(){

      }
    },
    watch:{
      img(){
        this.$emit('event',this.img )
      }
    },
    created() {
      this.getToken();
    }
  }
</script>

<style scoped>
  .item-img {
    text-align: center;
  }
  #file-input {
    display: none;
  }
  #btn-wrap {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 150px;
    height: 150px;
    border-radius: 4px;
    border: 1px dashed #bbb;
    margin: 10px auto;
  }
  #btn-wrap img {
    z-index: 998;
    height: 150px;
    width: 150px;
  }
  .icon-jiahao {
    font-size: 60px;
    color: #fff;
  }
</style>
