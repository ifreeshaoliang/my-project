<template>
  <BaseLayout v-bind:inputIndex="navIndex">
    <template>
      <div class="leftDiv" :key="i" v-for="i in 20">
        <el-card class="cardLeft" shadow="never">
          <Article :article="article"></Article>
        </el-card>
        <el-card class="cardLeft" shadow="never">
          <Article :article="article"></Article>
        </el-card>
      </div>
      <div id="divFixed" class="rightDiv">
        <el-button
          class="writeButton"
          type="primary"
          plain
          v-on:click="writeArticle"
          >写文章，分享好物</el-button
        >
        <div class="intervalDiv"></div>
        <el-card class="box-card" shadow="never">
          <div slot="header">
            <span>优惠商品</span>
          </div>
          <p>sdfsadf</p>
        </el-card>
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
import Article from "../../components/Article";

export default {
  name: "",
  components: {
    BaseLayout,
    Editor,
    Article,
  },
  data() {
    return {
      userInfo: "",
      shareState: store.state,
      navIndex: "1",
      activeName: "1",
      article: {
        title: "8条实用小技巧，教你穿的更好看！",
        author: "小鹏",
        description: "日系风男生穿搭推荐！！",
        coverImage: "",
        likes: 100,
        content:
          "今天就来跟大家分享8条生活中实用的穿搭技巧。1、全身色系不要超过3个！大家常说的是颜色不超过3个，但实际上指的是全身的色系不超过3个。",
      },
    };
  },
  methods: {
    //调用API
    getUserList() {
      userApi
        .getUsersInfo()
        .then((resp) => (this.userInfo = resp.data))
        .catch(console.error());
    },
    //路由
    writeArticle() {
      this.$router.push("/writeArticle");
    },
    //其他方法
    handleScroll() {
      alert("111");
      // let scrollTop =
      //   window.pageYOffset ||
      //   document.documentElement.scrollTop ||
      //   document.body.scrollTop; // 滚动条偏移量
      //   alert('scrollTop');
      // let offsetTop = document.querySelector("#divFixed").offsetTop; // 要滚动到顶部吸附的元素的偏移量
      // this.isFixed = scrollTop > offsetTop ? true :  false; // 如果滚动到顶部了，this.isFixed就为true
    },
  },
  mounted() {
    window.addEventListener("scroll", this.handleScroll);
  },
};
</script>

<style scoped>
.leftDiv {
  float: left;
  width: 68%;
}
.rightDiv {
  float: right;
  width: 22%;
  top: 80px;
  position: fixed;
  right: 14%;
}
.writeButton {
  width: 100%;
}
.intervalDiv {
  height: 10px;
}
</style>
