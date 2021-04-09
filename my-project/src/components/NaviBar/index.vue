<template>
  <el-menu
    :default-active="activeIndex"
    class="el-menu"
    mode="horizontal"
    active-text-color="#88C2FF"
  >
    <el-menu-item class="logo">
      <img src="../../assets/logo.jpg" width="120px" height="55px" />
    </el-menu-item>

    <el-menu-item index="1" class="login">
      <i class="el-icon-user-solid"></i>
      <!-- <el-link :underline="false">登录/注册</el-link> -->
      <el-button type="text" @click="dialogFormVisible = true"
        >登录/注册</el-button>
    </el-menu-item>

    <el-menu-item index="2" class="parity">
      <i class="el-icon-s-shop"></i>
      <el-link :underline="false">优惠商家</el-link>
    </el-menu-item>

    <el-menu-item index="3" class="parity">
      <i class="el-icon-s-marketing"></i>
      <el-link :underline="false">比价</el-link>
    </el-menu-item>

    <el-menu-item class="input">
      <el-input
        size="small"
        placeholder="搜索感兴趣的分享、用户"
        v-model="input"
        clearable
        @keydown.enter.native="select(input)"
      >
        <el-button
          slot="append"
          type="primary"
          icon="el-icon-search"
          @click="select(input)"
        ></el-button>
      </el-input>
    </el-menu-item>

    <!-- 登录/注册的会话框 -->
    <el-dialog
      style="text-align: center"
      :visible.sync="dialogFormVisible"
      width=450px
      center=true
    >
      <el-tabs style="height: 300px;">
        <el-tab-pane style=" font-size:24px" label="登 录">
          <Login></Login>
        </el-tab-pane>
        <el-tab-pane label="注 册">
          <Register></Register>
        </el-tab-pane>
      </el-tabs>

    </el-dialog>

  </el-menu>
</template>


<script>
import Register from "../Register"
import Login from "../Login"
export default {
  data() {
    return {
      activeIndex: "",
      input: "",
      dialogFormVisible: false,
      formLogin : {
        account : "",
        password : ""
      },
    };
  },
  components: {
    Register,
    Login
  },
  methods: {
    select(message) {
      if (message == "") {
        alert("is null");
      } else alert(message);
    },
  },
};
</script>

<style scoped>
.el-menu-item {
  float: right;
  size: 18px;
}
.logo {
  float: left;
  width: 30px;
}
.input {
  width: 500px;
}
</style>