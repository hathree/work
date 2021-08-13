<template>
  <div id="app">
    <div class="box">
      <div class="left-box">
        left-box <br /><br />
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
import {routes_list} from './router/index.js'

export default {
  data() {
    return {
      navMenuList: routes_list,
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
