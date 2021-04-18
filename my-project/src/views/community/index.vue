<template>
  <BaseLayout v-bind:inputIndex="navIndex">
    <template>
      <div class="leftDiv">
        <el-card class="cardLeft" shadow="never">
          <el-button v-on:click="getUserList">获得用户列表</el-button>
          {{ userInfo }}

          <el-button v-on:click="addToken">添加token</el-button>
          <el-button v-on:click="delToken">删除token</el-button>
          <el-button v-on:click="changeAuthentication">改变登录状态</el-button>
          {{ shareState.token }}
          <el-collapse :key="i" v-for="i in 10">
            <el-collapse-item>
              <template slot="title">
                一致性 Consistency<i class="header-icon el-icon-info"></i>
                一致性 Consistency
                一致性 Consistency
                <img src="../../assets/user-img/img1.png" width="35px" height="35px" />
              </template>
              <div>
                与现实生活一致：与现实生活的流程、逻辑保持一致，遵循用户习惯的语言和概念；
              </div>
              <div>
                在界面中一致：所有的元素和结构需保持一致，比如：设计样式、图标和文本、元素的位置等。
              </div>
            </el-collapse-item>
          </el-collapse>
        </el-card>
      </div>
      <div class="rightDiv">
        <el-button
          class="writeButton"
          type="primary"
          plain
          v-on:click="writeArticle"
          >写文章，分享好物</el-button
        >
        <div class="intervalDiv"></div>
        <el-card class="box-card" shadow="never">
          <div slot="header">
            <span>优惠商品</span>
          </div>
          <p>sdfsadf</p>
        </el-card>
      </div>
    </template>
  </BaseLayout>
</template>
</BaseLayout>

</template>

<script>
import BaseLayout from "../../layout/base-layout";
import Editor from "../../components/Editor";
import userApi from "../../api/userAPI";
import store from "../../store";

export default {
  name: "",
  components: {
    BaseLayout,
    Editor,
  },
  data() {
    return {
      userInfo: "",
      shareState: store.state,
      navIndex: "1",
      activeName: "1",
    };
  },
  methods: {
    getUserList() {
      userApi
        .getUsersInfo()
        .then((resp) => (this.userInfo = resp.data))
        .catch(console.error());
    },
    addToken() {
      store.setToken("alen");
    },
    delToken() {
      store.delToken("alen");
    },
    changeAuthentication() {
      store.changeAuthentication();
    },
    writeArticle() {
      this.$router.push("/writeArticle");
    },
  },
};
</script>

<style scoped>
.leftDiv {
  float: left;
  width: 68%;
}
.rightDiv {
  float: right;
  width: 30%;
}
.writeButton {
  width: 100%;
}
.intervalDiv {
  height: 10px;
}
</style>
