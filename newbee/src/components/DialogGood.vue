<template>
  <el-dialog
    :title="type == 'add' ? '添加商品' : '修改商品'"
    :visible.sync="dialogVisible.is"
    width="400px"
  >
    <el-form
      :model="ruleForm"
      :rules="rules"
      ref="formRef"
      label-width="100px"
      class="good-form"
    >
      <el-form-item label="商品名称" prop="name">
        <el-input type="text" v-model="ruleForm.name"></el-input>
      </el-form-item>
      <el-form-item label="跳转链接" prop="link">
        <el-input type="text" v-model="ruleForm.link"></el-input>
      </el-form-item>
      <el-form-item label="商品编号" prop="id">
        <el-input type="number" min="0" v-model="ruleForm.id"></el-input>
      </el-form-item>
      <el-form-item label="排序值" prop="sort">
        <el-input type="number" v-model="ruleForm.sort"></el-input>
      </el-form-item>
    </el-form>
    <template #footer>
      <span class="dialog-footer">
        <el-button @click="dialogVisible.is = false">取 消</el-button>
        <el-button type="primary" @click="submitForm">确 定</el-button>
      </span>
    </template>
  </el-dialog>
</template>

<script>
//import axios from '@/utils/axios'
export default {
  name: "DialogGood",
  props: ["type", "configType", "dialogVisible"],
  data() {
    return {
      formRef: null,
      ruleForm: {
        name: "",
        link: "",
        id: "",
        sort: "",
      },
      rules: {
        name: [
          { required: "true", message: "名称不能为空", trigger: ["change"] },
        ],
        id: [
          { required: "true", message: "编号不能为空", trigger: ["change"] },
        ],
        sort: [
          { required: "true", message: "排序不能为空", trigger: ["change"] },
        ],
      },
      id: "",
    };
  },
  methods: {
    submitForm() {},
  },
};
</script>

<style scoped>
</style>