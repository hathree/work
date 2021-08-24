<template>
  <el-container class="aside-box">
    <el-aside class="aside">
      <div class="header">
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
          :default-active="menuActived"
          ><!--  :default-openeds="state.defaultOpen" :default-active="state.currentPath" -->
          <el-submenu
            class="navMenuItem"
            v-if="item.meta.isMenu"
            :index="item.path"
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
</template>

<script>
import { routes_list } from "../router/index.js";
export default {
  name: "Aside",
  data() {
    return {
      routes_list: routes_list,
    };
  },
  computed: {
    menuActived() {
      return this.$route.path;
    },
  },
};
</script>

<style scoped>
.aside-box {
  height: 100vh;
  width: 100%;
  background-color: #222832;
  overflow: hidden;
  border-right: 2px solid #222832;
}
.aside::-webkit-scrollbar {
  display: none;
}
.header {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 70px;
}
.header > div {
  display: flex;
  align-items: center;
}
.header img {
  width: 50px;
  height: 50px;
  margin-right: 10px;
}
.header span {
  font-size: 20px;
  color: #ffffff;
}
.el-submenu {
  border-bottom: 1px solid rgba(0, 0, 0, 0.2);
}
</style>
