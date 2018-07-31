<template>
  <div>
    <Header></Header>
    <div class="conent">
      <div class="fll" style="overflow: hidden;width: 440px">
        <swiper :options="swiperOption">
          <swiper-slide v-for="(slide, index) in arr" :key="index">
            <img :src="slide.pic">
            <p>{{slide.title}}</p>
          </swiper-slide>
        </swiper>
      </div>
      <div class="flr">
        <div class="box">
          <div v-show="!name">
            <el-input placeholder="邮箱" v-model="email"></el-input>
            <el-input placeholder="密码" v-model="pwd"></el-input>
            <el-button type="primary" @click="handleLogin">登录</el-button>
            <el-button plain @click="handleClick">注册</el-button>
          </div>
          <div v-show="name">
              <ul>
                <img :src="avatar" >
                <li> 用户名：{{name}}</li>
                <li>邮箱：{{email}}</li>
                <li>欢迎{{name}}使用</li>
                <button @click="handleExit">退出登录</button>
                <button @click="handlemessage">修改信息</button>
              </ul>
          </div>
        </div>
      </div>
    </div>
    <div class="index-foot">
      <div> <h3>相关笔记</h3></div>
      <div class="wrap" v-for="item in newarr">
       <div class="clearflex">
         <div class="fll">
           <img :src="item.pic">
         </div>
         <div class="flr">
           <div class="top">{{item.name}} | <span style="cursor: pointer" @click="handlejump(item._id)">{{item.title}}</span></div>
           <p> 浏览：{{item.browse}} &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;回复：{{item.repley}}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
             分类：{{item.classify}}</p>
         </div>
       </div>
        <div class="footer">
          <p>
            <span v-html="item.conent"></span>
          </p>
        </div>

      </div>

    </div>
  </div>
</template>

<script>
  import Header from "../components/Header"
  import cookies from  'js-cookie'

  export default {
    name: "index",
    components: {
      Header
    },
    data() {
      return {
        swiperOption: {
          autoplay: true,
          setWrapperSize: true,
        },
        arr: [],
        name:'',
        email: '',
        pwd: "",
        newarr:'',
        avatar:''
      }
    },
    methods: {
      getdata() {
        this.$axios.get("swiper").then(res => {
          this.arr = res.data.data
        })
      },
      handlejump(val){
        this.$router.push({path: '/details',query:{id:val}})
      },
      handlemessage(){
       this.$router.push('/userschange')
      },
      gatallnote(){
        this.$axios.get("allnoteList").then(res=>{
          this.newarr = res.data.data
        })
      },
      getmsg(){
        this.$axios.get('getmsg').then(res=>{
          if(res.data.code == 401){
            this.show();
          }
        })
      },
      handleClick() {
        this.$router.push("/register")
      },
      handleExit(){
        console.log(1);
        this.$axios.get("exitlogin").then(res=>{
            let name =  this.name
            let email = this.email
            let avatar = this.avatar
            cookies.remove('name')
            cookies.remove('email')
            cookies.remove('avatar')
            this.show();
        })
      },
      handleLogin() {
        if (!((this.email.indexOf(' ') != -1) && (this.pwd.indexOf(' ') != -1))) {
          let params = {
            email: this.email,
            pwd: this.pwd
          }
          this.$axios.post("login", params).then(res => {
            if (res.data.code == 200) {
              cookies.set('name', res.data.data.name, { expires: 14 });
              cookies.set('email', res.data.data.email, { expires: 14 });
              cookies.set('avatar', res.data.data.avatar, { expires: 14 });
              this.show();
            }
          })
        } else {
          alert('请输入邮箱或密码')
        }
      },
      show(){
        let name = cookies.get("name")
        let email = cookies.get("email")
        let avatar = cookies.get("avatar")
        if(name&&email){
          this.name = name;
          this.email = email
          this.avatar = avatar
        }else{
          this.name = '';
          this.email = ''
          this.avatar = ''
        }
      }
    },
    mounted() {
      this.getdata();
      this.show();
      // this.getmsg();
      this.gatallnote();
    }
  }
</script>
<style>

</style>
<style scoped lang="less">
  .conent {
    width: 60%;
    margin: 20px auto;
    height: 220px;
    .fll {
      float: left;
      position: relative;
      p {
        position: absolute;
        bottom: 0;
        left: 0;
        right: 0;
        margin: auto;
        display: inline-block;
        color: #fff;
        height: 40px;
        line-height: 40px;
        padding-left: 10px;
        background-color: rgba(0, 0, 0, .4);
      }
      img {
        width: 440px;
        height: 200px;
      }
    }
    .flr {
      float: right;
      .box {
        width: 300px;
        background-color: #fff;
        padding: 10px;
        ul{
          img{
            height: 60px;
            width: 60px;
            border-radius: 50%;
            margin-left:90px ;
          }
          li{
            list-style: none;
            margin: 10px 20px;
          }
          button{
            width: 300px;
            height: 40px;
            outline: none;
            border-radius: 5px;
            border: none;
            background-color: rgb(103,198,54);
            color: #fff;
            font-size: 16px;
            margin-bottom: 10px;
          }
        }
      }
    }
  }

  .index-foot {
    width: 57%;
    background-color: #fff;
    margin:0 auto;
    padding: 10px 20px;
    .wrap{
      margin: 20px 0;
      .footer{
         text-indent: 2em;
        margin-top: 10px;
        p{
            overflow : hidden;
            text-overflow: ellipsis;
            display: -webkit-box;
            -webkit-line-clamp: 3;
            -webkit-box-orient: vertical;
        }
      }
      .clearflex{
        overflow: hidden;
      }
      .fll{
        float: left;
        img{
          width: 60px;
          height: 60px;
        }
      }
      .flr{
        float: left;
        margin-left: 20px;
        padding: 5px 0;
        .top{
          margin-bottom: 10px;
        }
      }
    }
  }
</style>
