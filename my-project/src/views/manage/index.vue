<template>
  <BaseLayout>
    <template v-slot:header>
      <NaviBar></NaviBar>
    </template>
    <template>
      主体内容
    </template>
    <template v-slot:footer>
    </template>
  </BaseLayout>

</template>



<script>
import NaviBar from "@/components/NaviBar";
import BaseLayout from "@/layout/base-layout";

export default {
  components: {
    NaviBar,
    BaseLayout
  },
  data() {
    return {};
  },
};
</script>

<style scoped>
</style>
