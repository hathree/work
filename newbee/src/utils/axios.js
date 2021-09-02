import axios from "axios";

// 携带 cookie，对目前的项目没有什么作用，因为我们是 token 鉴权
axios.defaults.withCredentials = true;
// 请求头，headers 信息
axios.defaults.headers["X-Requested-With"] = "XMLHttpRequest";
axios.defaults.headers["token"] =
  JSON.parse(window.localStorage.getItem("token")) || "";
// 默认 post 请求，使用 application/json 形式
axios.defaults.headers.post["Content-Type"] = "application/json";

// 请求拦截器，内部根据返回值，重新组装，统一管理。
axios.interceptors.response.use((res) => {
  if (res.data.resultCode != 200) {
    if (res.data.message)
      alert(
        res.data.message +
          "resultCode:" +
          res.data.resultCode +
          "\n" +
          "提示：账号admin，密码123456"
      );
    if (res.data.resultCode == 419) {
      this.router.push({ path: "/login" });
    }
    return Promise.reject(res.data);
  }

  return res.data.data;
});

export default axios;
