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
              v-if="goodForm.goodsCoverImg"
              :src="goodForm.goodsCoverImg"
              class="avatar"
            />
            <i v-else class="el-icon-plus avatar-uploader-icon"></i>
          </el-upload>
        </el-form-item>
        <el-form-item label="详情内容">
          <div ref="editor"></div>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="submitAdd()">立即创建
            <!-- {{ id ? "立即修改" : "立即创建" }} -->
          </el-button>
        </el-form-item>
      </el-form>
    </el-card>
  </div>
</template>

<script>
import axios from "@/utils/axios.js";
import E from "wangeditor";

export default {
  name: "Add",
  data() {
    return {
      editor: null,
      uploadImgServer:
        "http://backend-api-02.newbee.ltd/manage-api/v1/upload/file",
      uploadImgsServer:
        "http://backend-api-02.newbee.ltd/manage-api/v1/upload/files",
      token: window.localStorage.getItem("token") || "",
      //id: this.$route.query,
      goodRef: "",
      defaultCate: "",
      categoryId: "",
      category: {
        lazy: true,
        async lazyLoad(node, resolve) {
          const { level = 0, value } = node;
          const res = await axios.get("/api/categories", {
            params: {
              pageNumber: 1,
              pageSize: 1000,
              categoryLevel: level + 1,
              parentId: value || 0,
            },
          });
          const list = res.list;
          const nodes = list.map((item) => ({
            value: item.categoryId,
            label: item.categoryName,
            leaf: level > 1,
          }));
          resolve(nodes);
        },
      },
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

  mounted() {
    //console.log(this.id);
    this.editor = new E(this.$refs.editor);
    this.editor.config.showLinkImg = false;
    this.editor.config.showLinkImgAlt = false;
    this.editor.config.showLinkImgHref = false;
    this.editor.config.uploadImgMaxSize = 2 * 1024 * 1024; // 2M
    this.editor.config.uploadFileName = "file";
    this.editor.config.uploadImgHeaders = {
      token: this.token,
    };
    // 图片返回格式不同，需要自定义返回格式
    this.editor.config.uploadImgHooks = {
      // 图片上传并返回了结果，想要自己把图片插入到编辑器中
      // 例如服务器端返回的不是 { errno: 0, data: [...] } 这种格式，可使用 customInsert
      customInsert: function (insertImgFn, result) {
        console.log("result", result);
        // result 即服务端返回的接口
        // insertImgFn 可把图片插入到编辑器，传入图片 src ，执行函数即可
        if (result.data && result.data.length) {
          result.data.forEach((item) => insertImgFn(item));
        }
      },
    };
    this.editor.config.uploadImgServer = this.uploadImgsServer;
    Object.assign(this.editor.config, {
      onchange() {
        console.log("change");
      },
    }),
      this.editor.create();
    // if (this.id) {
    //   async () => {
    //     const res = await axios.get(`/api/goods/${this.id}`);
    //     const { goods, firstCategory, secondCategory, thirdCategory } = res;
    //     this.goodForm = {
    //       goodsName: goods.goodsName,
    //       goodsIntro: goods.goodsIntro,
    //       originalPrice: goods.originalPrice,
    //       sellingPrice: goods.sellingPrice,
    //       stockNum: goods.stockNum,
    //       goodsSellStatus: String(goods.goodsSellStatus),
    //       goodsCoverImg: goods.goodsCoverImg,
    //       tag: goods.tag,
    //     };
    //     this.categoryId = goods.goodsCategoryId;
    //     this.defaultCate = `${firstCategory.categoryName}/${secondCategory.categoryName}/${thirdCategory.categoryName}`;
    //     if (this.editor) {
    //       // 初始化商品详情 html
    //       this.editor.txt.html(goods.goodsDetailContent);
    //     }
    //   };
    // }
  },
  beforeDestroy() {
    // 销毁编辑器
    this.editor.destroy();
    this.editor = null;
  },
  methods: {
    submitAdd() {
      this.$refs.goodRef.validate((valid) => {
        if (valid) {
          // 默认新增用 post 方法
          let httpOption = axios.post;
          let params = {
            goodsCategoryId: this.categoryId,
            goodsCoverImg: this.goodForm.goodsCoverImg,
            goodsDetailContent: this.editor.txt.html(),
            goodsIntro: this.goodForm.goodsIntro,
            goodsName: this.goodForm.goodsName,
            goodsSellStatus: this.goodForm.goodsSellStatus,
            originalPrice: this.goodForm.originalPrice,
            sellingPrice: this.goodForm.sellingPrice,
            stockNum: this.goodForm.stockNum,
            tag: this.goodForm.tag,
          };
          console.log("params", params);
          // if (this.id) {
          //   params.goodsId = this.id;
          //   // 修改商品使用 put 方法
          //   httpOption = axios.put;
          // }
          httpOption("/api/goods", params).then(() => {
            //console.log(this.id ? "修改成功" : "添加成功");
            this.$router.push({ path: "/good" });
          });
        }
      });
    },
    handleBeforeUpload(file) {
      const sufix = file.name.split(".")[1] || "";
      if (!["jpg", "jpeg", "png"].includes(sufix)) {
        console.log("请上传 jpg、jpeg、png 格式的图片");
        return false;
      }
    },
    handleUrlSuccess( val) {
      this.goodForm.goodsCoverImg = val.data || "";
    },
    handleChangeCate(val) {
      this.categoryId = val[2] || 0;
    },
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