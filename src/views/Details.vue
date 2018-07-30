<template>
<div>
  <Header></Header>
  <div class="wrap">
    <div class="wrap-top">
      <h1>{{title}}</h1>
      <p>
        <span>作者：{{name}}</span>  <span>{{update}}</span>
      </p>
    </div>
    <div class="title">
      <p v-html="conent"></p>
    </div>
       <span>评论:</span><input type="text" v-model="pinglun">
        <button @click="submt">提交</button>
    <ul>
      <li v-for="item in arr">
        {{item.name}}:{{item.conent}}
      </li>
    </ul>

  </div>
</div>
</template>

<script>
  import Header from "../components/Header"
    export default {
      components:{
        Header
      },
      data(){
          return{
            name:'',
            update:'',
            conent:'',
            title:'',
            pinglun:'',
            id:'',
            userid:'',
            arr:''
          }
      },
      methods:{
          getdata(){
            let _id = this.$route.query.id;
            this.$axios.get("notedetail",{_id}).then(res=>{
              this.name=res.data.data.name
              this.update=res.data.data.update
              this.conent=res.data.data.conent
              this.title=res.data.data.title
              this.id=res.data.data._id,
                this.userid = res.data.data.id
            })
          },
        submt(){
          let id = this.id;
          let name = this.name
          let conent = this.pinglun
          let userId = this.userid
          if(conent.trim()){
            this.$axios.post("pinglun",{
              id,
              name,
              conent,
              userId
            }).then(res=>{
              console.log(res);
            })
          }else{
            alert('请输入评论')
          }

        },
        getrepley(){
          let id = this.id;
          this.$axios.get('pinglundetial',{
              id
            }).then(res=>{
            console.log(res.data);
            this.arr = res.data.data
          })
        }
      },
      mounted(){
          this.getdata();
      },
      watch:{
        id(){
         this.getrepley();
        }
      }
    }
</script>

<style scoped lang="less">
.wrap{
  width: 56%;
  margin: 20px auto;
 background-color: #fff;
  padding: 10px 20px;
  .wrap-top{
    text-align: center;
    margin-bottom: 10px;
    h1{
      margin-bottom: 5px;
    }
  }
  .title{
    text-indent: 2em;
    line-height: 2em;
    letter-spacing: 1px;
  }
}
</style>
