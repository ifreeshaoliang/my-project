<template>
  <BaseLayout v-bind:inputIndex="navIndex">
    <template>
      <div class="articleNav">
        <el-card
          class="cardNav"
          shadow="never"
        >
          <el-tabs
            v-model="activeName"
            @tab-click="handleClick"
          >
            <el-tab-pane
              label="为您推荐"
              name="1"
            ></el-tab-pane>
            <el-tab-pane
              label="省钱购物"
              name="2"
            ></el-tab-pane>
            <el-tab-pane
              label="穿搭文化"
              name="3"
            ></el-tab-pane>
            <el-tab-pane
              label="居家好物"
              name="4"
            ></el-tab-pane>
            <el-tab-pane
              label="户外运动"
              name="5"
            ></el-tab-pane>
            <el-tab-pane
              label="美妆"
              name="6"
            ></el-tab-pane>
          </el-tabs>
        </el-card>
      </div>

      <!-- 帖子区 -->
      <div v-if="activeName != '2' && activeName != '3'">
        <div
          class="leftDiv"
          :key="'arti'+index"
          v-for="(art,index) in articles"
        >
          <el-card shadow="never">
            <Article :article="art"></Article>
          </el-card>
        </div>
      </div>

      <div v-if="activeName == '2'">
        <div
          class="leftDiv"
          :key="'arti'+index"
          v-for="(art,index) in articles2"
        >
          <el-card shadow="never">
            <Article :article="art"></Article>
          </el-card>
        </div>
      </div>

      <div v-if="activeName == '3'">
        <div
          class="leftDiv"
          :key="'arti'+index"
          v-for="(art,index) in getArticles"
        >
          <el-card shadow="never">
            <Article :article="art"></Article>
          </el-card>
        </div>
      </div>

      <!-- 右侧推荐商品区 -->
      <div
        id="divFixed"
        class="rightDiv"
      >
        <!-- 写文章按钮 -->
        <el-button
          class="writeButton"
          type="primary"
          plain
          v-on:click="writeArticle"
        >写文章，分享好物</el-button>
        <!-- 空白 -->
        <div class="intervalDiv"></div>
        <!-- 商品栏 -->
        <el-card shadow="never">
          <span>优惠商品</span>
        </el-card>
        <div
          :key="'goods'+index"
          v-for="(goods,index) in goodses"
        >
          <el-card
            class="box-card"
            shadow="never"
          >
            <Goods :goods="goods"></Goods>
          </el-card>
        </div>
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
import articleAPI from "../../api/articleAPI";
import store from "../../store";
import Article from "../../components/Article";
import Goods from "../../components/Goods";
import { Message } from "element-ui";
import storage from '../../utils/storage';

