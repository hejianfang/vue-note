<template>
  <div>
    <Header></Header>
    <pic @event="accept"></pic>
    <div class="box">
      <el-input placeholder="用户名" v-model="username"></el-input>
      <el-input placeholder="邮箱" v-model="email" :disabled="true"></el-input>
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
            username:'',
            email:'',
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
            name:this.username,
            email:this.email,
            newpwd:this.newpwd,
            pwd:this.pwd,
            avatar:this.avatar
          }
          if(this.newpwd == this.pwd){
            this.$axios.post('userchange',params).then(res=>{
              if(res.data.code == 200){
                cookies.set('name', res.data.data.name, { expires: 14 });
                cookies.set('email', res.data.data.email, { expires: 14 });
                cookies.set('avatar', res.data.data.avatar, { expires: 14 });
              }
            })
          }else{
            alert('密码不一致')
          }
        }
      },
      mounted(){
        let name = cookies.get("name")
        let email = cookies.get("email")
        let avatar = cookies.get("avatar")
        cookies.remove('avatar')
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
  margin: 20px auto;
}
</style>
