<template>
  <div>
    <Header></Header>
    <div class="box">
      <el-input placeholder="用户名" v-model="username"></el-input>
      <el-input placeholder="邮箱" v-model="email"></el-input>
      <el-input placeholder="密码" v-model="pwd" type="password"></el-input>
      <el-input placeholder="确认密码" v-model="newpwd" type="password"></el-input>
      <el-button type="primary" @click="handleChange">确认</el-button>
    </div>
  </div>
</template>

<script>
  import cookies from  'js-cookie'
  import Header from "../components/Header"
    export default {
        name: "userschange",
      components:{
        Header
      },
        data(){
          return{
            username:'',
            email:'',
            pwd:'',
            newpwd:''
          }
      },
      methods:{
        handleChange(){
          console.log(1);
          let params ={
            name:this.username,
            email:this.email,
            newpwd:this.newpwd,
            pwd:this.pwd,
          }
          if(this.newpwd == this.pwd){
            this.$axios.post('userchange',params).then(res=>{
              console.log(res);
            })
          }else{
            alert('密码不一致')
          }

        }
      },
      mounted(){
        let name = cookies.get("name")
        let email = cookies.get("email")
        if(name&&email){
          this.username = name;
          this.email = email;
        }
      }
    }
</script>

<style scoped>
.box{
  width: 300px;
  margin: 100px auto;
}
</style>
