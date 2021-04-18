<template>
  <BaseLayout v-bind:inputIndex="navIndex">
    <template>
       <div class="left">sadf</div>
      <div class="right">dasf</div>
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
      navIndex:'3'
    };
  },
};
</script>

<style scoped>
.left {
  float: left;
  width: 68%;
  background-color: aqua;
}
.right {
  float: right;
  width: 30%;
  background-color: azure;
}
</style>
