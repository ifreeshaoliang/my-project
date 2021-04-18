<template>
  <BaseLayout v-bind:inputIndex="navIndex">
    <template>
       销售商页面
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
</style>
