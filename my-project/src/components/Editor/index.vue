<template>
  <div class="edit_container">
    <!-- 新增时输入 -->
    <quill-editor
      v-model="content"
      ref="myQuillEditor"
      :options="editorOption"
      @blur="onEditorBlur($event)"
      @focus="onEditorFocus($event)"
      @change="onEditorChange($event)"
    >
    </quill-editor>

    <!-- <button v-on:click="saveHtml">保存</button> -->
    <!-- 从数据库读取展示 -->
    <!-- <div class="ql-container ql-snow">
      <div class="ql-editor">
        <div v-html="content"></div>
      </div>
    </div> -->
  </div>
</template>

<script>
import { quillEditor } from "vue-quill-editor"; //调用编辑器
import "quill/dist/quill.core.css";
import "quill/dist/quill.snow.css";
import "quill/dist/quill.bubble.css";
import storage from "../../utils/storage";
export default {
  components: {
    quillEditor,
  },
  data() {
    return {
      content: "",
      str: "",
      editorOption: {
        placeholder: "请编写帖子内容",
        modules: {
          toolbar: {
            container: [
              [{ size: ["small", false, "large"] }],
              [{ color: [] }, { background: [] }],
              [{ font: [] }],
              [{ align: [] }],
              ["bold", "italic"],
              [{ list: "ordered" }, { list: "bullet" }],
              ["link", "image"],
            ],
          },
        },
      },
    };
  },
  methods: {
    onEditorReady(editor) {
      this.$emit('parentFunction', this.content)
      // 准备编辑器
    },
    onEditorBlur() {
      this.$emit('parentFunction', this.content)
    }, // 失去焦点事件
    onEditorFocus() {
    }, // 获得焦点事件
    onEditorChange() {
      this.$emit('parentFunction', this.content)
    }, // 内容改变事件
    // 转码
    escapeStringHTML(str) {
      str = str.replace(/&lt;/g, "<");
      str = str.replace(/&gt;/g, ">");
      return str;
    },
    saveHtml() {
      alert(this.content);
      storage.set("article", this.content);
    },
  },
  computed: {
    editor() {
      return this.$refs.myQuillEditor.quill;
    },
  },
  mounted() {
    let content = ""; // 请求后台返回的内容字符串
    this.str = this.escapeStringHTML(content);
  },
};
</script>

<style scoped>
.ql-container {
  outline: none;
  border: none;
  width: 100%;
}
.ql-snow {
  outline: none;
  border: none;
  width: 100%;
}
</style>
