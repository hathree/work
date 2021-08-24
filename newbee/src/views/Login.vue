<template>
  <div class="login-body">
    <div class="login-container">
      <div class="head">
        <img
          class="logo"
          src="https://s.weituibao.com/1582958061265/mlogo.png"
        />
        <div class="name">
          <div class="title1">新蜂商城</div>
          <div class="title2">New Bee 后台管理系统</div>
        </div>
      </div>

      <el-form
        :model="ruleForm"
        status-icon
        :rules="rules"
        ref="ruleForm"
        label-width="100px"
        class="login-Form"
      >
        <el-form-item label="账号" prop="username">
          <el-input
            type="text"
            v-model="ruleForm.username"
            autocomplete="off"
          ></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="password">
          <el-input
            type="password"
            v-model="ruleForm.password"
            autocomplete="off"
          ></el-input>
        </el-form-item>
        <el-form-item>
          <div style="color: red">登录表示您已同意《服务条款》</div>
          <el-button
            style="width: 100%"
            type="primary"
            @click="submitForm('ruleForm')"
            >立即登录</el-button
          >
          <el-checkbox v-model="checked" @change="!checked"
            >下次自动登录</el-checkbox
          >
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
import axios from "@/utils/axios.js";
import md5 from "js-md5";

export default {
  name: "Login",
  data() {
    return {
      ruleForm: {
        username: "",
        password: "",
      },
      checked: true,
      rules: {
        username: [
          { required: "true", message: "账户不能为空", trigger: "blur" },
        ],
        password: [
          { required: "true", message: "密码不能为空", trigger: "blur" },
        ],
      },
    };
  },
  mounted() {
    this.removeToken;
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
           axios
              .post("/api/adminUser/login", {
                userName: this.ruleForm.username || "",
                passwordMd5: md5(this.ruleForm.password),
              })
              .then((response) => {
                // 处理成功情况
                console.log(response);
                console.log(JSON.stringify(response));
                window.localStorage.setItem("token", JSON.stringify(response));
                window.location.href = "/";
              })
              .catch((error) => {
                // 处理错误情况
                console.log(error);
                return error;
              });
          }
       else {
          console.log("error submit!!");
          return false;
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    },
    removeToken() {
      window.localStorage.removeItem("token");
    },
  },
};
</script>

<style scoped>
.login-body {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  background-color: #fff;
  margin-top: 150px;
}
.login-container {
  width: 500px;
  height: 500px;
  background-color: #fff;
  border-radius: 4px;
  padding: 0px 60px 0px 0px;
  box-shadow: 0px 21px 41px 0px rgba(0, 0, 0, 0.2);
}
.head {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 40px 0 20px 60px;
}
.head img {
  width: 100px;
  height: 100px;
  margin-right: 20px;
}
.head .title1 {
  font-size: 28px;
  color: #1baeae;
  font-weight: bold;
}
.head .title2 {
  font-size: 12px;
  color: #999;
}
.login-Form {
  width: 70%;
  margin: auto;
}
</style>
