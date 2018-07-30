<template>
    <div id="editorElem" style="text-align:left"></div>
</template>

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
        editor.customConfig.onchange = (html) => {
          this.editorContent = html
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
