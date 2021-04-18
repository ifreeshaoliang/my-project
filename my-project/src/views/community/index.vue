<template>
  <BaseLayout v-bind:inputIndex="navIndex">
    <template>
      <div>
        <el-button v-on:click="getUserList">获得用户列表</el-button>
        {{ userInfo }}

        <el-button v-on:click="addToken">添加token</el-button>
        <el-button v-on:click="delToken">删除token</el-button>
        <el-button v-on:click="changeAuthentication">改变登录状态</el-button>
        {{ shareState.token}}

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
      navIndex:"1"
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
      store.setToken('alen');
    },
    delToken() {
      store.delToken('alen');
    },
    changeAuthentication(){
      store.changeAuthentication();
    },
  },
};
</script>

<style scoped>
</style>
