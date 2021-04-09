<template>
    <!-- 登录的表单 -->
    <el-form
        label-position="left"
        label-width="50px"
        :model="formLogin"
    >
        <el-form-item label="账户">
        <el-input placeholder="账户" v-model="formLogin.account" maxlength="10"></el-input>
        </el-form-item>
        <el-form-item label="密码">
        <el-input placeholder="密码" v-model="formLogin.password" maxlength="20" show-password></el-input>
        </el-form-item>
        <div style="text-align: right">
        <el-button size=small type="text" >忘记密码</el-button>
        </div>
        <el-form-item></el-form-item>
        <div style="text-align: center">
        <el-button size=small type="primary" style="width:250px"  @click="dialogFormVisible = false">登 录</el-button>
        </div>
    </el-form>
</template>

<script>
export default {
  name:'',
  data(){
   return {
    formLogin: {
        account:'',
        password:''
    }
   }
  }
}
</script>

<style scoped>

</style>

