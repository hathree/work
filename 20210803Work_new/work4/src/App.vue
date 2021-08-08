<template>
  <div id="app">
    <div class="box">
      <div class="left-box">
        left-box <br /><br />
        <router-link to="/getTime">获取时间</router-link><br /><br />
        <router-link to="/getArticle">获取文章（Work 4）</router-link>
        
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
  background-color: aquamarine;
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
