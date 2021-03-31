// 写页脚footer的组件
<template>
  <div class="footer">
    <div>
      <el-link type="info" :underline="false"></el-link>
    </div>
    <div>
      <el-row :gutter="24">
        <el-col :span="8">
          <el-link type="info" :underline="false"></el-link>
        </el-col>
        <el-col :span="8">
          <div>
            <el-link type="info" :underline="false">关于我们</el-link>
            <el-divider direction="vertical"></el-divider>
            <el-link type="info" :underline="false">加入我们</el-link>
            <el-divider direction="vertical"></el-divider>
            <el-link type="info" :underline="false">版权保护</el-link>
            <el-divider direction="vertical"></el-divider>
            <el-link type="info" :underline="false">内容合作</el-link>
          </div>
        </el-col>
      </el-row>
    </div>
    <div>
      <el-link type="info" :underline="false"
        >Copyright©2021 ifreeshaoliang所有</el-link
      >
    </div>
  </div>
</template>

<script>
</script>

<style scoped>
.footer {
  text-align: center;
}
</style>
