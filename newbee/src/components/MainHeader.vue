<template>
  <div>
    <el-button
      type="primary"
      size="small"
      icon="el-icon-plus"
      @click="addHandle"
    >
      增加
    </el-button>
    <el-button
      type="danger"
      size="small"
      icon="el-icon-delete"
      @click="deleteHandle"
    >
      批量删除
    </el-button>
  </div>
</template>

<script>
export default {
  name: "MainHeader",
  methods: {
    addHandle() {
      this.$emit("add");
    },
    deleteHandle() {
      this.$emit("delete");
    },
  },
};
</script>

<style>
</style>