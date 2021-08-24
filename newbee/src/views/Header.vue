<template>
  <div class="header-box">
    <div class="left">
      <span style="font-size: 20px">{{ thisPathTitle }}</span>
    </div>
    <div class="right">
      <el-popover
        placement="bottom"
        :width="100"
        trigger="click"
        popper-class="popper-user-box"
      >
        <template v-slot:reference>
          <div class="author">
            <i class="icon el-icon-s-custom" />
            十三
            <i class="el-icon-caret-bottom" />
          </div>
        </template>
        <div class="nickname">
          <p>登录名：{{ "admin" }}</p>
          <p>昵称：{{ "十三" }}</p>
          <el-tag
            size="small"
            effect="dark"
            class="logout"
            @click="logout"
            style="cursor: pointer"
            >退出</el-tag
          >
        </div>
      </el-popover>
    </div>
  </div>
</template>

<script>
export default {
  name: "Header",
  data() {
    return {};
  },
  computed: {
    thisPathTitle() {
      return this.$route.meta.title;
    },
  },
  methods: {
    logout() {
      window.localStorage.removeItem("token");
      window.location.href = "/login";
    },
  },
};
</script>


<style scoped>
.header-box {
  width: auto;
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
  border-bottom: 1px solid lightgray;
}
</style>
