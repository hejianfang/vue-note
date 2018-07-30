<template>
  <div>
    <Header></Header>
    <div class="wrap">
      <div>
        <h2>标题</h2>
        <input type="text" v-model="title">
      </div>
      <div>
        <h2>内容</h2>
        <test @content="getdata"></test>
      </div>
      <div>
        <span>标签</span><span><input type="text" v-model="classify" style="width: 20%;"></span>
      </div>
      <button @click="handleClick">发布</button>
    </div>
  </div>
</template>

<script>
  import Header from "../components/Header"
  import test from '../components/test'

  export default {
    name: "writes",
    components: {
      Header,test
    },
    data() {
      return {
        title: '',
        conent: '',
        classify: ''
      }
    },
    methods: {
      getdata(editorContent){
        this.conent = editorContent
      },
      handleClick() {
        let parms = {
          title: this.title,
          conent: this.conent,
          classify: this.classify
        }
        this.$axios.post('addnote', parms).then(res => {
          if (res.data.code == 200) {
            alert('发布成功')
            this.title = '',
              this.conent = '',
              this.classify = ''
          }
        })
      }
    }
  }
</script>

<style scoped lang="less">
  .wrap {
    width: 60%;
    background-color: #fff;
    margin: 0 auto;
    padding: 20px;
    input {
      margin-top: 10px;
      width: 96%;
      height: 30px;
      border-radius: 5px;
      outline: none;
      padding-left: 10px;
    }
    textarea {
      width: 100%;
      height: 300px;
      margin-top: 10px;
      border-radius: 5px;
      padding: 10px;
      outline: none;
    }
    span {
      color: rgb(57, 141, 238);
    }
  }
</style>
