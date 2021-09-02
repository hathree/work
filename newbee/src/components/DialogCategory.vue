<template>
  <el-dialog
    :title="type == 'add' ? '添加分类' : '修改分类'"
    :visible.sync="dialogVisible.is"
    width="400px"
  >
    <el-form :model="ruleForm" :rules="rules" ref="formRef" label-width="100px" class="good-form">
      <el-form-item label="商品名称" prop="name">
        <el-input type="text" v-model="ruleForm.name"></el-input>
      </el-form-item>
      <el-form-item label="排序值" prop="rank">
        <el-input type="number" v-model="ruleForm.rank"></el-input>
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
  name: 'DialogCategory',
  props: ['type','dialogVisible'],
  data() {
    return {
      formRef: null,
      categoryLevel: 1,
      parentId: 0,
      ruleForm: {
        name: '',
        rank: ''
      },
      rules: {
        name: [
          { required: 'true', message: '名称不能为空', trigger: ['change'] }
        ],
        rank: [
          { required: 'true', message: '编号不能为空', trigger: ['change'] }
        ]
      },
      id: ''
    }
  },
}
</script>