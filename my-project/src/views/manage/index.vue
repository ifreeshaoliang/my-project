<template>
  <BaseLayout v-bind:inputIndex="navIndex">
    <el-container style="height: 500px; border: 1px solid #eee">
      <el-aside
        class="manageAside"
        width="200px"
        style="background-color: rgb(238, 241, 246)"
      >
        <el-menu :default-openeds="['1']">

          <el-submenu index="1">
            <template slot="title"><i class="el-icon-message"></i>用户管理</template>
            <el-menu-item index="1-1">编辑用户</el-menu-item>
            <el-menu-item index="1-2">增加用户</el-menu-item>
          </el-submenu>

          <el-submenu index="2">
            <template slot="title"><i class="el-icon-menu"></i>社区管理</template>
            <el-menu-item-group>
              <template slot="title">帖子管理</template>
              <el-menu-item index="2-1">编辑帖子</el-menu-item>
              <el-menu-item index="2-2">增加帖子</el-menu-item>
            </el-menu-item-group>
            <el-menu-item-group title="评论管理">
              <el-menu-item index="2-3">编辑评论</el-menu-item>
              <el-menu-item index="2-4">增加评论</el-menu-item>
            </el-menu-item-group>
          </el-submenu>

          <el-submenu index="3">
            <template slot="title"><i class="el-icon-setting"></i>商家管理</template>

            <el-menu-item-group>
              <template slot="title">商家管理</template>
              <el-menu-item index="3-1">编辑商家</el-menu-item>
              <el-menu-item index="3-2">增加商家</el-menu-item>
            </el-menu-item-group>

            <el-menu-item-group title="商品管理">
              <el-menu-item index="3-3">编辑商品</el-menu-item>
              <el-menu-item index="3-2">增加商品</el-menu-item>
            </el-menu-item-group>

          </el-submenu>

        </el-menu>
      </el-aside>

      <el-container>
        <el-header
          class="manageHeader"
          style="text-align: right; font-size: 12px"
        >
          <el-dropdown>
            <i
              class="el-icon-setting"
              style="margin-right: 15px"
            ></i>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item>查看</el-dropdown-item>
              <el-dropdown-item>新增</el-dropdown-item>
              <el-dropdown-item>删除</el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
          <span>张三</span>
        </el-header>

        <el-main>

          <!-- <el-table :data="tableData">
            <el-table-column
              prop="date"
              label="注册日期"
              width="140"
            >
            </el-table-column>
            <el-table-column
              prop="name"
              label="姓名"
              width="120"
            >
            </el-table-column>
            <el-table-column
              prop="sex"
              label="性别"
              width="100"
            > </el-table-column>
            <el-table-column
              prop="address"
              label="地址"
            > </el-table-column>
            <el-table-column>
              <el-button
                type="primary"
                plain
              >编辑</el-button>
              <el-button
                type="danger"
                plain
              >删除</el-button>
            </el-table-column>
          </el-table> -->

          <!-- <el-table :data="tableData">
            <el-table-column
              prop="date"
              label="发表日期"
              width="200"
            >
            </el-table-column>
            <el-table-column
              prop="title"
              label="帖子标题"
            >
            </el-table-column>
            <el-table-column
              prop="name"
              label="发表用户"
              width="120"
            >
            </el-table-column>
            
            <el-table-column
              prop="type"
              label="类别"
            > </el-table-column>

            <el-table-column>
              <el-button
                type="primary"
                plain
              >编辑</el-button>
              <el-button
                type="danger"
                plain
              >删除</el-button>
            </el-table-column>
          </el-table> -->

          <!-- <el-table :data="tableData">
            <el-table-column
              prop="date"
              label="评论发表时间"
              width="200"
            >
            </el-table-column>

            <el-table-column
              prop="name"
              label="发表用户"
              width="120"
            >
            </el-table-column>

            <el-table-column
              prop="content"
              label="评论"
            >
            </el-table-column>

            <el-table-column
              prop="title"
              label="归属帖子"
            > </el-table-column>

            <el-table-column>
              <el-button
                type="primary"
                plain
              >编辑</el-button>
              <el-button
                type="danger"
                plain
              >删除</el-button>
            </el-table-column>

          </el-table> -->

          <el-table :data="tableData">
            <el-table-column
              prop="date"
              label="合作开始时间"
              width="200"
            >
            </el-table-column>

            <el-table-column
              prop="name"
              label="合作商家"
              width="120"
            >
            </el-table-column>

            <el-table-column
              prop="code"
              label="优惠码"
            >
            </el-table-column>

            <el-table-column
              prop="time"
              label="合作到期时间"
            > </el-table-column>

            <el-table-column>
              <el-button
                type="primary"
                plain
              >编辑</el-button>
              <el-button
                type="danger"
                plain
              >删除</el-button>
            </el-table-column>

          </el-table>

        </el-main>

      </el-container>
    </el-container>
  </BaseLayout>
