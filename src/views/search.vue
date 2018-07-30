<template>
<div>
  <Header></Header>
  <div class="wrap">
    <div class="wrapspan"><input type="text" v-model="title"><span style="cursor: pointer" @click="handlesearch">搜索</span></div>
    <div class="index-foot">
      <div> <h3>相关笔记</h3></div>
      <div class="wrap" v-for="item in newarr">
        <div class="clearflex">
          <div class="fll">
            <img src="../assets/img/20180426151433.jpg" >
          </div>
          <div class="flr">
            <div class="top">{{item.name}} | <span style="cursor: pointer" @click="handlejump(item._id)">{{item.title}}</span></div>
            <p> 浏览：{{item.browse}}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;回复：{{item.repley}}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
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
</div>
</template>

<script>
  import Header from "../components/Header"
      export default {
        name: "search",
      components:{
        Header
      },
        data(){
          return{
            newarr:[],
            title:''
          }
        },
        methods:{
          gatallnote(){
            this.$axios.get("allnoteList").then(res=>{
              this.newarr = res.data.data
            })
          },
          handlejump(val){
            this.$router.push({path: '/details',query:{id:val}})
          },
          handlesearch(){
            let title = this.title
            this.$axios.get("finddetails",{
              title
            }).then(res=>{
              if(res.data.code ==200){
                this.newarr = res.data.data
              }
              this.title = ''
            })
          }
        },
        mounted(){
          this.gatallnote();
        }
    }
</script>

<style scoped lang="less">
.wrap{
  width: 60%;
  margin: 20px auto;
  .wrapspan{
    input{
      height: 30px;
      width: 90%;
      border-radius: 5px;
      outline: none;
      padding-left: 10px;
    }
    span{
      display: inline-block;
      width: 5%;
      color: #fff;
      height: 24px;
      padding: 5px 10px;
      border-radius: 5px;
      background-color: rgb(57,141,238);
      margin-bottom: 20px;
      text-align: center;
    }
  }

}
.index-foot {
  width: 95%;
  background-color: #fff;
  margin:0 auto;
  padding: 10px 20px;
  .wrap{
    margin: 20px 0;
    width: 100%;
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
