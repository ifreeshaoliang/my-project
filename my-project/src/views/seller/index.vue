<template>
  <BaseLayout v-bind:inputIndex="navIndex">
    <template>

      <div class="left">

        <el-card shadow="never">
          <span>优惠商家</span>
        </el-card>

        <!-- 商家展示 -->
        <div
          :key="'sell'+index"
          v-for="(seller,index) in sellers"
        >
          <el-card shadow="never">
            <SlllerItem :seller="seller"></SlllerItem>
          </el-card>
        </div>

        <div class="blank"></div>

        <el-card shadow="never">
          <div
            slot="header"
            class="clearfix"
          >
            <span>商家优惠券</span>
          </div>
          <img
            src="../../assets/img/1.jpg"
            style="width:300px;"
          />
          <img
            src="../../assets/img/1.jpg"
            style="width:300px;"
          />
        </el-card>

      </div>

      <div class="right">
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

<script>
import BaseLayout from "../../layout/base-layout";
import Goods from "../../components/Goods";
import SlllerItem from "../../components/SlllerItem";

export default {
  name: "",
  components: {
    BaseLayout,
    Goods,
    SlllerItem,
  },
  data() {
    return {
      navIndex: "3",
      goodses: [
        {
          goodsName: "漫步者Lollipods真无线蓝牙耳机",
          goodsPrice: "￥228.00",
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
      sellers: [
        {
          name: "tjk拓吉凯旗舰店",
          url:"https://mall.jd.com/view_search-238399-0-5-1-24-1.html",
          imgUrl: "https://img1.miaomiaoz.com/image/097f8bfa7a381dbe9447b52b767525a1.jpeg!/rotate/auto/fwfh/200x200/force/true",
          scop1: "4.7",
          scop2: "4.8",
          scop3: "4.9",
        },
        {
          name: "fmacm官方旗舰店",
          url:"http://www.chaonanclub.com/wangdiandaquan/chaopaiwangdian/3745.html",
          imgUrl: "https://img1.miaomiaoz.com/image/ee4ab2a3cdd00eec5237751028e937de.png!/rotate/auto/fwfh/200x200/force/true",
          scop1: "4.8",
          scop2: "4.7",
          scop3: "4.9",
        },
        {
          name: "匡威官方旗舰店",
          url:"https://www.converse.com.cn/",
          imgUrl: "https://img1.miaomiaoz.com/image/886fb5c559a3207226c9a97a34d4e185.jpeg!/rotate/auto/fwfh/200x200/force/true",
          scop1: "4.8",
          scop2: "4.6",
          scop3: "4.9",
        },
        {
          name: "彪马旗舰店 ",
          url:"https://shop.m.jd.com/?shopId=34239",
          imgUrl: "https://img1.miaomiaoz.com/image/5619a309098d8ee9dd390d0c98104ed6.jpeg!/rotate/auto/fwfh/200x200/force/true",
          scop1: "4.6",
          scop2: "4.6",
          scop3: "4.9",
        },
        {
          name: "小天才官方旗舰店 ",
          url:"https://xiaotiancai.jd.com/view_search-255012-0-0-1-24-2.html",
          imgUrl: "https://gdp.alicdn.com/imgextra/i3/2208236819916/O1CN01ZCnpzG2N7a3BCdrnb_!!2208236819916.jpg",
          scop1: "4.4",
          scop2: "4.9",
          scop3: "4.9",
        },
      ],
    };
  },
};
</script>

<style scoped>
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
