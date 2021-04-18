<template>
  <BaseLayout v-bind:inputIndex="navIndex">
    <template>
     比价页面

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
      navIndex:'2'
    };
  },
};
</script>

<style scoped>
</style>
