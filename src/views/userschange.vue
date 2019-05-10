<template>
  <div>
    <Header></Header>
    <pic @event="accept"></pic>
    <div class="box">
      <el-input placeholder="密码" v-model="pwd" type="password"></el-input>
      <el-input placeholder="确认密码" v-model="newpwd" type="password"></el-input>
      <el-button type="primary" @click="handleChange">确认</el-button>
    </div>
  </div>
</template>

<script>
  import cookies from  'js-cookie'
  import Header from "../components/Header"
  import pic from "../components/pic"
    export default {
        name: "userschange",
      components:{
        Header,pic
      },
        data(){
          return{
            pwd:'',
            newpwd:'',
            avatar:''
          }
      },
      methods:{
        accept(img){
          this.avatar = img
        },
        handleChange(){
          let params ={
            newpwd:this.newpwd,
            pwd:this.pwd,
            avatar:this.avatar
          }
          if(this.newpwd == this.pwd){
            this.$axios.post('userchange',params).then(res=>{
              if(res.data.code == 200){
                this.$router.push('/')
              }
            })
          }else{
            alert('密码不一致')
          }
        },
        show(){
          let name =  this.name
          let email = this.email
          let avatar = this.avatar
          cookies.remove('name')
          cookies.remove('email')
          cookies.remove('avatar')
        }
      },
    mounted(){
          this.show();
    }
    }
</script>

<style scoped>
.box{
  width: 300px;
  margin: 20px auto;
}
</style>
