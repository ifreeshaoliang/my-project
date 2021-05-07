<template>
  <div>
    <div class="userInfoDiv">
      <img
        :src="comment.userImg"
        style="width: 25px; height: 25px"
      />
      <span>{{comment.userName}}</span>
    </div>

    <div class="blank"></div>

    <div class="contentDiv">
      <span>{{comment.content}}</span>
    </div>

    <div class="blank"></div>

    <div class="buttonDiv">
      <el-link icon="el-icon-caret-top">{{comment.likes}}</el-link>
      <el-link icon="el-icon-chat-round">回复</el-link>
    </div>
  </div>

</template>

<script>
export default {
  name: "",
  props: {
    comment: {
      userName: "",
      userImg: "",
      content: "",
      likes:"",
    },
  },
  data() {
    return {
    };
  },
};
</script>

<style scoped>
.userInfoDiv {
  width: 100%;
  color: darkgray;
}
.contentDiv {
  width: 90%;
  margin-left: 6%;
}
.buttonDiv {
  width: 90%;
    margin-left: 6%;
}
.blank {
  height: 10px;
}
</style>
