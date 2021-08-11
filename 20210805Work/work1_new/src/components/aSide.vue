<template>
  <div class="aSide">
    <div
      class="navMenu"
      v-for="item in navMenu"
      :key="item.title"
      @click="selected = item.title"
    >
      <span class="navMenuItem">
        <router-link :to="item.router" tag="p">
          <i :class="item.icon"></i>
          <span> {{ item.title }}</span> &nbsp;&nbsp;&nbsp;&nbsp;
          <i
            v-if="item.subNavMenu != ''"
            :class="
              selected === item.title
                ? 'el-icon-arrow-down'
                : 'el-icon-arrow-up'
            "
            style="color: black"
          ></i>
        </router-link>
      </span>

      <ul
        v-if="item.subNavMenu != ''"
        class="subNavMenu"
        :style="{ display: selected === item.title ? 'block' : 'none' }"
      >
        <li
          class="subNavMenuItem"
          v-for="subItem in item.subNavMenu"
          :key="subItem.title"
        >
          <router-link :to="subItem.router" tag="p">
            <i :class="subItem.icon"></i>
            <span> {{ subItem.title }}</span>
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
  width: 200px;
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
}
.subNavMenuItem {
  font-size: 18px;
}
</style>
