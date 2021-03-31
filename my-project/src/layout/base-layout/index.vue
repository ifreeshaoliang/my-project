<template>
  <div class="container">
    <el-container>
      <!-- header -->
      <el-header :style="{ width, height }">
        <NavBar></NavBar>
      </el-header>
      <el-container>
        <!-- 左留白 -->
        <el-aside :style="{ width }"></el-aside>
        <!-- main主体 -->
        <el-main>
          <slot></slot>
        </el-main>
        <!-- 右留白 -->
        <el-aside :style="{ width }"></el-aside>
      </el-container>
      <!-- footer -->
      <el-footer>
        <Footer></Footer>
      </el-footer>
    </el-container>
  </div>
</template>

<script>
import NavBar from "../../components/NaviBar";
import Footer from "../../components/Footer";
export default {
  data() {
    return {};
  },
  components: {
    NavBar,
    Footer,
  },
};
</script>

<style>
.el-header {
  margin-left: 12%;
  width: 76%;
}
.el-aside {
  width: 12%;
}
.el-main {
  height: 800px;
}
.el-footer {
  height: 200px;
  background-color: #f7fbfd;
}
</style>
