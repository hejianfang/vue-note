<template>
  <div>
    <Header></Header>
    <div class="wrap">
      <div>
        <h2>标题</h2>
        <input type="text" v-model="title">
      </div>
      <div class="pic">
        <pic @imge="getimg">
        </pic>
        <button @click = "getswiper">生成轮播图</button>
      </div>
      <div>
        <h2>内容</h2>
        <test @content="getdata" @contents="getdatas"></test>
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
  import pic from '../components/pic'

  export default {
    name: "writes",
    components: {
      Header,test,pic
    },
    data() {
      return {
        title: '',
        conent: '',
        conents: '',
        classify: '',
        pic:''
      }
    },
    methods: {
      getdata(pam){
        this.conent = pam
      },
      getdatas(pam1){
        this.conents = pam1
      },
      getimg(val){
        this.pic = val
      },
      getswiper(){
        let params = {
          title : this.title,
          pic:this.pic,
          content:this.conent,
        }
        this.$axios.post('swipers',params).then(res=>{
          if (res.data.code == 200) {
            alert('生成成功')
          }
        })
      },
      handleClick() {
        let parms = {
          title: this.title,
          conent: this.conent,
          conents:this.conents,
          classify: this.classify
        }
        this.$axios.post('addnote', parms).then(res => {
          if (res.data.code == 200) {
            alert('发布成功')
            this.$router.push('/')
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
    .pic{
      button{
        width: 370px;
        height: 40px;
        outline: none;
        border-radius: 5px;
        border: none;
        background-color: rgb(103,198,54);
        color: #fff;
        font-size: 16px;
        margin-left: 230px;
      }
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
  .wrap button{
    width: 70px;
    height: 40px;
    outline: none;
    border-radius: 5px;
    border: none;
    background-color: rgb(103,198,54);
    color: #fff;
    font-size: 16px;
  }
</style>
