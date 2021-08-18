import Vue from "vue";
import VueRouter from "vue-router";
import Blank from "../components/Blank.vue";
// import Content from "../components/Content.vue";
// import Login from "../components/Login.vue";

Vue.use(VueRouter);

const routes_list = [
  {
    path: "/",
    redirect: "/introduce",
    meta: {
      title: "/",
      isMenu: false,
    },
  },
  {
    path: "/login",
    name: "login",
    component: () =>
      import(/* webpackChunkName: "login" */ "../components/Login.vue"),
    meta: {
      title: "Login",
      isMenu: false,
    },
  },
  {
    path: "/",
    component: Blank,
    meta: {
      title: "Dashboard",
      isMenu: true,
    },
    children: [
      {
        path: "/introduce",
        name: "introduce",
        component: () =>
          import(
            /* webpackChunkName: "introduce" */ "../components/Introduce.vue"
          ),
        meta: {
          title: "系统介绍",
          icon: "el-icon-data-line",
        },
      },
      {
        path: "/dashboard",
        name: "dashboard",
        component: () =>
          import(
            /* webpackChunkName: "dashboard" */ "../components/Dashboard.vue"
          ),
        meta: {
          title: "Dashboard",
          icon: "el-icon-odometer",
        },
      },
      {
        path: "add",
        name: "add",
        component: () =>
          import(/* webpackChunkName: "add" */ "../components/Add.vue"),
        meta: {
          title: "添加商品",
          icon: "el-icon-plus",
        },
      },
    ],
  },
  {
    path: "/",
    component: Blank,
    meta: {
      title: "首页配置",
      isMenu: true,
    },
    children: [
      {
        path: "/swiper",
        name: "swiper",
        component: () =>
          import(/* webpackChunkName: "swiper" */ "../components/Swiper.vue"),
        meta: {
          title: "轮播图配置",
          icon: "el-icon-picture",
        },
      },
      {
        path: "/hot",
        name: "hot",
        component: () =>
          import(/* webpackChunkName: "hot" */ "../components/Hot.vue"),
        meta: {
          title: "热销商品配置",
          icon: "el-icon-star-on",
        },
      },
      {
        path: "/new",
        name: "new",
        component: () =>
          import(/* webpackChunkName: "new" */ "../components/New.vue"),
        meta: {
          title: "新品上线配置",
          icon: "el-icon-sell",
        },
      },
      {
        path: "/recommend",
        name: "recommend",
        component: () =>
          import(
            /* webpackChunkName: "recommend" */ "../components/Recommend.vue"
          ),
        meta: {
          title: "为你推荐配置",
          icon: "el-icon-thumb",
        },
      },
    ],
  },
  {
    path: "/",
    component: Blank,
    meta: {
      title: "模块管理",
      isMenu: true,
    },
    children: [
      {
        path: "/category",
        name: "category",
        component: () =>
          import(
            /* webpackChunkName: "category" */ "../components/Category.vue"
          ),
        meta: {
          title: "分类管理",
          icon: "el-icon-menu",
        },
      },
      {
        path: "/good",
        name: "good",
        component: () =>
          import(/* webpackChunkName: "good" */ "../components/Good.vue"),
        meta: {
          title: "商品管理",
          icon: "el-icon-s-goods",
        },
      },
      {
        path: "/guest",
        name: "guest",
        component: () =>
          import(/* webpackChunkName: "guest" */ "../components/Guest.vue"),
        meta: {
          title: "会员管理",
          icon: "el-icon-user-solid",
        },
      },
      {
        path: "/order",
        name: "order",
        component: () =>
          import(/* webpackChunkName: "order" */ "../components/Order.vue"),
        meta: {
          title: "订单管理",
          icon: "el-icon-s-order",
        },
      },
    ],
  },
  {
    path: "/",
    component: Blank,
    meta: {
      title: "系统管理",
      isMenu: true,
    },
    children: [
      {
        path: "/account",
        name: "account",
        component: () =>
          import(/* webpackChunkName: "account" */ "../components/Account.vue"),
        meta: {
          title: "修改密码",
          icon: "el-icon-lock",
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

/* var count = 0;
router.beforeEach((to, from, next) => {
  console.log("导航守卫" + count);
  count++;
  next();
}); */

router.beforeEach((to, from, next) => {
  var token1 = window.localStorage.getItem("token");
  if (to.name != "login" && token1 == null) {
    console.log("未得到token，跳转到login页面");
    next({ name: "login" });
  }
  else {
    next();
  }
});
