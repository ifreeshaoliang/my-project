<template>
  <!-- 登录的表单 -->
  <el-form
    label-position="left"
    label-width="50px"
    :model="user"
  >

    <el-form-item label="账户">
      <el-input
        placeholder="账户"
        v-model="user.userAccount"
        maxlength="10"
      ></el-input>
    </el-form-item>

    <el-form-item label="密码">
      <el-input
        placeholder="密码"
        v-model="user.userPassword"
        maxlength="20"
        show-password
      ></el-input>
    </el-form-item>

    <div style="text-align: right">
      <el-button
        size=small
        type="text"
      >忘记密码</el-button>
    </div>

    <el-form-item></el-form-item>
    <div style="text-align: center">
      <el-button
        size=small
        type="primary"
        style="width:250px"
        @click="login"
      >登 录</el-button>
    </div>

  </el-form>
</template>

<script>
import userAPI from '../../api/userAPI';
export default {
  name: "",
  data() {
    return {
      user: {
        userAccount: "",
        userPassword: "",
      },
    };
  },
  methods: {
      login(user) {
          userAPI.login(user).then(res=>{
              console(res)
          })
          alert("sdfa")
      },
  },
};
</script>

<style scoped>
</style>

