<template>
  <div class="layout">
    <div class="aside">
      <Aside></Aside>
    </div>
    <div class="content">
      <div class="header">
        <Header></Header>
      </div>
      <div class="main">
        <ContentMain></ContentMain>
      </div>
      <div class="footer">
        <Footer></Footer>
      </div>
    </div>
  </div>
</template>

<script>
import Aside from "./Aside.vue";
import Header from "./Header.vue";
import ContentMain from "./ContentMain.vue";
import Footer from "./Footer.vue";

export default {
  name: "Layout",
  components: { Aside, Header, ContentMain, Footer },
};
</script>

<style>
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