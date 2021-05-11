<template>
  <BaseLayout>
    <template>
      <div class="main">

        <div class="editor">
          <!-- <div>
            <el-upload
              class="upload-demo"
              action="https://jsonplaceholder.typicode.com/posts/"
              :on-preview="handlePreview"
              :on-remove="handleRemove"
              :file-list="fileList"
              list-type="picture"
            >
              <el-button
                size="small"
                type="primary"
              >点击上传封面</el-button>
              <div
                slot="tip"
                class="el-upload__tip"
              ></div>
            </el-upload>
          </div> -->

          <div>
            <p style="color: #409EFF">帖子标题：</p>
            <el-input
              v-model="article.articleTitle"
              placeholder="请输入标题"
            ></el-input>
          </div>
          <div>
            <p style="color: #909399">帖子描述：</p>
            <el-input
              v-model="article.articleDescription"
              placeholder="请输入帖子描述"
            ></el-input>
          </div>
          <div class="blank"></div>

          <Editor @parentFunction="saveHtml"></Editor>

        </div>

        <div class="rightAside">
          <!-- 写文章按钮 -->
          <el-button
            class="submitButton"
            type="primary"
            plain
            v-on:click="submitArticle"
          >
            保存并提交
          </el-button>

          <!-- 空白 -->
          <div class="blank"></div>

          <!-- 商品栏 -->
          <el-card shadow="never">
            <span>添加标签</span>
          </el-card>
          <el-card shadow="never">

            <el-tag
              :key="tag"
              v-for="tag in dynamicTags"
              closable
              :disable-transitions="false"
              @close="handleClose(tag)"
            >
              {{tag}}
            </el-tag>
            <el-input
              class="input-new-tag"
              v-if="inputVisible"
              v-model="inputValue"
              ref="saveTagInput"
              size="small"
              @keyup.enter.native="handleInputConfirm"
              @blur="handleInputConfirm"
            >
            </el-input>
            <el-button
              v-else
              class="button-new-tag"
              size="small"
              @click="showInput"
            >+ New Tag</el-button>

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
import { Message } from 'element-ui';
import storage from "../../utils/storage";
import ArticleAPI from "../../api/articleAPI";

export default {
  name: "",
  components: {
    BaseLayout,
    Editor,
  },
  data() {
    return {
      article: {
        userID:storage.get("userID"),
        articleTitle:"",
        articleDescription:"",
        articleContext:"",
        type:0,
      },   
      input: "",
      dynamicTags: ['穿搭', '生活'],
        inputVisible: false,
        inputValue: ''
    };
  },
  methods: {
    saveHtml(content) {
      this.article.articleContext = content;
    },
    //点击提交文章后
    submitArticle() {
      if (this.article.articleTitle == "") {
        Message({
          message:"帖子标题不能为空",
          type:"error"
        })
      }
      else if (this.article.articleDescription == "") {
        Message({
          message:"帖子描述不能为空",
          type:"error"
        })
      }
      else if (this.article.articleContext == "") {
        Message({
          message:"帖子内容不能为空",
          type:"error"
        })
      }
      else {
        ArticleAPI.submitArticle(this.article).then(res=>{
          if (res.data.code == 200) {
            Message({
              message:"添加帖子成功",
              type:"success"
            })
            this.$router.push("/user");
          }
          else {
            Message({
              message:"添加帖子失败",
              type:"error"
            })
          }
        })
      }
      
    },
     handleClose(tag) {
        this.dynamicTags.splice(this.dynamicTags.indexOf(tag), 1);
      },

      showInput() {
        this.inputVisible = true;
        this.$nextTick(_ => {
          this.$refs.saveTagInput.$refs.input.focus();
        });
      },

      handleInputConfirm() {
        let inputValue = this.inputValue;
        if (inputValue) {
          this.dynamicTags.push(inputValue);
        }
        this.inputVisible = false;
        this.inputValue = '';
      }
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

.el-tag + .el-tag {
    margin-left: 10px;
  }
  .button-new-tag {
    margin-left: 10px;
    height: 32px;
    line-height: 30px;
    padding-top: 0;
    padding-bottom: 0;
  }
  .input-new-tag {
    width: 90px;
    margin-left: 10px;
    vertical-align: bottom;
  }
</style>
