<template>
  <div class="add">
    <el-card class="add-card">
      <el-form
        :model="goodForm"
        :rules="rules"
        ref="goodRef"
        label-width="100px"
        class="goodForm"
      >
        <el-form-item required label="商品分类" prop="categoryId">
          <el-cascader
            :placeholder="defaultCate"
            style="width: 300px"
            :props="category"
            @change="handleChangeCate"
          ></el-cascader>
        </el-form-item>
        <el-form-item label="商品名称" prop="goodsName">
          <el-input
            style="width: 300px"
            v-model="goodForm.goodsName"
            placeholder="请输入商品名称"
          ></el-input>
        </el-form-item>
        <el-form-item label="商品简介" prop="goodsIntro">
          <el-input
            style="width: 300px"
            type="textarea"
            v-model="goodForm.goodsIntro"
            placeholder="请输入商品简介(100字)"
          ></el-input>
        </el-form-item>
        <el-form-item label="商品价格" prop="originalPrice">
          <el-input
            type="number"
            min="0"
            style="width: 300px"
            v-model="goodForm.originalPrice"
            placeholder="请输入商品价格"
          ></el-input>
        </el-form-item>
        <el-form-item label="商品售卖价" prop="sellingPrice">
          <el-input
            type="number"
            min="0"
            style="width: 300px"
            v-model="goodForm.sellingPrice"
            placeholder="请输入商品售价"
          ></el-input>
        </el-form-item>
        <el-form-item label="商品库存" prop="stockNum">
          <el-input
            type="number"
            min="0"
            style="width: 300px"
            v-model="goodForm.stockNum"
            placeholder="请输入商品库存"
          ></el-input>
        </el-form-item>
        <el-form-item label="商品标签" prop="tag">
          <el-input
            style="width: 300px"
            v-model="goodForm.tag"
            placeholder="请输入商品小标签"
          ></el-input>
        </el-form-item>
        <el-form-item label="上架状态" prop="goodsSellStatus">
          <el-radio-group v-model="goodForm.goodsSellStatus">
            <el-radio label="0">上架</el-radio>
            <el-radio label="1">下架</el-radio>
          </el-radio-group>
        </el-form-item>
        <el-form-item required label="商品主图" prop="goodsCoverImg">
          <el-upload
            class="avatar-uploader"
            :action="uploadImgServer"
            accept="jpg,jpeg,png"
            :headers="{
              token: token,
            }"
            :show-file-list="false"
            :before-upload="handleBeforeUpload"
            :on-success="handleUrlSuccess"
          >
            <img
              class="avatar"
              v-if="goodForm.goodsCoverImg"
              :src="goodForm.goodsCoverImg"
            />
            <i v-else class="el-icon-plus avatar-uploader-icon"></i>
          </el-upload>
        </el-form-item>
        <el-form-item label="详情内容">
          <!-- <div ref="editor"></div> -->
          <div>详情内容编辑框</div>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="submitAdd()">
            {{ id ? "立即修改" : "立即创建" }}
          </el-button>
        </el-form-item>
      </el-form>
    </el-card>
  </div>
</template>

<script>
export default {
  name: "Add",

  data() {
    return {
      uploadImgServer:
        "http://backend-api-02.newbee.ltd/manage-api/v1/upload/file",
      token: window.localStorage.getItem("token") || "",
      id: "",
      defaultCate: "",
      categoryId: "",
      category: {},
      goodForm: {
        goodsName: "",
        goodsIntro: "",
        originalPrice: "",
        sellingPrice: "",
        stockNum: "",
        goodsSellStatus: "0",
        goodsCoverImg: "",
        tag: "",
      },
      rules: {
        categoryId: [
          { required: "true", message: "请选择分类", trigger: "change" },
        ],
        goodsName: [
          { required: "true", message: "请填写商品名称", trigger: "change" },
        ],
        originalPrice: [
          { required: "true", message: "请填写商品价格", trigger: "change" },
        ],
        sellingPrice: [
          { required: "true", message: "请填写商品售价", trigger: "change" },
        ],
        stockNum: [
          { required: "true", message: "请填写商品库存", trigger: "change" },
        ],
        goodsCoverImg: [
          { required: "true", message: "请上传主图", trigger: "change" },
        ],
      },
    };
  },
  methods: {
    handleChangeCate() {},
    handleBeforeUpload() {},
    handleUrlSuccess() {},
    submitAdd() {},
  },
};
</script>

<style scoped>
.avatar-uploader {
  width: 100px;
  height: 100px;
  border: 1px solid #d9d9d9;
  border-radius: 6px;
  cursor: pointer;
  display: table-cell;
  text-align: center;
  vertical-align: middle;
}
.avatar-uploader:hover {
  border-color: #409eff;
}
.avatar-uploader-icon {
  color: #8c939d;
  font-size: 30px;
}
.avatar {
  width: 100px;
  height: 100px;
}
</style>