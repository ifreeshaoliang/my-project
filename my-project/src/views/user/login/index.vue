<template>
  <div>
    <!--flex弹性盒子模型，justify-content：主抽 -->
    <div style="display: flex; justify-content: center; margin-top: 150px">
      <el-card style="width: 400px">
        <div slot="header" class="clearfix">
          <span style="display: flex">登录</span>
        </div>
        <el-table-column>
          <tr>
            <td>用户名</td>
            <td>
              <el-input
                v-model="user.username"
                placeholder="请输入用户名"
              ></el-input>
            </td>
          </tr>
          <tr>
            <td>密码</td>
            <td>
              <!-- <el-input type="password" v-model="user.password" placeholder="请输入密码" @keydown.enter.native="doLogin"></el-input> -->
              <!-- @keydown.enter.native="doLogin"当按下enter键的时候也会执行doLogin方法-->
              <el-input
                placeholder="请输入密码"
                v-model="user.password"
                show-password
                @keydown.enter.native="doLogin"
              ></el-input>
            </td>
          </tr>
          <tr>
            <!-- 占两行-->
            <td colspan="2" :gutter="100">
              <!-- 点击事件的两种不同的写法v-on:click和 @click-->
              <!--<el-button style="width: 300px" type="primary" v-on:click="doLogin">登录</el-button>-->
              <el-button style="width: 90px" type="primary" @click="doLogin"
                >登录</el-button
              >
              <el-button style="width: 90px" type="primary" @click="doRegister"
                >注册</el-button
              >
            </td>
            <el-row :gutter="20">
              <el-col :span="6"
                ><div class="grid-content bg-purple"></div
              ></el-col>
              <el-col :span="6" :offset="6"
                ><div class="grid-content bg-purple"></div
              ></el-col>
            </el-row>
          </tr>
        </el-table-column>
      </el-card>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      user: {
        username: "zhangsan",
        password: "123",
      },
    };
  },
  methods: {
    doLogin() {
      alert(JSON.stringify(this.user));
    },
    doRegister() {
      alert(JSON.stringify(this.user));
    },
  },
};
</script>

<style scoped>
</style>