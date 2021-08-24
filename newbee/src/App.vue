<template>
  <div id="app">
    <div class="layout">
      <div class="aside" v-if="haveToken">
        <Aside></Aside>
      </div>
      <div class="content">
        <div class="header" v-if="haveToken">
          <Header></Header>
        </div>
        <div class="main">
          <router-view />
        </div>
        <div class="footer" v-if="haveToken">
          <Footer></Footer>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Aside from "./views/Aside.vue";
import Header from "./views/Header.vue";
import Footer from "./views/Footer.vue";

export default {
  data() {
    return {
      haveToken: window.localStorage.getItem("token") != null,
    };
  },
  components: { Aside, Header, Footer },
};
</script>

<style>
body {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}
.layout {
  height: 100vh;
  background-color: white;
  display: flex;
  flex-direction: row;
}
.aside {
  flex: 1;
}
.content {
  flex: 9;
  height: 100vh;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  z-index: 0;
}
.header {
  flex: 1;
  z-index: 1;
}
.footer {
  flex: 1;
  z-index: 1;
}
.main {
  flex: 10;
  overflow: auto;
  padding: 10px;
}
</style>
