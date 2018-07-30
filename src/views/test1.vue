<template>
  <div class="conentrr">
    <label id="btn-wrap">
      <input type="file" name="file" accept="image/jpeg,image/png" @change="up" id="file-input">
      <img :src="img" v-if="img">
      <i class="iconfont icon-jiahao"></i>
    </label>
  </div>
</template>

<script>
  import axios from 'axios'
  export default {
    name: "tupianup",
    data() {
      return {
        token: '',
        img: ""
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
           console.log(res)
          this.img = res.data.url;
          this.$emit('childsay',this.img);
        })
      },
      getToken() {
        this.$axios.get("upload").then(res => {
          // console.log(res);
          this.token = res.data.data;
        })
      }
    },
    created() {
      this.getToken();
    }
  }
</script>

<style>
  #file-input{

  }
  #btn-wrap {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 40px;
    height: 40px;
    border-radius: 4px;
    margin: 10px;
  }
  #btn-wrap img{
    z-index: 998;
    height: 40px;
    width: 40px;
  }
  .icon-jiahao{
    font-size: 25px;
    color: #000;
  }
</style>
