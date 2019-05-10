<template>
  <div>
    <Header></Header>
    <div class="wrap">
      <div class="wrap-top">
        <h1>{{title}}</h1>
        <p>
          <span>作者：{{name}}</span> <span>{{update}}</span>
        </p>
      </div>
      <div class="title">
        <p v-html="conents"></p>
      </div>
      <ul>
        <li v-for="item in arr">
          <span>{{item.name}}</span>
          <span>:</span>
          <span>{{item.conent}}</span>
        </li>
      </ul>
      <span>评论:</span><input type="text" v-model="pinglun">
      <button @click="submt">提交</button>
    </div>
  </div>
</template>

<script>
  import Header from "../components/Header"
  import moment from 'moment';

  export default {
    components: {
      Header
    },
    data() {
      return {
        name: '',
        update: '',
        conents: '',
        title: '',
        pinglun: '',
        id: '',
        userid: '',
        arr: '',
        newname: ''
      }
    },
    methods: {
      getdata() {
        let _id = this.$route.query.id;
        this.$axios.get("notedetail", {_id}).then(res => {
          this.name = res.data.data.name
          this.newname = res.data.users.name
          this.conents = res.data.data.conents
          this.title = res.data.data.title
          this.id = res.data.data._id,
            this.userid = res.data.data.id
          this.update = moment(res.data.data.update).format('YYYY-MM-DD hh:mm:ss');
        })
      },
      submt() {
        let id = this.id;
        let name = this.newname
        let conent = this.pinglun
        let userId = this.userid
        if (conent.trim()) {
          this.$axios.post("pinglun", {
            id,
            name,
            conent,
            userId
          }).then(res => {
            this.getrepley();
          })
        } else {
          alert('请输入评论')
        }

      },
      getrepley() {
        let id = this.id;
        this.$axios.get('pinglundetial', {
          id
        }).then(res => {
          console.log(res.data);
          this.arr = res.data.data
        })
      }
    },
    mounted() {
      this.getdata();
    },
    watch: {
      id() {
        this.getrepley();
      }
    }
  }
</script>

<style scoped lang="less">
  .wrap {
    width: 56%;
    margin: 20px auto;
    background-color: #fff;
    padding: 10px 20px;
    .wrap-top {
      text-align: center;
      margin-bottom: 10px;
      h1 {
        margin-bottom: 5px;
      }
    }
    .title {
      text-indent: 2em;
      line-height: 2em;
      letter-spacing: 1px;
    }
    ul {
      li {
        margin: 10px 0;
        padding: 5px 10px;
        background-color: #eee;
        border-radius: 5px;
      }
      li span:first-child {
        border-radius: 5px;
        padding: 3px 5px;
      }
      list span:last-child {
        margin-left: 10px;

      }
    }
  }
</style>