export default {
  name: "",
  components: {
    BaseLayout,
    Editor,
    Article,
    Goods,
  },
  data() {
    return {
      userInfo: "",
      shareState: store.state,
      navIndex: "1",
      activeName: "1",
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
          title: "拯救瘦子，显壮穿搭教程！！",
          author: "杭州彦祖",
          description:
            "为了能让肩膀和背看起来宽一些，我们能做的是选择材质偏硬的衣服，或者是落肩袖的衣服，让我们的肩线往外移一些。",
          coverImage: "",
          likes: 100,
          content:
            "今天就来跟大家分享8条生活中实用色系不要超过3个！大家常说的是颜色不超过3个，但实际上指的是全身的色系不超过3个。",
        },
        {
          title: "拯救瘦子，男生穿搭教程！！",
          author: "杭州吴彦祖",
          description:
            "为了能让肩膀和背看起来材质偏硬的衣服，或者是落肩袖的衣服，让我们的肩线往外移一些。",
          coverImage: "",
          likes: 100,
          content:
            "今天就来跟大家分享8条生活中实用的身色系不要超过3个！大家常说的是颜色不超过3个，但实际上指的是全身的色系不超过3个。",
        },
      ],
      articles2: [
        {
          title: "三只松鼠的零食怎么买最划算？满300-200到底是不是套路？",
          author: "小鹏",
          description:
            "如果买的少，只想买两、三种，或者（在大额满减专区购买）价格在199元以下，推荐正价购买，一件也是免运费的，同一零食两件还有立减，比较划算。",
          coverImage: "",
          likes: 100,
          content:
            "今天就来跟大家分享8条生活中实用的穿搭技巧。1、全身色系不要超过3个！大家常说的是颜色不超过3个，但实际上指的是全身的色系不超过3个。2、追求百搭好穿选同色系和基础色系搭配；想亮眼一些选择撞色、彩色系搭配！基础色系搭配可以选择黑白灰、米色、藏青色、咖色，绝对不出错！",
        },
        {
          title: "谁才值得买？200元内无线游戏鼠标体验【轻电科技】",
          author: "Cried",
          description:
            "200元以内到底有没有可以好好使用的无线游戏鼠标，看完这个视频或许你就有自己的见解了！",
          coverImage: "",
          likes: 100,
          content:
            "今天就来跟大家分享8条生活中实用的穿搭技巧。1、全身色系不要超过3个！大家常说的是颜色不超过3个，但实际上指的是全身的色系不超过3个。",
        },
        {
          title: "2021吸尘器选购指南，附10款高性价比推荐",
          author: "杭州吴彦祖",
          description:
            "这里提醒一下大家，大部分吸尘器官宣的续航时间在30-60分钟左右，甚至有70、80这种非常强的，这个里面的坑是大部分最长续航指的都是用小吸头、节能模式",
          coverImage: "",
          likes: 100,
          content:
            "今天就来跟大家分享8条生活中实用的穿搭技巧。1、全身色系不要超过3个！大家常说的是颜色不超过3个，但实际上指的是全身的色系不超过3个。",
        },
        {
          title: "拯救瘦子，显壮穿搭教程！！",
          author: "杭州彦祖",
          description:
            "为了能让肩膀和背看起来宽一些，我们能做的是选择材质偏硬的衣服，或者是落肩袖的衣服，让我们的肩线往外移一些。",
          coverImage: "",
          likes: 100,
          content:
            "今天就来跟大家分享8条生活中实用色系不要超过3个！大家常说的是颜色不超过3个，但实际上指的是全身的色系不超过3个。",
        },
        {
          title: "拯救瘦子，男生穿搭教程！！",
          author: "杭州吴彦祖",
          description:
            "为了能让肩膀和背看起来材质偏硬的衣服，或者是落肩袖的衣服，让我们的肩线往外移一些。",
          coverImage: "",
          likes: 100,
          content:
            "今天就来跟大家分享8条生活中实用的身色系不要超过3个！大家常说的是颜色不超过3个，但实际上指的是全身的色系不超过3个。",
        },
      ],
      getArticles: [
        {
          title: "8条实用小技巧，教你穿的更好看！",
          author: "小鹏",
          description: "日系风男生穿搭推荐！！",
          coverImage: "",
          likes: 100,
          content:
            "今天就来跟大家分享8条生活中实用的穿搭技巧。1、全身色系不要超过3个！大家常说的是颜色不超过3个，但实际上指的是全身的色系不超过3个。2、追求百搭好穿选同色系和基础色系搭配；想亮眼一些选择撞色、彩色系搭配！基础色系搭配可以选择黑白灰、米色、藏青色、咖色，绝对不出错！",
        },
      ],
      goodses: [
        {
          goodsName: "漫步者Lollipods真无线蓝牙耳机",
          goodsPrice: "￥228.00",
          url: "https://item.jd.com/100009212474.html",
          imgUrl:
            "https://img.alicdn.com/bao/uploaded/i3/2433119387/O1CN01WyPFhs2JDIVrVv07M_!!0-item_pic.jpg",
        },
        {
          goodsName: "漫步者TWS1真无线蓝牙耳机单双耳入耳式降噪超长待机续航5",
          goodsPrice: "￥149.00",
          url: "https://item.jd.com/100009212474.html",
          imgUrl:
            "https://img.alicdn.com/bao/uploaded/i1/3487767124/O1CN01iLThbC22UqEkwjES5_!!3487767124.jpg",
        },
        {
          goodsName: "华为Type-C耳机原装正品typec接口正版p40",
          goodsPrice: "￥89.00",
          url: "https://item.jd.com/100009212474.html",
          imgUrl:
            "https://img.alicdn.com/bao/uploaded/i2/765474852/O1CN015z7e3u1liGNi1Plj1_!!765474852.jpg",
        },
      ],
    };
  },
  methods: {
    //调用API

    //路由
    writeArticle() {
      if (store.state.isAuthenticated == true) {
        this.$router.push("/writeArticle");
      } else {
        Message({
          message: "请先登录，谢谢",
          type: "warning",
        });
      }
    },
    //其他方法
    handleClick() {
      if (this.activeName == 3) {
        // articleAPI.getArticleByUserID(storage.get("userID")).then((res) => {
        //   this.getArticles = res.data;
        //   alert( JSON.stringify(res.data))
        // });
      }
    },
  },
};
</script>

<style scoped>
.articleNav {
  width: 68%;
  height: 59px;
  font-size: 20;
}
.cardNav {
  height: 100%;
}
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
