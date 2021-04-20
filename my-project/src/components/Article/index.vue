<template>
  <div>
    <div class="header">
      <div class="author" style="font-size: 14px">
        <el-link type="info"> 作者：{{ article.author }} </el-link>
      </div>
      <div class="blank"></div>
      <div class="title">
        <b>{{ article.title }}</b>
      </div>
    </div>
    <div class="description"> {{ article.description }} </div>
    <div>
      <el-button type="text" v-if="visible == false" v-on:click="changeVisible"
        >展开</el-button
      >
    </div>
    <div class="blank"></div>
    <!-- 内容 -->
    <div class="hideDiv" v-if="visible == true">
      <div class="ql-container ql-snow">
        <div class="ql-editor" v-html="article.content"></div>
      </div>
    </div>

    <!-- 收起 -->
    <div class="blank">
      <el-button type="text" v-if="visible == true" v-on:click="changeVisible"
        >收起</el-button
      >
    </div>
  </div>
</template>

<script>
export default {
  props: {
    article: {
      title: "男生穿搭",
      author: "小鹏",
      description: "日系风男生穿搭推荐！！",
      coverImage: "",
      likes: 100,
      content:
        "今天就来跟大家分享8条生活中实用的穿搭技巧。1、全身色系不要超过3个！大家常说的是颜色不超过3个，但实际上指的是全身的色系不超过3个。",
    },
  },
  name: "",
  data() {
    return {
      visible: false,
    };
  },
  methods: {
    changeVisible() {
      if (this.visible == true) this.visible = false;
      else this.visible = true;
    },
  },
};
</script>

<style scoped>
.description {
    font-size: 14px;
    color: rgb(143, 143, 143);
}
.el-button {
  float: right;
}
.blank {
  height: 10px;
}
.ql-container {
  outline: none;
  border: none;
}
.ql-snow {
  outline: none;
  border: none;
}
.ql-editor {
    padding: 0px 0px;
}

</style>
