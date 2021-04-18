<template>
  <BaseLayout v-bind:inputIndex="navIndex">
    <template>
      <div>
        <el-card class="box-card">
            <img src="../../assets/user-img/img1.png" width="35px" height="35px" />
        </el-card>
      </div>
      <div class="fatherDiv">
        <div></div>
      </div>
    </template>
  </BaseLayout>
</template>

<script>
import BaseLayout from "../../layout/base-layout";

export default {
  name: "",
  components: {
    BaseLayout,
  },
  data() {
    return {
      navIndex:'4'
    };
  },
};
</script>

<style scoped>
</style>