<template>
    <div>
      <Header></Header>
       <div class="box">
         <span>用户名：</span><el-input v-model="name"
                                    placeholder="请输入用户名"
                                    autofocus @blur="handleblur"></el-input>
         <span>邮箱：</span><el-input v-model="email"
                                   placeholder="请输入邮箱"
                                   autofocus></el-input>
         <span>密码：</span><el-input v-model="pwd"
                                   placeholder="请输入密码"
                                   type="password"
                                   autofocus></el-input>
         <button @click="handleresiter">注册</button>
         <p v-show="code == 401">邮箱已存在 <i @click="handleclick" class="iconfont icon-shanchu"></i></p>
         <p v-show="code == 402">邮箱不正确 <i @click="handleclick" class="iconfont icon-shanchu"></i></p>
         <p v-show="code == 400">注册失败  <i @click="handleclick" class="iconfont icon-shanchu"></i></p>
       </div>
    </div>
</template>

<script>
  import cookies from  'js-cookie'
  import Header from "../components/Header"
    export default {
        name: "register",
        components:{
          Header
      },
      data(){
          return{
            name:'',
            email:'',
            pwd:'',
            code:0
          }
      },
      methods:{
        handleresiter(){
          let params = {
            name:this.name,
            email:this.email,
            pwd:this.pwd,
          }
          this.$axios.post("register",params).then(res=>{
            this.code = res.data.code;
            if(res.data.code==200){
              cookies.set('name', res.data.data.name, { expires: 14 });
              cookies.set('email', res.data.data.email, { expires: 14 });
              this.$router.push('/')
            }
          })
        },
        handleclick(){
           this.name = '',
           this.email= '',
           this.pwd = '',
           this.code = 0
        },
        handleblur(){
          if(!this.name.trim()){
            alert('请输入用户名')
          }
        }
      }
    }
</script>
<style>

</style>
<style scoped lang="less">
.box{
  width: 400px;
  margin: 100px auto;
  background-color: #fff;
  height: 260px;
  padding: 40px 20px;
  p{
    width: 350px;
    height: 30px;
    background-color: skyblue;
    color: #fff;
    font-size: 18px;
    float: left;
    padding: 5px 10px;
    margin-top: 20px;
    i{
      float: right;
      font-size: 20px;
    }
  }
}
.box span{
  display: inline-block;
  width: 70px;
}
  button{
    width: 370px;
    height: 40px;
    outline: none;
    border-radius: 5px;
    border: none;
    background-color: rgb(103,198,54);
    color: #fff;
    font-size: 16px;
  }
</style>
