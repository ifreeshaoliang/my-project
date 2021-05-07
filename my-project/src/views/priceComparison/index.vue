<template>
  <BaseLayout v-bind:inputIndex="navIndex">
    <template>
      <div class="left">
        <el-card shadow="never">
          <span>比价搜索：</span>
          <el-input
            size="small"
            placeholder="搜索比价商品名称、品牌"
            v-model="input"
            clearable
            suffix-icon="el-icon-search"
            @change="aler"
            @keydown.enter.native="aler(input)"
          >
          </el-input>
        </el-card>
        
        <div class="blank"></div>

        <el-card shadow="never">
          <div slot="header" class="clearfix">
            <span>优惠券</span>
          </div>
          <img src="../../assets/img/1.jpg" style="width:300px;"/>
          <img src="../../assets/img/1.jpg" style="width:300px;"/>
        </el-card>

        <div class="blank"></div>

        <div :key="'goodslr' + index" v-for="(goods, index) in results">
          <el-card class="box-card" shadow="never">
            <Goods :goods="goods"></Goods>
          </el-card>
        </div>
        
      </div>
      <div class="right">
        <el-card shadow="never">
          <span>优惠商品</span>
        </el-card>
        <div :key="'goodsSeller' + index" v-for="(goods, index) in goodses">
          <el-card class="box-card" shadow="never">
            <Goods :goods="goods"></Goods>
          </el-card>
        </div>
      </div>
    </template>
  </BaseLayout>
</template>

<script>
import BaseLayout from "../../layout/base-layout";
import Goods from "../../components/Goods";

export default {
  name: "",
  components: {
    BaseLayout,
    Goods,
  },
  data() {
    return {
      navIndex: "2",
      input: "",
      goodses: [
        {
          goodsName:
            "漫步者Lollipods真无线蓝牙耳机",
          goodsPrice: "￥120.90",
          imgUrl:
            "https://img.alicdn.com/bao/uploaded/i3/2433119387/O1CN01WyPFhs2JDIVrVv07M_!!0-item_pic.jpg",
        },
        {
          goodsName: "漫步者TWS1真无线蓝牙耳机单双耳入耳式降噪超长待机续航5",
          goodsPrice: "￥149.00",
          imgUrl:
            "https://img.alicdn.com/bao/uploaded/i1/3487767124/O1CN01iLThbC22UqEkwjES5_!!3487767124.jpg",
        },
        {
          goodsName: "华为Type-C耳机原装正品typec接口正版p40",
          goodsPrice: "￥89.00",
          imgUrl:
            "https://img.alicdn.com/bao/uploaded/i2/765474852/O1CN015z7e3u1liGNi1Plj1_!!765474852.jpg",
        },
      ],
      results: [
        {
          goodsName: "洁丽雅毛巾2条 纯棉洗脸家用成人男女不掉毛柔软全棉吸水加厚面巾",
          goodsPrice: "￥29.90",
          imgUrl:
            "https://img.alicdn.com/bao/uploaded/i1/494858290/O1CN01cLpxn62B6s1SRYgbL_!!0-item_pic.jpg",
        },
        {
          goodsName: "毛巾纯棉男洗脸帕洗澡家用运动全棉柔软小吸水不掉毛定制情侣面巾",
          goodsPrice: "￥18.80",
          imgUrl:
            "https://img.alicdn.com/bao/uploaded/i1/2206457623423/O1CN01K52ss11b9mMVt3yfl_!!0-item_pic.jpg",
        },
        {
          goodsName: "婴儿纱布浴巾初生纯棉超柔吸水大毛巾幼儿洗澡巾宝宝新生儿童卡通",
          goodsPrice: "￥25.50",
          imgUrl:
            "https://img.alicdn.com/bao/uploaded/i1/3189555945/O1CN01CgmFJX1tmrFSzEpjb_!!0-item_pic.jpg",
        },
        {
          goodsName: "纯棉男洗脸帕洗澡家用运动全棉柔软小吸水不掉毛定制面巾",
          goodsPrice: "￥16.80",
          imgUrl:
            "https://img.alicdn.com/bao/uploaded/i1/2206457623423/O1CN01K52ss11b9mMVt3yfl_!!0-item_pic.jpg",
        },
      ],
    };
  },
  methods: {
    aler() {
      alert("safs");
    },
  },
};
</script>

<style scoped>
.el-input {
  width: 60%;
}
.left {
  float: left;
  width: 68%;
}
.right {
  float: right;
  width: 22%;
  top: 80px;
  position: fixed;
  right: 14%;
}
.blank {
  height: 20px;
}
</style>
