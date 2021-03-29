<template>
  <div class="container">
    <el-container>
      <el-header>
        <slot name="header"></slot>
      </el-header>
      <el-main>
        <slot></slot>
      </el-main>
      <el-footer>
        <slot name="footer"></slot>
      </el-footer>
    </el-container>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
};
</script>

<style scoped>
.el-main {
  height: 800px;
}

</style>
