<template>
  <BaseLayout>
    <template>
      <div class="main">
        
        <div class="editor">
          <div>
            <el-upload
              class="upload-demo"
              action="https://jsonplaceholder.typicode.com/posts/"
              :on-preview="handlePreview"
              :on-remove="handleRemove"
              :file-list="fileList"
              list-type="picture"
            >
              <el-button size="small" type="primary">点击上传封面</el-button>
              <div slot="tip" class="el-upload__tip"></div>
            </el-upload>
          </div>
          
          <div>
            <el-input v-model="input" placeholder="请输入标题"></el-input>
          </div>
          <div class="blank"></div>
          <Editor ref="editor-component"></Editor>
        </div>
        <div class="rightAside">
          <!-- 写文章按钮 -->
          <el-button
            class="submitButton"
            type="primary"
            plain
            v-on:click="writeArticle"
            >保存并提交</el-button
          >
          <!-- 空白 -->
          <div class="blank"></div>
          <!-- 商品栏 -->
          <el-card shadow="never">
            <span>添加标签</span>
          </el-card>
          <el-card shadow="never">
            <el-tag
              v-for="tag in tags"
              :key="tag.name"
              closable
              :type="tag.type"
            >
              {{ tag.name }}
            </el-tag>
          </el-card>
        </div>
      </div>
    </template>
  </BaseLayout>
</template>

</template>

<script>
import BaseLayout from "../../layout/base-layout";
import Editor from "../../components/Editor";

export default {
  name: "",
  components: {
    BaseLayout,
    Editor,
  },
  data() {
    return {
      context: "123123",
      input: "",
      tags: [
          { name: '穿搭', type: '' },
          { name: '生活', type: 'success' },
          { name: '购物', type: 'info' },
          { name: '时尚', type: 'warning' },
          { name: '女生', type: 'danger' }
        ],
    };
  },
  methods: {
    saveHtml(content) {
      this.context = content;
    },
  },
};
</script>

<style scoped>
.main {
  display: flex;
}
.editor {
  float: left;
  width: 68%;
}
.rightAside {
  float: right;
  width: 22%;
  top: 80px;
  position: fixed;
  right: 14%;
}
.submitButton {
  width: 100%;
}
.el-upload {
  width: 300px;
}
.blank {
  height: 20px;
}
</style>
