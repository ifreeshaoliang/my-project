<template>
  <div class="sellerDiv">
<!-- 图片 -->
    <el-image
      :src="seller.imgUrl"
      fit="cover"
    ></el-image>
<!-- 商店名称 -->
    <div class="sellerInfo">
      <el-link :underline="false">{{seller.name }}</el-link>
    </div>
<!-- 评分 -->
    <div class="sellerDescription">
      <el-row>
        <el-col :span="8">
          <span>服务评分：{{seller.scop1}}</span>
        </el-col>
        <el-col :span="8">
          <span>商品评分：{{seller.scop2}}</span>
        </el-col>
        <el-col :span="8">
          <span>物流评分：{{seller.scop3}}</span>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
export default {
  name: "",
  props: {
    seller: {
      name: "",
      imgUrl: "",
      scop1:"",
      scop2:"",
      scop3:"",
    },
  },
  data() {
    return {
    };
  },
};
</script>

<style scoped>
.sellerDiv {
  height: 60px;
}
.el-image {
  float: left;
  width: 25%;
  width: 60px;
  height: 60px
}
.sellerInfo {
  float: left;
  height: 20px;
  width: 25%;
  display: flex; /**/
  justify-content: center; /*水平居中*/
  align-items: Center; /*垂直居中*/
}
.sellerDescription {
  float: left;
  width: 50%;
  
}
</style>
