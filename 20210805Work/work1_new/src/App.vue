<template>
  <div id="app">
    <div class="box">
      <div class="left-box">
        left-box <br /><br />
        <router-link to="/getTime">获取时间</router-link><br /><br />
        <router-link to="/getArticle">获取文章（Work 4）</router-link
        ><br /><br /><br /><br />

        <span>自定义侧边栏组件：</span><br /><br />
        <aSide :navMenu="navMenuList"></aSide>
      </div>
      <div class="right-box">
        <div class="top-box">rigth-box: top</div>
        <div class="main-box">
          right-box: main<br />
          <router-view />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import aSide from "./components/aSide.vue";
export default {
  data() {
    return {
      navMenuList: [
        {
          title: "个人中心",
          icon: "el-icon-user-solid",
          router: "/UserCenter",
          subNavMenu: [
            {
              title: "个人信息",
              icon: "el-icon-user",
              router: "/UserCenter/UserData",
            },
            {
              title: "配置管理",
              icon: "el-icon-setting",
              router: "/UserCenter/Config",
            },
          ],
        },
        {
          title: "用户管理",
          icon: "el-icon-orange",
          router: "/UserManage",
          subNavMenu: [],
        },
        {
          title: "文章管理",
          icon: "el-icon-document",
          router: "/Article",
          subNavMenu: [
            {
              title: "文章列表",
              icon: "el-icon-tickets",
              router: "/Article/List",
            },
            {
              title: "编辑文章",
              icon: "el-icon-edit-outline",
              router: "/Article/Edit",
            },
            {
              title: "文章分类",
              icon: "el-icon-folder-opened",
              router: "/Article/Sort",
            },
          ],
        },
        {
          title: "评论管理",
          icon: "el-icon-s-comment",
          router: "/CommentManage",
          subNavMenu: [],
        },
        {
          title: "示例页面",
          icon: "el-icon-star-off",
          router: "/ExamplePages",
          subNavMenu: [],
        },
      ],
    };
  },
  methods: {},
  components: {
    aSide,
  },
};
</script>

<style>
.box {
  display: flex;
  height: 100vh;
  width: auto;
  justify-content: space-between;
  background-color: lightgray;
}
.left-box {
  flex: 1;
  background-color: white;
  padding: 10px;
  margin: 10px;
}
.right-box {
  flex: 5;
  margin: 10px 10px 10px 0;
  display: flex;
  flex-direction: column;
}
.top-box {
  flex: 1;
  background-color: lightgoldenrodyellow;
  padding: 10px;
  margin: 0 0 10px 0;
}
.main-box {
  flex: 5;
  background-color: lightskyblue;
  padding: 10px;
}
</style>
