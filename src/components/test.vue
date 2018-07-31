<template>
    <div id="editorElem" style="text-align:left"></div>
</template>
<script data-main="./main.js" src="//cdn.bootcss.com/require.js/2.3.3/require.js"></script>
<script>
  import E from 'wangeditor'
    export default {
        name: "test",
      data () {
        return {
          editorContent: ''
        }
      },
      methods: {
          value(){
            this.$emit("content",this.editorContent)
          }
      },
      mounted() {
        var editor = new E('#editorElem')
        editor.customConfig.onchange = () => {
          var html = editor.txt.text()
          this.editorContent = html
        }
        editor.customConfig.uploadFileName = 'pic'
        editor.customConfig.uploadImgServer = `/api/upload`
        editor.customConfig.uploadImgParamsWithUrl = true
        editor.customConfig.uploadImgHooks = {
          customInsert: function (insertImg, result, editor) {
            // 图片上传并返回结果，自定义插入图片的事件（而不是编辑器自动插入图片！！！）
            // insertImg 是插入图片的函数，editor 是编辑器对象，result 是服务器端返回的结果
            console.log(result);
            // 举例：假如上传图片成功后，服务器端返回的是 {url:'....'} 这种格式，即可这样插入图片：
            var url = "http://localhost:3000/"+result.data.path
            console.log(url);
            insertImg(url)

            // result 必须是一个 JSON 格式字符串！！！否则报错
          }
        }
        editor.create()
      },
      watch:{
        editorContent(){
          this.value();
        }
      }
    }
</script>

<style>
#editorElem{
  width: 98%;
  box-sizing: border-box;
}
</style>
