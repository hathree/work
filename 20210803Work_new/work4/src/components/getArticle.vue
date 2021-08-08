<template>
  <div class="getArticle">
    <h1>getArticle</h1>
    <button v-on:click="getMockDate">获取Mock数据</button>
    <br /><br />
    <div>
      <li v-for="(value, name) in mockData" :key="name"> {{ name }}: {{ value }}</li>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
/* import HelloWorld from '@/components/HelloWorld.vue' */

export default { 
  name: "getArticle",
  data() {
    return {
      mockData: [],
    };
  },
  methods: {
    getMockDate: function () {
      
      const axios = require("axios").default;
      // 发起请求
      /* 在请求执行成功后执行回调函数中的内容，回调函数处于其它函数
      的内部this不会与任何对象绑定，为undefined。所以使用箭头函数 */
      axios
        .get("https://www.fastmock.site/mock/a17b76a989ea4ddce6739fba0756d8b2/work4/work4")
        .then(response => {
          // 处理成功情况
          console.log(response);
          console.log(response.data.article);
          this.mockData = response.data.article;
        })
        .catch(error => {
          // 处理错误情况
          console.log(error);
          return error;
        });
    },
  },
};
</script>
