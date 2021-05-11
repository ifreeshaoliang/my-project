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

        <!-- <el-card shadow="never">
          <div
            slot="header"
            class="clearfix"
          >
            <span>优惠券</span>
          </div>
          <img
            src="../../assets/img/1.jpg"
            style="width:300px;"
          />
          <img
            src="../../assets/img/1.jpg"
            style="width:300px;"
          />
        </el-card> -->

        <div class="blank"></div>

        <div v-if="show == '1'">
          <div
            :key="'goodslr' + index"
            v-for="(goods, index) in results"
          >
            <el-card
              class="box-card"
              shadow="never"
            >
              <Goods :goods="goods"></Goods>
            </el-card>
          </div>
        </div>

        <div v-if="show == '2'">
          <div
            :key="'goodslr' + index"
            v-for="(goods, index) in results2"
          >
            <el-card
              class="box-card"
              shadow="never"
            >
              <Goods :goods="goods"></Goods>
            </el-card>
          </div>
        </div>

      </div>
      <div class="right">
        <el-card shadow="never">
          <span>优惠商品</span>
        </el-card>
        <div
          :key="'goodsSeller' + index"
          v-for="(goods, index) in goodses"
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
      show: "",
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
      results: [
        {
          goodsName:
            "nike耐克水杯运动水壶男跑步健身篮球户外大容量水瓶女便携耐高温",
          goodsPrice: "￥139.00",
          url:
            " //detail.tmall.com/item.htm?id=573801785292&skuId=4459898700267&user_id=3301096597&cat_id=2&is_b=1&rn=ae01793725e159d2b361275bd806c5dd",
          imgUrl:
            "//img.alicdn.com/bao/uploaded/i2/3301096597/O1CN01jd65zx1ybTWXlPIGE_!!0-item_pic.jpg",
        },
        {
          goodsName: "故宫 状元杯 办公杯 茶杯水杯 生日礼物 故宫官方 故宫旗舰店",
          goodsPrice: "￥298.00",
          url:
            "//detail.tmall.com/item.htm?id=597000610444&skuId=4320174734904&user_id=2893966855&cat_id=2&is_b=1&rn=ae01793725e159d2b361275bd806c5dd",
          imgUrl:
            "//img.alicdn.com/bao/uploaded/i1/2893966855/O1CN01qPQ5yn20VdhO0AgvW_!!0-item_pic.jpg",
        },
        {
          goodsName:
            "乐扣乐扣冰峰杯塑料水杯夏季运动创意个性杯子水瓶冷水壶学生男女",
          goodsPrice: "￥37.00",
          url:
            "//detail.tmall.com/item.htm?id=555857811863&skuId=3518605272737&user_id=91978383&cat_id=2&is_b=1&rn=ae01793725e159d2b361275bd806c5dd",
          imgUrl:
            "//img.alicdn.com/bao/uploaded/i1/91978383/O1CN01iE8EOz2BnSiuoKi7c_!!0-item_pic.jpg",
        },
        {
          goodsName:
            "NIKE耐克软杯子男女健身运动水杯跑步自行车骑行挤压式大容量水壶",
          goodsPrice: "￥58.00",
          url:
            "//detail.tmall.com/item.htm?id=544868468365&skuId=4185310423651&user_id=1737765814&cat_id=2&is_b=1&rn=ae01793725e159d2b361275bd806c5dd",
          imgUrl:
            "//img.alicdn.com/bao/uploaded/i1/1737765814/O1CN01cz9aDb1sorL2rhO7F_!!1737765814-0-lubanu-s.jpg",
        },
        {
          goodsName:
            "迪士尼儿童保温杯带吸管小学生防摔水杯男童幼儿园宝宝便携水壶女",
          goodsPrice: "￥98.00",
          url:
            "//detail.tmall.com/item.htm?id=629052223177&skuId=4611686647479611081&user_id=2604838048&cat_id=2&is_b=1&rn=ae01793725e159d2b361275bd806c5dd",
          imgUrl:
            "//img.alicdn.com/bao/uploaded/i3/2604838048/O1CN01zXA52w29K2DRCFOdv_!!0-item_pic.jpg",
        },
        {
          goodsName:
            "晓月水晶玻璃杯复古杯子酒杯家用水杯生日礼物",
          goodsPrice: "￥58.00",
          url:
            "//detail.tmall.com/item.htm?id=629052223177&skuId=4611686647479611081&user_id=2604838048&cat_id=2&is_b=1&rn=ae01793725e159d2b361275bd806c5dd",
          imgUrl:
            "//img.alicdn.com/bao/uploaded/i2/1706737452/O1CN01OMTXYI24v45vNuhoI_!!0-item_pic.jpg",
        },
        {
          goodsName:
            "中国国家博物馆溪山晓月水晶玻璃杯复古杯子酒杯家用水杯生日礼物",
          goodsPrice: "￥69.00",
          url:
            "//detail.tmall.com/item.htm?id=629052223177&skuId=4611686647479611081&user_id=2604838048&cat_id=2&is_b=1&rn=ae01793725e159d2b361275bd806c5dd",
          imgUrl:
            "//img.alicdn.com/bao/uploaded/i1/1737765814/O1CN01kGy4891sorOoxCfDZ_!!0-item_pic.jpg",
        },
        {
          goodsName:
            "中国国家博物馆溪山晓月水晶玻璃杯复古杯子酒杯家用水杯生日礼物",
          goodsPrice: "￥139.00",
          url:
            "//detail.tmall.com/item.htm?id=629052223177&skuId=4611686647479611081&user_id=2604838048&cat_id=2&is_b=1&rn=ae01793725e159d2b361275bd806c5dd",
          imgUrl:
            "//img.alicdn.com/bao/uploaded/i3/2604838048/O1CN01zXA52w29K2DRCFOdv_!!0-item_pic.jpg",
        },
      ],
      results2: [
        {
          goodsName:
            "官方旗舰店 罗技g502 hero有线电竞游戏鼠标g502主宰RGB吃鸡宏加重机械lol/cf 台式电脑笔记本专用",
          goodsPrice: "￥299.00",
          url:
            "//detail.tmall.com/item.htm?id=530238889455&skuId=4679507015015&user_id=2863054326&cat_id=2&is_b=1&rn=ae663b02631eb90a7b1c58f3417b7b37",
          imgUrl:
            "//img.alicdn.com/bao/uploaded/i3/2863054326/O1CN01rBNNAQ1hpLyxW1UKD_!!2863054326.jpg",
        },
        {
          goodsName: "Razer雷蛇蝰蛇标准版V2迷你mini电竞游戏鼠标有线机械精英电脑宏",
          goodsPrice: "￥99.00",
          url:
            "//detail.tmall.com/item.htm?id=40124658793&skuId=4744793506707&user_id=2121571337&cat_id=2&is_b=1&rn=ae663b02631eb90a7b1c58f3417b7b37",
          imgUrl:
            "//img.alicdn.com/bao/uploaded/i4/2121571337/O1CN01TSKDMX1LkOBeZg0Oe_!!2121571337.jpg",
        },
        {
          goodsName: "双飞燕官方OP-520无声音usb针光有线鼠标笔记本台式电脑办公家用",
          goodsPrice: "￥39.00",
          url:
            "//detail.tmall.com/item.htm?id=35031131348&skuId=4462790074334&user_id=341878768&cat_id=2&is_b=1&rn=ae663b02631eb90a7b1c58f3417b7b37",
          imgUrl:
            "//img.alicdn.com/bao/uploaded/i1/341878768/O1CN01vAgoZw2EdnDWxSyxS_!!341878768.jpg",
        },
        {
          goodsName: "官方双飞燕N-810FX无声静音USB有线大鼠标笔记本电脑办公家用鼠标",
          goodsPrice: "￥55.00",
          url:
            "//detail.tmall.com/item.htm?id=23444304734&skuId=4462798130725&user_id=341878768&cat_id=2&is_b=1&rn=ae663b02631eb90a7b1c58f3417b7b37",
          imgUrl:
            "//img.alicdn.com/bao/uploaded/i4/341878768/O1CN01AWC8LL2EdnGyBrlL0_!!341878768.jpg",
        },
        {
          goodsName: "官方旗舰罗技MK275无线键鼠套装键盘鼠标两件套电脑笔记本台式一体 MK315静音办公家用打字游戏外设专用MK270",
          goodsPrice: "￥109.00",
          url:
            "//detail.tmall.com/item.htm?id=528696389066&skuId=4724090310139&user_id=2776129147&cat_id=2&is_b=1&rn=ae663b02631eb90a7b1c58f3417b7b37",
          imgUrl:
            "//img.alicdn.com/bao/uploaded/i4/2776129147/TB2WW2Ew5pnpuFjSZFkXXc4ZpXa_!!2776129147.jpg",
        },
        {
          goodsName: "罗技g102二代机械电竞有线鼠标游戏宏台式电脑家用绝地求生穿越火线cf吃鸡csgo笔记本办公室官方旗舰店",
          goodsPrice: "￥119.00",
          url:
            " //detail.tmall.com/item.htm?id=552120034998&skuId=4565459919796&user_id=2616970884&cat_id=2&is_b=1&rn=ae663b02631eb90a7b1c58f3417b7b37",
          imgUrl:
            "//img.alicdn.com/bao/uploaded/i1/2616970884/O1CN01cNyGMs1IOuneWYsnp_!!2616970884.jpg",
        },
        {
          goodsName: "达尔优牧马人鼠标游戏专用1代2代5代EM915有线lol/cf吃鸡csgo辅助压枪宏机械电竞笔记本台式电脑通用",
          goodsPrice: "￥119.00",
          url:
            " //detail.tmall.com/item.htm?id=552120034998&skuId=4565459919796&user_id=2616970884&cat_id=2&is_b=1&rn=ae663b02631eb90a7b1c58f3417b7b37",
          imgUrl:
            "//img.alicdn.com/bao/uploaded/i4/690218342/O1CN01imv1ki2BUgaNiVATg_!!690218342.jpg",
        },
        {
          goodsName: "12期免息罗技g402有线机械鼠标电竞游戏专用吃鸡鼠标宏cf穿越火线csgo专业luoji罗技402官方旗舰店",
          goodsPrice: "￥239.00",
          url:
            " //detail.tmall.com/item.htm?id=552120034998&skuId=4565459919796&user_id=2616970884&cat_id=2&is_b=1&rn=ae663b02631eb90a7b1c58f3417b7b37",
          imgUrl:
            "//img.alicdn.com/bao/uploaded/i3/2494290284/O1CN01HNxGnN1Dy7485Rtzd_!!2494290284.jpg",
        },
      ],
    };
  },
  methods: {
    aler(imput) {
      if (imput == "水杯") {
        this.show = '1';
      }
      if (imput == "鼠标") {
        this.show = '2';
      }
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
