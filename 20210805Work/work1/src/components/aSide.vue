<template>
  <div class="aSide">
    <div class="navMenu" v-for="item in navMenu" :key="item.title" @click="selected = item.title">
      <router-link :to="item.router">
        <div class="navMenuItem">
          <i :class="item.icon"></i> 
          <span> {{ item.title }}</span>
        </div>
      </router-link>

      <ul class="subNavMenu" :style="{display: selected === item.title ? 'block' : 'none'}">
        <li
          class="subNavMenuItem"
          v-for="subItem in item.subNavMenu"
          :key="subItem.title"
        >
          <router-link :to="subItem.router">
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
        selected: "",
    };
  },
  methods: {},
};
</script>

<style>
ul {
    list-style: none;
}
.router-link-active{
    text-decoration: none;
    color: red;
}
ul .router-link-active{
    text-decoration: none;
    color:blue;
}
.navMenuItem {
    font-size: 20px;
}
.subNavMenuItem {
    font-size: 18px;
}

</style>
