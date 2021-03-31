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
      <el-link :underline="false">登录/注册</el-link>
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
  </el-menu>
</template>


<script>
export default {
  data() {
    return {
      activeIndex: "",
      input: "",
    };
  },
  methods: {
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
    },
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