<template>
  <div id="app">
    <div class="layout">
      <div class="home" v-if="haveToken">
        <el-container class="aside-box">
          <el-aside class="aside">
            <div class="aside-head">
              <div>
                <img
                  src="https://s.weituibao.com/1582958061265/mlogo.png"
                  alt="logo"
                />
                <span>New Bee</span>
              </div>
            </div>

            <div class="navMenu">
              <el-menu
                class="navMenuItems"
                v-for="item in routes_list"
                :key="item.meta.title"
                :router="true"
                ><!--  :default-openeds="state.defaultOpen" :default-active="state.currentPath" -->
                <el-submenu
                  class="navMenuItem"
                  v-if="item.meta.isMenu"
                  :index="item.meta.title"
                >
                  <template v-slot:title>
                    <span>{{ item.meta.title }}</span>
                  </template>
                  <el-menu-item-group
                    class="subNavMenuItem"
                    v-if="item.children != ''"
                  >
                    <el-menu-item
                      v-for="subItem in item.children"
                      :key="subItem.meta.title"
                      :index="subItem.path"
                    >
                      <i :class="subItem.meta.icon" />
                      {{ subItem.meta.title }}
                    </el-menu-item>
                  </el-menu-item-group>
                </el-submenu>
              </el-menu>
            </div>
          </el-aside>
        </el-container>
      </div>
      <el-container class="content">
        <!-- <Header /> -->
        <div class="header">
          <div class="hearder-box" v-if="haveToken">
            <div class="left">
              <span style="font-size: 20px">{{this.$route.meta.title}}</span>
            </div>
            <div class="right">
              <el-popover
                placement="bottom"
                :width="100"
                trigger="click"
                popper-class="popper-user-box"
              >
                <template v-slot:reference>
                  <div class="author">
                    <i class="icon el-icon-s-custom" />
                    十三
                    <i class="el-icon-caret-bottom" />
                  </div>
                </template>
                <div class="nickname">
                  <p>登录名：{{ "admin" }}</p>
                  <p>昵称：{{ "十三" }}</p>
                  <el-tag
                
                    size="small"
                    effect="dark"
                    class="logout"
                    @click="logout"
                    style="cursor: pointer;"
                    >退出</el-tag
                  >
                </div>
              </el-popover>
            </div>
          </div>
        </div>

        <div class="main">
          <router-view />
        </div>
        <!-- Footer -->
        <div class="footer">
          <div class="footer-box" v-if="haveToken">
            <div class="footer-box-left">
              Copyright © 2019-2021 十三. All rights reserved.
            </div>
            <div class="footer-box-right">
              <a
                target="_blank"
                href="https://github.com/newbee-ltd/vue3-admin"
                style="text-decoration: none"
                >vue3-admin Version 3.0.0</a
              >
            </div>
          </div>
        </div>
      </el-container>
    </div>
  </div>
</template>

<script>
import { routes_list } from "./router/index.js";

export default {
  data() {
    return {
      routes_list: routes_list,
      haveToken: window.localStorage.getItem("token") != null,
    };
  },
  methods: {
    logout() {
      window.localStorage.removeItem("token");
      window.location.href = "/login";
    },
  },
};
</script>

<style scoped>
.layout {
  min-height: 100vh;
  background-color: white;
  display: flex;
}
.aside-box {
  height: 100vh;
  flex: 1;
}
.aside {
  width: 200px !important;
  background-color: #222832;
  overflow: hidden;
  overflow-y: auto;
  -ms-overflow-style: none;
  overflow: -moz-scrollbars-none;
  border-right: 2px solid #222832;
}
.aside::-webkit-scrollbar {
  display: none;
}
.aside-head {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 80px;
}
.aside-head > div {
  display: flex;
  align-items: center;
}
.aside-head img {
  width: 50px;
  height: 50px;
  margin-right: 10px;
}
.aside-head span {
  font-size: 20px;
  color: #ffffff;
}

.content {
  flex: 8;
  display: flex;
  flex-direction: column;
  height: 100vh;
  max-height: 100vh;
  overflow: hidden;
}
.header {
  flex: 1;
}
.hearder-box {
  height: 100%;
  border-bottom: 1px solid gray;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
}
.footer {
  flex: 1;
}
.footer-box {
  height: 100%;
  border-top: 1px solid gray;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
}

.main {
  flex: 10;
  overflow: auto;
  padding: 10px;
}
</style>
<style>
body {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}
.el-submenu {
  border-bottom: 1px solid rgba(0, 0, 0, 0.2);
}
</style>
