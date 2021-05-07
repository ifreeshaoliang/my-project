<template>
  <div>
    <!-- 点赞按钮 -->
    <el-button
      type="primary"
      plain
      icon="el-icon-caret-top"
      size=small
    >赞同</el-button>
    <!-- 点踩按钮 -->
    <el-button
      plain
      icon="el-icon-caret-bottom"
      size=small
    >
    </el-button>
    <!-- 评论按钮 -->
    <el-link
      icon="el-icon-chat-round"
      @click="centerDialogVisible = true"
    >评论</el-link>
    <!-- 分享按钮 -->
    <el-link icon="el-icon-share">分享</el-link>

    <!-- 评论对话框 -->
    <div>
      <!-- 对话框标题 -->
      <el-dialog
        title="评论"
        :visible.sync="centerDialogVisible"
        width="40%"
      >
        <!-- 正文 -->
        <div
          :key="'sdf'+index"
          v-for="(comment, index) in comments"
        >
          <CommentItem :comment="comment"></CommentItem>
        </div>

        <!-- 可以输入的留言区 -->
        <el-input v-model="input" size=small placeholder="发表评论"></el-input>
        <el-button type="primary" plain size=small>发布</el-button>

      </el-dialog>
    </div>

  </div>
</template>

<script>
import CommentItem from "../../components/Comment/item";
export default {
  name: "",
  components: {
    CommentItem,
  },
  data() {
    return {
      centerDialogVisible: false,
      input:"",
      comments: [
        {
          userName: "猫猫快跑呀",
          userImg: "http://ci.xiaohongshu.com/ae740c2f-3b25-342d-8d2e-b14aec3feed4?imageView2/2/w/540/format/jpg",
          content: "真的！很赞！辛苦了！",
          likes:243,
        },
        {
          userName: "可莉bb",
          userImg: "https://i.pinimg.com/originals/ce/10/81/ce10818cef2696f7445bd0673c51d1ba.png",
          content: "我觉得一般 都是很常见的风格啊 清新 休闲 小复古 盐系。而且除了知道微胖博主，别的都是只能瘦子穿出来好看。很多颜色和款型穿起来也会有点老气。如果作为普通路人穿搭，还是不错的。如果作为让人眼前一亮宝藏搭配，真的算不上。",
          likes:23,
        },
        
        {
          userName: "小王同学",
          userImg: "https://pic4.zhimg.com/v2-0859cccf0de9325b57a9d1713cf7d5fe_1440w.jpg?source=172ae18b",
          content: "第一个小姐姐的衣服求店名[可怜][可怜][可怜]",
          likes:130,
        },
      ],
    };
  },
};
</script>

<style scoped>
.el-input {
  width: 84%;
}
</style>