</template>


<script>
import BaseLayout from "../../layout/base-layout";

export default {
  components: {
    BaseLayout,
  },
  data() {
    return {
      // tableData: [
      //   {
      //     date: "2021-03-02",
      //     name: "allen",
      //     sex: "男",
      //     address: "广东省广州金沙江路 140号",
      //   },
      //   {
      //     date: "2020-05-04",
      //     name: "王小美",
      //     sex: "女",
      //     address: "上海市普陀区金沙江路 1517 弄",
      //   },
      //   {
      //     date: "2021-04-01",
      //     name: "小虎view",
      //     sex: "男",
      //     address: "浙江市解放路 519号",
      //   },
      //   {
      //     date: "2019-05-03",
      //     name: "woma",
      //     sex: "女",
      //     address: "北京市天安门路38号",
      //   },
      //   {
      //     date: "2020-09-03",
      //     name: "可莉keli",
      //     sex: "女",
      //     address: "天津市解放路",
      //   },
      //   {
      //     date: "2020-01-03",
      //     name: "滔博体育",
      //     sex: "男",
      //     address: "无",
      //   },
      // ],

      // tableData: [
      //   {
      //     date: "2021-03-02 10：21",
      //     title: "男生需要的基础款冬装有那些？",
      //     name: "allen",
      //     type: "穿搭",
      //   },
      //   {
      //     date: "2021-03-02 10：22",
      //     title: "五百元的预算，带你入门烘焙",
      //     name: "王小美",
      //     type: "生活",
      //   },
      //   {
      //     date: "2021-03-02 10：23",
      //     title: "200斤也有得救 最强胖子穿搭指南！",
      //     name: "allen",
      //     type: "穿搭",
      //   },
      //   {
      //     date: "2021-03-02 10：24",
      //     title: "多年北漂的百元内实用租房好物推荐",
      //     name: "可莉keli",
      //     type: "日常",
      //   },
      //   {
      //     date: "2021-03-02  10：25",
      //     title: "双11女鞋品牌买什么？",
      //     name: "woma",
      //     type: "穿搭",
      //   },
      // ],

      // tableData: [
      //   {
      //     date: "2020-04-01 10：21",
      //     name: "王小美",
      //     content: "是我的风格",
      //     title: "基础款冬装有那些？",
      //   },
      //   {
      //     date: "2020-04-02 01：24",
      //     name: "allen",
      //     content: "这好看？？？",
      //     title: "双11女鞋品牌买什么？",
      //   },
      //   {
      //     date: "2020-04-03 07：31",
      //     name: "woma",
      //     content: "为啥我觉得一般。。。",
      //     title: "基础款冬装有那些？",
      //   },
      //   {
      //     date: "2020-04-04 10：21",
      //     name: "王小美",
      //     content: "又瘦又白。真是怎么穿怎么好看",
      //     title: "双11女鞋品牌买什么？",
      //   },
      //   {
      //     date: "2020-04-04 10：21",
      //     name: "可莉keli",
      //     content: "求店铺谢谢啦",
      //     title: "五百元的预算，带你入门烘焙",
      //   },
      //   {
      //     date: "2020-04-05 10：21",
      //     name: "王小美",
      //     content: "第一个好漂亮，可是我是胖子",
      //     title: "基础款冬装有那些？",
      //   },
      //   {
      //     date: "2020-04-05 10：41",
      //     name: "woma",
      //     content: "万分羡慕啊",
      //     title: "基础款冬装有那些？",
      //   },
      // ],

      tableData: [
        {
          date: "2019-04-01",
          name: "小米店铺",
          code: "EJSLFj",
          time: "2023-04-01",
        },
        {
          date: "2018-04-01",
          name: "天才熊猫店铺",
          code: "JKJE23lH",
          time: "2022-08-01",
        },
        {
          date: "2019-06-01",
          name: "美butiy店铺",
          code: "JEs23dDSF",
          time: "2024-07-01",
        },
        {
          date: "2017-04-01",
          name: "潮流男孩店铺",
          code: "LjeJf2j6",
          time: "2022-06-01",
        },
        {
          date: "2019-04-01",
          name: "太牛围巾店铺",
          code: "Tfa23fe",
          time: "2025-04-01",
        },
        {
          date: "2019-04-01",
          name: "小智店铺",
          code: "EJSLFj",
          time: "2023-04-01",
        },
      ],
      navIndex: "5",
    };
  },
};
</script>


<style>
.manageHeader {
  background-color: #b3c0d1;
  color: #333;
  line-height: 60px;
}

.manageAside {
  color: #333;
}
</style>