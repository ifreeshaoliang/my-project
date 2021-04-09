<template>
  <BaseLayout>
    <template> 
        <div>
          <el-button v-on:click="getUserList">默认按钮</el-button>
          {{userInfo}}
        </div>  
        <Editor></Editor>
    </template
  ></BaseLayout>
</template>
</BaseLayout>

</template>

<script>
import BaseLayout from "../../layout/base-layout";
import MainLayout from "../../layout/base-layout/main-layout";
import Editor from '../../components/Editor'
import userApi from '../../api/userAPI'
export default {
  name: "",
  components: {
    BaseLayout,
    MainLayout,
    Editor
  },
  data() {
    return {
      userInfo: ''
    };
  },
  methods: {
    getUserList() {
      userApi.getUsersInfo().then(resp => (this.userInfo = resp.data)).catch(console.error())

      // this.axios
      // .get('http://localhost:8080/user')
      // .then(response => (this.userInfo = response))
    }
  }
};
</script>

<style scoped>
</style>
