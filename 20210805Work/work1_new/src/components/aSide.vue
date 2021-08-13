<template>
  <div class="aSide">
    <div
      class="navMenu"
      v-for="item in navMenu"
      :key="item.meta.title"
      @click="selected = item.meta.title"
    >
      <router-link :to="item.path" tag="p" style="cursor: pointer">
        <span class="navMenuItem">
          <div style="flex: 4">
            <i :class="item.meta.icon"></i>
            <span> {{ item.meta.title }}</span>
          </div>
          <div style="flex: 1">
            <i
              v-if="item.children != ''"
              :class="
                selected === item.meta.title
                  ? 'el-icon-arrow-down'
                  : 'el-icon-arrow-up'
              "
              style="color: black"
            ></i>
          </div>
        </span>
      </router-link>

      <ul
        v-if="item.children != ''"
        class="subNavMenu"
        :style="{ display: selected === item.meta.title ? 'block' : 'none' }"
      >
        <li
          class="subNavMenuItem"
          v-for="subItem in item.children"
          :key="subItem.meta.title"
        >
          <router-link
            :to="item.path + '/' + subItem.path"
            tag="p"
            style="cursor: pointer"
          >
            <i :class="subItem.meta.icon"></i>
            <span> {{ subItem.meta.title }}</span>
          </router-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "aSide",
  props: ["navMenu"],
  data() {
    return {
      selected: [],
    };
  },
  methods: {},
};
</script>

<style scoped>
.aSide {
  margin: 20px;
  width: 220px;
}

ul {
  list-style: none;
}

.router-link-active {
  text-decoration: none;
  color: red;
}
ul .router-link-active {
  text-decoration: none;
  color: blue;
}
.navMenuItem {
  font-size: 20px;
  display: flex;
}
.subNavMenuItem {
  font-size: 16px;
}
</style>
