<template>
  <BaseLayout v-bind:inputIndex="navIndex">
    <template>
      <div>
        <el-row>
          <el-col :span="6">
            <!-- <el-card shadow="never"> -->
            <div class="img">
              <img
                src="../../assets/user-img/img1.png"
                width="100px"
                height="100px"
              />
            </div>
            <div class="info">
              <table style="width: 200px">
                <tr>
                  <td>{{ user.userName }}</td>
                </tr>
                <tr>
                  <td><br /></td>
                </tr>
                <tr>
                  <td>{{ user.description }}</td>
                </tr>
                <tr>
                  <td><br /></td>
                </tr>
              </table>
            </div>
            <el-button class="changeInfo" type="primary" plain>编辑资料</el-button>
            
            <!-- </el-card> -->
          </el-col>

          <el-col :span="16">
            <el-card shadow="never">
              <el-tabs
                v-model="activeName"
                @tab-click="handleClick"
              >
                <el-tab-pane
                  label="浏览过帖子"
                  name="1"
                >

                  <div
                    class="leftDiv"
                    :key="'userArti' + index"
                    v-for="(art, index) in articles"
                  >
                    <Article :article="art"></Article>
                  </div>

                </el-tab-pane>
                <el-tab-pane
                  label="已发帖子"
                  name="2"
                >
                  帖子
                </el-tab-pane>
                <el-tab-pane
                  label="评论"
                  name="3"
                >评论</el-tab-pane>
              </el-tabs>
            </el-card>
          </el-col>
          <el-col :span="2">
            <el-button
              type="primary"
              plain
              class="logout"
              @click="logout"
            >注销登录</el-button>
          </el-col>
        </el-row>
      </div>
      <div class="fatherDiv">
        <div></div>
      </div>
    </template>
  </BaseLayout>
</template>

<script>
import BaseLayout from "../../layout/base-layout";
import store from "../../store";
import Article from "../../components/Article";
import storage from "../../utils/storage";

export default {
  name: "",
  components: {
    BaseLayout,
    Article,
  },
  data() {
    return {
      navIndex: "4",
      activeName: "1",
      user: {
        userName: storage.get("userName"),
        description: "要大笑，要做梦，要与众不同。",
        sex: "男",
      },
      articles: [
        {
          title: "8条实用小技巧，教你穿的更好看！",
          author: "小鹏",
          description: "日系风男生穿搭推荐！！",
          coverImage: "",
          likes: 100,
          content:
            "今天就来跟大家分享8条生活中实用的穿搭技巧。1、全身色系不要超过3个！大家常说的是颜色不超过3个，但实际上指的是全身的色系不超过3个。2、追求百搭好穿选同色系和基础色系搭配；想亮眼一些选择撞色、彩色系搭配！基础色系搭配可以选择黑白灰、米色、藏青色、咖色，绝对不出错！",
        },
        {
          title: "国货男装买什么？8家均价不超过200元品牌分享！",
          author: "Cried",
          description:
            "今天就简洁粗暴的给大家推荐10个国货服饰品牌，这10个品牌涵盖各种风格，你想要的全都有，颜值高，价格基本不超过200块钱，剁手不心疼！",
          coverImage: "",
          likes: 100,
          content:
            "今天就来跟大家分享8条生活中实用的穿搭技巧。1、全身色系不要超过3个！大家常说的是颜色不超过3个，但实际上指的是全身的色系不超过3个。",
        },
        {
          title: "拯救瘦子，男生显壮穿搭教程！！",
          author: "杭州吴彦祖",
          description:
            "为了能让肩膀和背看起来宽一些，我们能做的是选择材质偏硬的衣服，或者是落肩袖的衣服，让我们的肩线往外移一些。",
          coverImage: "",
          likes: 100,
          content:
            "今天就来跟大家分享8条生活中实用的穿搭技巧。1、全身色系不要超过3个！大家常说的是颜色不超过3个，但实际上指的是全身的色系不超过3个。",
        },
        {
          title: "穿搭教程！！",
          author: "杭州彦祖",
          description:
            "为了能让肩膀和背看起来宽一些，我们能做的是选择材质偏硬的衣服，或者是落肩袖的衣服，让我们的肩线往外移一些。",
          coverImage: "",
          likes: 100,
          content:
            "今天就来跟大家分享8条生活中实用色系不要超过3个！大家常说的是颜色不超过3个，但实际上指的是全身的色系不超过3个。",
        },
        {
          title: "生活中实用的身色系教程",
          author: "杭州吴彦祖",
          description:
            "为了能让肩膀和背看起来材质偏硬的衣服，或者是落肩袖的衣服，让我们的肩线往外移一些。",
          coverImage: "",
          likes: 100,
          content:
            "今天就来跟大家分享8条生活中实用的身色系不要超过3个！大家常说的是颜色不超过3个，但实际上指的是全身的色系不超过3个。",
        },
      ],
    };
  },
  methods: {
    logout() {
      store.setAuthenticationFalse();
      this.$router.push("/");
    },
  },
};
</script>

<style scoped>
.logout {
  float: right;
}
.blank {
  height: 2px;
}
.img {
  float: left;
  width: 50%;
}
.info {
  float: left;
}
.changeInfo {
  float: left;
  width: 80%;
}
</style>