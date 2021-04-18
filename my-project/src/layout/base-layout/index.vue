<template>
  <div class="container">
    <el-container>
      <!-- header头部 -->
      <el-header>
        <NavBar v-bind:activeIndex="inputIndex"></NavBar>
      </el-header>
      <!-- 主体 -->
      <el-main v-bind:style="{minHeight: Height + 'px'}">
        <slot></slot>
      </el-main>
      <!-- footer页脚 -->
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
  components: {
    NavBar,
    Footer,
  },
  props: {
    inputIndex: {
       type: String,
       default: "1",
    }
  },
  data() {
    return {
      minHeight:0,
      Height: 0,
    };
  },
  mounted(){
    //动态设置内容高度 让footer始终居底   header+footer的高度是128
    this.Height = document.documentElement.clientHeight - 128;  
　　//监听浏览器窗口变化　
    window.onresize = ()=> {this.Height = document.documentElement.clientHeight -100}
  }
};
</script>

<style>
.el-header {
  margin-left: 12%;
  width: 76%;
}
.el-main {
  margin-left: 12%;
  width: 76%;
  height: 100%;
}
.el-footer {
  height: 200px;
  background-color: #f7fbfd;
  flex: 0;
}
</style>
