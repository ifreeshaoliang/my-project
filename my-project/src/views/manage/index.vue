<template>
  <BaseLayout v-bind:inputIndex="navIndex">
    <el-container style="height: 500px; border: 1px solid #eee">
      <el-aside
        class="manageAside"
        width="200px"
        style="background-color: rgb(238, 241, 246)"
      >
        <el-menu
          :default-active="activeIndex"
          @select="handleSelect"
        >

          <el-submenu index="1">
            <template slot="title"><i class="el-icon-user"></i>用户管理</template>
            <el-menu-item index="1-1">编辑用户</el-menu-item>
            <el-menu-item index="1-2">增加用户</el-menu-item>
          </el-submenu>

          <el-submenu index="2">
            <template slot="title"><i class="el-icon-s-comment"></i>社区管理</template>
            <el-menu-item-group>
              <template slot="title">帖子管理</template>
              <el-menu-item index="2-1">编辑帖子</el-menu-item>
            </el-menu-item-group>
            <el-menu-item-group title="评论管理">
              <el-menu-item index="2-3">编辑评论</el-menu-item>
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
              <el-menu-item index="3-4">增加商品</el-menu-item>
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
          <!-- <span>张三</span> -->
        </el-header>

        <el-main>

          <!-- 用户管理部分 -->
          <el-table
            :data="userData"
            v-if="index != '1-2' && index != '2-1' && index != '2-2' && index != '2-3' && index != '2-4' && index != '3-1' && index != '3-2' && index != '3-3' && index != '3-4'"
          >
            <el-table-column
              prop="date"
              label="注册日期"
              width="140"
            >
              <template slot-scope="scope">
                <div v-if="!scope.row.isEdit">{{ scope.row.date }}</div>
                <div v-else>
                  <el-input v-model="scope.row.date"></el-input>
                </div>
              </template>
            </el-table-column>

            <el-table-column
              prop="name"
              label="姓名"
              width="120"
            >
              <template slot-scope="scope">
                <div v-if="!scope.row.isEdit">{{ scope.row.name }}</div>
                <div v-else>
                  <el-input v-model="scope.row.name"></el-input>
                </div>
              </template>
            </el-table-column>

            <el-table-column
              prop="sex"
              label="性别"
              width="100"
            >
              <template slot-scope="scope">
                <div v-if="!scope.row.isEdit">{{ scope.row.sex }}</div>
                <div v-else>
                  <el-input v-model="scope.row.sex"></el-input>
                </div>
              </template>
            </el-table-column>

            <el-table-column
              prop="authority"
              label="用户权限"
            >
              <template slot-scope="scope">
                <div v-if="!scope.row.isEdit">{{ scope.row.authority }}</div>
                <div v-else>
                  <el-input v-model="scope.row.authority"></el-input>
                </div>
              </template>
            </el-table-column>

            <el-table-column label="操作">
              <template slot-scope="scope">
                <el-button
                  size="mini"
                  @click="handleClick(scope.row)"
                >{{ scope.row.isEdit ? '完成' : '编辑' }}</el-button>

                <el-button
                  size="mini"
                  type="danger"
                  @click.native.prevent="deleteRow(scope.$index, userData)"
                >删除</el-button>

              </template>
            </el-table-column>

          </el-table>
          <!-- 用户管理部分结束 -->

          <!-- 用户添加部分 -->
          <el-table
            :data="userAddData"
            v-if="index == '1-2'"
          >

            <el-table-column
              prop="name"
              label="姓名"
              width="120"
            >
              <template slot-scope="scope">
                <div v-if="!scope.row.isEdit">{{ scope.row.name }}</div>
                <div v-else>
                  <el-input v-model="scope.row.name"></el-input>
                </div>
              </template>
            </el-table-column>

            <el-table-column
              prop="sex"
              label="性别"
              width="100"
            >
              <template slot-scope="scope">
                <div v-if="!scope.row.isEdit">{{ scope.row.sex }}</div>
                <div v-else>
                  <el-input v-model="scope.row.sex"></el-input>
                </div>
              </template>
            </el-table-column>

            <el-table-column
              prop="authority"
              label="用户权限"
            >
              <template slot-scope="scope">
                <div v-if="!scope.row.isEdit">{{ scope.row.authority }}</div>
                <div v-else>
                  <el-input v-model="scope.row.authority"></el-input>
                </div>
              </template>
            </el-table-column>

            <el-table-column label="操作">
              <template slot-scope="scope">
                <el-button
                  size="mini"
                  @click="handleClick(scope.row)"
                >{{ scope.row.isEdit ? '完成' : '添加' }}</el-button>

              </template>
            </el-table-column>

          </el-table>
          <!-- 用户添加部分结束 -->

          <!-- 帖子管理部分 -->
          <el-table
            :data="articleData"
            v-if="index == '2-1'"
          >
            <el-table-column
              prop="date"
              label="发表日期"
              width="200"
            >
              <template slot-scope="scope">
                <div v-if="!scope.row.isEdit">{{ scope.row.date }}</div>
                <div v-else>
                  <el-input v-model="scope.row.date"></el-input>
                </div>
              </template>
            </el-table-column>

            <el-table-column
              prop="title"
              label="帖子标题"
            >
              <template slot-scope="scope">
                <div v-if="!scope.row.isEdit">{{ scope.row.title }}</div>
                <div v-else>
                  <el-input v-model="scope.row.title"></el-input>
                </div>
              </template>
            </el-table-column>

            <el-table-column
              prop="name"
              label="发表用户"
              width="120"
            >
              <template slot-scope="scope">
                <div v-if="!scope.row.isEdit">{{ scope.row.name }}</div>
                <div v-else>
                  <el-input v-model="scope.row.name"></el-input>
                </div>
              </template>
            </el-table-column>

            <el-table-column
              prop="type"
              label="类别"
            >
              <template slot-scope="scope">
                <div v-if="!scope.row.isEdit">{{ scope.row.type }}</div>
                <div v-else>
                  <el-input v-model="scope.row.type"></el-input>
                </div>
              </template>
            </el-table-column>

            <el-table-column label="操作">
              <template slot-scope="scope">
                <el-button
                  size="mini"
                  @click="handleClick(scope.row)"
                >{{ scope.row.isEdit ? '完成' : '编辑' }}</el-button>
                <el-button
                  size="mini"
                  type="danger"
                  @click="open"
                  @click.native.prevent="deleteRow(scope.$index, articleData)"
                >删除</el-button>
              </template>
            </el-table-column>

          </el-table>
          <!-- 帖子管理部分结束 -->

          <!-- 评论管理部分 -->
          <el-table
            :data="commentData"
            v-if="index == '2-3'"
          >
            <el-table-column
              prop="date"
              label="评论发表时间"
              width="200"
            >
              <template slot-scope="scope">
                <div v-if="!scope.row.isEdit">{{ scope.row.date }}</div>
                <div v-else>
                  <el-input v-model="scope.row.date"></el-input>
                </div>
              </template>
            </el-table-column>

            <el-table-column
              prop="name"
              label="发表用户"
              width="120"
            >
              <template slot-scope="scope">
                <div v-if="!scope.row.isEdit">{{ scope.row.name }}</div>
                <div v-else>
                  <el-input v-model="scope.row.name"></el-input>
                </div>
              </template>
            </el-table-column>

            <el-table-column
              prop="content"
              label="评论"
            >
              <template slot-scope="scope">
                <div v-if="!scope.row.isEdit">{{ scope.row.content }}</div>
                <div v-else>
                  <el-input v-model="scope.row.content"></el-input>
                </div>
              </template>
            </el-table-column>

            <el-table-column
              prop="title"
              label="归属帖子"
            >
              <template slot-scope="scope">
                <div v-if="!scope.row.isEdit">{{ scope.row.title }}</div>
                <div v-else>
                  <el-input v-model="scope.row.title"></el-input>
                </div>
              </template>
            </el-table-column>

            <el-table-column label="操作">
              <template slot-scope="scope">
                <el-button
                  size="mini"
                  @click="handleClick(scope.row)"
                >{{ scope.row.isEdit ? '完成' : '编辑' }}</el-button>
                <el-button
                  size="mini"
                  type="danger"
                  @click="show"
                  @click.native.prevent="deleteRow(scope.$index, commentData)"
                >删除</el-button>
              </template>
            </el-table-column>

          </el-table>
          <!-- 评论管理部分结束 -->

          <!-- 商家管理部分 -->
          <el-table
            :data="sellerData"
            v-if="index == '3-1'"
          >
            <el-table-column
              prop="date"
              label="合作开始时间"
              width="200"
            >
              <template slot-scope="scope">
                <div v-if="!scope.row.isEdit">{{ scope.row.date }}</div>
                <div v-else>
                  <el-input v-model="scope.row.date"></el-input>
                </div>
              </template>
            </el-table-column>

            <el-table-column
              prop="name"
              label="合作商家"
              width="120"
            >
              <template slot-scope="scope">
                <div v-if="!scope.row.isEdit">{{ scope.row.name }}</div>
                <div v-else>
                  <el-input v-model="scope.row.name"></el-input>
                </div>
              </template>
            </el-table-column>

            <el-table-column
              prop="code"
              label="优惠码"
            >
              <template slot-scope="scope">
                <div v-if="!scope.row.isEdit">{{ scope.row.code }}</div>
                <div v-else>
                  <el-input v-model="scope.row.code"></el-input>
                </div>
              </template>
            </el-table-column>

            <el-table-column
              prop="time"
              label="合作到期时间"
            >
              <template slot-scope="scope">
                <div v-if="!scope.row.isEdit">{{ scope.row.time }}</div>
                <div v-else>
                  <el-input v-model="scope.row.time"></el-input>
                </div>
              </template>
            </el-table-column>

            <el-table-column label="操作">
              <template slot-scope="scope">
                <el-button
                  size="mini"
                  @click="handleClick(scope.row)"
                >{{ scope.row.isEdit ? '完成' : '编辑' }}</el-button>
                <el-button
                  size="mini"
                  type="danger"
                  @click="show"
                >删除</el-button>
              </template>
            </el-table-column>

          </el-table>
          <!-- 商家管理部分结束 -->

          <!-- 商家添加部分 -->
          <el-table
            :data="sellerAddData"
            v-if="index == '3-2'"
          >
            <el-table-column
              prop="date"
              label="合作开始时间"
              width="200"
            >
              <template slot-scope="scope">
                <div v-if="!scope.row.isEdit">{{ scope.row.date }}</div>
                <div v-else>
                  <el-input v-model="scope.row.date"></el-input>
                </div>
              </template>
            </el-table-column>

            <el-table-column
              prop="name"
              label="合作商家"
              width="120"
            >
              <template slot-scope="scope">
                <div v-if="!scope.row.isEdit">{{ scope.row.name }}</div>
                <div v-else>
                  <el-input v-model="scope.row.name"></el-input>
                </div>
              </template>
            </el-table-column>

            <el-table-column
              prop="code"
              label="优惠码"
            >
              <template slot-scope="scope">
                <div v-if="!scope.row.isEdit">{{ scope.row.code }}</div>
                <div v-else>
                  <el-input v-model="scope.row.code"></el-input>
                </div>
              </template>
            </el-table-column>

            <el-table-column
              prop="time"
              label="合作到期时间"
            >
              <template slot-scope="scope">
                <div v-if="!scope.row.isEdit">{{ scope.row.time }}</div>
                <div v-else>
                  <el-input v-model="scope.row.time"></el-input>
                </div>
              </template>
            </el-table-column>

            <el-table-column label="操作">
              <template slot-scope="scope">
                <el-button
                  size="mini"
                  @click="handleClick(scope.row)"
                >{{ scope.row.isEdit ? '完成' : '添加' }}</el-button>
              </template>
            </el-table-column>

          </el-table>
          <!-- 商家添加部分结束 -->

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
      userData: [
        {
          date: "2021-03-02",
          name: "allen",
          sex: "男",
          address: "广东省广州金沙江路 140号",
          authority: 0,
        },
        {
          date: "2020-05-04",
          name: "王小美",
          sex: "女",
          address: "上海市普陀区金沙江路 1517 弄",
          authority: 0,
        },
        {
          date: "2021-04-01",
          name: "小虎view",
          sex: "男",
          address: "浙江市解放路 519号",
          authority: 0,
        },
        {
          date: "2019-05-03",
          name: "woma",
          sex: "女",
          address: "北京市天安门路38号",
          authority: 0,
        },
        {
          date: "2020-09-03",
          name: "可莉keli",
          sex: "女",
          address: "天津市解放路",
          authority: 0,
        },
        {
          date: "2020-01-03",
          name: "滔博体育",
          sex: "男",
          address: "无",
          authority: 0,
        },
      ],
      userAddData: [
        {
          name: "",
          sex: "",
          address: "",
          authority: "",
        },
      ],

      articleData: [
        {
          date: "2021-03-02 10：21",
          title: "男生需要的基础款冬装有那些？",
          name: "allen",
          type: "穿搭",
        },
        {
          date: "2021-03-02 10：22",
          title: "五百元的预算，带你入门烘焙",
          name: "王小美",
          type: "生活",
        },
        {
          date: "2021-03-02 10：23",
          title: "200斤也有得救 最强胖子穿搭指南！",
          name: "allen",
          type: "穿搭",
        },
        {
          date: "2021-03-02 10：24",
          title: "多年北漂的百元内实用租房好物推荐",
          name: "可莉keli",
          type: "日常",
        },
        {
          date: "2021-03-02  10：25",
          title: "双11女鞋品牌买什么？",
          name: "woma",
          type: "穿搭",
        },
      ],

      commentData: [
        {
          date: "2020-04-01 10：21",
          name: "王小美",
          content: "是我的风格",
          title: "基础款冬装有那些？",
        },
        {
          date: "2020-04-02 01：24",
          name: "allen",
          content: "这好看？？？",
          title: "双11女鞋品牌买什么？",
        },
        {
          date: "2020-04-03 07：31",
          name: "woma",
          content: "为啥我觉得一般。。。",
          title: "基础款冬装有那些？",
        },
        {
          date: "2020-04-04 10：21",
          name: "王小美",
          content: "又瘦又白。真是怎么穿怎么好看",
          title: "双11女鞋品牌买什么？",
        },
        {
          date: "2020-04-04 10：21",
          name: "可莉keli",
          content: "求店铺谢谢啦",
          title: "五百元的预算，带你入门烘焙",
        },
        {
          date: "2020-04-05 10：21",
          name: "王小美",
          content: "第一个好漂亮，可是我是胖子",
          title: "基础款冬装有那些？",
        },
        {
          date: "2020-04-05 10：41",
          name: "woma",
          content: "万分羡慕啊",
          title: "基础款冬装有那些？",
        },
      ],

      sellerData: [
        {
          id: 1,
          date: "2019-04-01",
          name: "小米店铺",
          code: "EJSLFj",
          time: "2023-04-01",
        },
        {
          id: 2,
          date: "2018-04-01",
          name: "天才熊猫店铺",
          code: "JKJE23lH",
          time: "2022-08-01",
        },
        {
          id: 3,
          date: "2019-06-01",
          name: "美butiy店铺",
          code: "JEs23dDSF",
          time: "2024-07-01",
        },
        {
          id: 4,
          date: "2017-04-01",
          name: "潮流男孩店铺",
          code: "LjeJf2j6",
          time: "2022-06-01",
        },
        {
          id: 5,
          date: "2019-04-01",
          name: "太牛围巾店铺",
          code: "Tfa23fe",
          time: "2025-04-01",
        },
        {
          id: 6,
          date: "2019-04-01",
          name: "小智店铺",
          code: "EJSLFj",
          time: "2023-04-01",
        },
      ],
      sellerAddData: [
        {
          id: "",
          date: "",
          name: "",
          code: "",
          time: "",
        }
      ],

      navIndex: "5",
      activeIndex: "1",
      index: "",
    };
  },
  methods: {
    show() {
      alert(JSON.stringify(no)); //this.tableData.
    },
    deleteItem() {
      alert("sdaf");
    },
    handleClick(row) {
      // 动态设置数据并通过这个数据判断显示方式
      if (row.isEdit) {
        this.$delete(row, "isEdit");
      } else {
        this.$set(row, "isEdit", true);
      }
      console.log(this.tableData);
    },
    handle(row, column, cell, event) {},

    handleSelect(key, keyPath) {
      this.index = key;
      console.log(key, keyPath);
      console.log(this.index);
    },
    deleteRow(index, rows) {
      this.$confirm('此操作将永久删除该资料, 是否继续?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          rows.splice(index, 1);
          this.$message({
            type: 'success',
            message: '删除成功!'
          });
        }).catch(() => {
          this.$message({
            type: 'info',
            message: '已取消删除'
          });          
        });
    },
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