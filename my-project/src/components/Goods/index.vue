<template>
  <div class="goodsDiv">
    <el-image
      style="width: 50px; height: 50px"
      :src="goods.imgUrl"
      fit="cover"
    ></el-image>
    <div class="goodsInfo">
        <div class="goodsName">
            <el-link :underline="false">{{goods.goodsName}}</el-link>
        </div>
        <div class="goodsPrice">
            {{goods.goodsPrice}}
        </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "",
  props: {
    goods: {
      goodsName: "",
      goodsPrice: "",
      imgUrl:"",
    }
  },
  data() {
    return {
    };
  },
};
</script>

<style scoped>
.goodsDiv {
    height: 50px;
}
.el-image {
    float: left;
    width: 25%;
}
.goodsInfo {
    float: right;
    width: 75%;
}
</style>
