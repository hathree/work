<template>
  <div>
    <h1>content容器</h1>
    <p>内容</p>
    <button v-on:click="getMockDate">获取Mock数据</button>
    <br /><br />
    <!--     <div>
      <li v-for="(value, name) in mockData" :key="name"> {{ name }}: {{ value }}</li>
    </div> -->
  </div>
</template>

<script>
import md5 from "js-md5";
import axios from "axios";


export default {
  name: "Content",
  data() {
    return {
      mockData: [],
    };
  },
  methods: {
    getMockDate: function () {
      // 发起请求
      axios
        .post("/api/adminUser/login",{
            userName: 'admin',
            passwordMd5: md5('123456')
          })
        .then((response) => {
          // 处理成功情况
          console.log(response);
          /*  console.log(response.data.article);
          this.mockData = response.data.article; */
        })
        .catch((error) => {
          // 处理错误情况
          console.log(error);
          return error;
        });
    },
  },
};
</script>


<style></style>
