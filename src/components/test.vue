<template>
    <div id="editorElem" style="text-align:left"></div>
</template>
<script data-main="./main.js" src="//cdn.bootcss.com/require.js/2.3.3/require.js"></script>
<script>
  import E from 'wangeditor'
   let basePicPath = process.env.NODE_ENV == 'development'? '/api' : ''
    export default {
        name: "test",
      data () {
        return {
          editorContent: '',
          editorContents: ''
        }
      },
      methods: {
          value(){
            this.$emit("content",this.editorContent)
            this.$emit("contents",this.editorContents)
          }
      },
      mounted() {
        var editor = new E('#editorElem')
        editor.customConfig.onchange = () => {
          var text = editor.txt.text()
          var html = editor.txt.html()
          this.editorContent = text.substring(0, 200) + '...'
          this.editorContents = html
        }
        editor.customConfig.uploadFileName = 'pic'
        editor.customConfig.uploadImgServer = `/upload`
        editor.customConfig.uploadImgParamsWithUrl = true
        editor.customConfig.uploadImgHooks = {
          customInsert: function (insertImg, result, editor) {
            // 图片上传并返回结果，自定义插入图片的事件（而不是编辑器自动插入图片！！！）
            // insertImg 是插入图片的函数，editor 是编辑器对象，result 是服务器端返回的结果
            console.log(result);
            // 举例：假如上传图片成功后，服务器端返回的是 {url:'....'} 这种格式，即可这样插入图片：
            var url = basePicPath + result.data
            console.log(url);
            insertImg(url)
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
