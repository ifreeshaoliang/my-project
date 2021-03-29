<template>
  <div class="container">
    <el-container>
      <!-- 左留白 -->
      <el-aside></el-aside>
      <el-container>
        <!-- header -->
        <el-header>
          <slot name="header"></slot>
        </el-header>
        <!-- main主体 -->
        <el-main>
          <slot></slot>
        </el-main>
        <!-- footer -->
        <el-footer>
          <slot name="footer"></slot>
        </el-footer>
      </el-container>
      <!-- 右留白 -->
      <el-aside></el-aside>
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

<style>
.el-aside {
  background-color: #dadee2;
    color: #333;
    text-align: center;
    line-height: 200px;
}
.el-main {
  height: 800px;
}
.el-footer {
  height: 100px;
  background-color: rgb(70, 66, 66);
}


</style>
