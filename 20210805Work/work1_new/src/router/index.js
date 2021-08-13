import Vue from "vue";
import VueRouter from "vue-router";
import getArticle from "../components/getArticle.vue";
import Blank from '../components/blank.vue'

Vue.use(VueRouter);

const routes_list = [
  {
    path: "/UserCenter",
    name: "UserCenter",
    component: Blank,
    meta: {
      title: "个人中心",
      icon: "el-icon-user-solid",
    },
    children: [
      {
        path: "UserData",
        name: "UserData",
        component: Blank,
        meta: {
          title: "个人信息",
          icon: "el-icon-user",
        },
      },
      {
        path: "Config",
        name: "Config",
        component: Blank,
        meta: {
          title: "配置管理",
          icon: "el-icon-setting",
        },
      },
    ],
  },
  {
    path: "/UserManage",
    name: "UserManage",
    component: Blank,
    meta: {
      title: "用户管理",
      icon: "el-icon-orange",
    },
    children: [],
  },
  {
    path: "/Article",
    name: "Article",
    component: Blank,
    meta: {
      title: "文章管理",
      icon: "el-icon-document",
    },
    children: [
      {
        path: "getArticle",
        name: "getArticle",
        component: getArticle,
        meta: {
          title: "文章列表",
          icon: "el-icon-tickets",
        },
      },
      {
        path: "Edit",
        name: "Edit",
        component: getArticle,
        meta: {
          title: "编辑文章",
          icon: "el-icon-edit-outline",
        },
      },
      {
        path: "Sort",
        name: "Sort",
        component: getArticle,
        meta: {
          title: "文章分类",
          icon: "el-icon-folder-opened",
        },
      },
    ],
  },
  {
    path: "/CommentManage",
    name: "CommentManage",
    component: Blank,
    meta: {
      title: "评论管理",
      icon: "el-icon-s-comment",
    },
    children: [],
  },
  {
    path: "/ExamplePages",
    name: "ExamplePages",
    component: Blank,
    meta: {
      title: "示例页面",
      icon: "el-icon-star-off",
    },
    children: [],
  },
  {
    path: "/Other",
    name: "Other",
    component: Blank,
    meta: {
      title: "小玩意",
      icon: "el-icon-watermelon",
    },
    children: [
      {
        path: "task",
        name: "task",
        component: Blank,
        meta: {
          title: "任务栏",
          icon: "el-icon-s-order",
        },
      },
      {
        path: "card",
        name: "card",
        component: Blank,
        meta: {
          title: "卡片",
          icon: "el-icon-bank-card",
        },
      },
      {
        path: "formGen",
        name: "formGen",
        component: Blank,
        meta: {
          title: "表单生成",
          icon: "el-icon-film",
        },
      },
    ],
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes: routes_list,
});

export default router;
export { routes_list };
  
var count = 0;
router.beforeEach((to, from, next) => {
  console.log('导航守卫' + count);
  count++;
  next()
});
