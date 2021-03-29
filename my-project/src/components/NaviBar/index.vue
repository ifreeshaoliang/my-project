<template>
  <el-menu :default-active="activeIndex" class="el-menu" mode="horizontal">
    <el-menu-item index="1" class="input">
      <el-input
        size="small"
        placeholder="搜索感兴趣的分享、用户"
        v-model="input"
        clearable
      >
        <el-button
          slot="append"
          type="primary"
          icon="el-icon-search"
          v-on="select"
        ></el-button>
      </el-input>
    </el-menu-item>
    <el-menu-item index="2">比价网</el-menu-item>
    <el-menu-item index="3">登录/注册</el-menu-item>
  </el-menu>
</template>


<script>
export default {
  data() {
    return {
      activeIndex: "3",
      activeIndex2: "3",
      input: "",
    };
  },
  methods: {
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
    },
  },
};
</script>

<style scoped>
.input {
  width: 500px;
  float: left;
}
</style>