<template>
  <div class="good">
    <el-card class="good-card">
      <div slot="header" class="good-header">
        <MainHeader
          :headerTitle="headerTitle"
          @add="addGood"
          @delete="deleteGood"
        ></MainHeader>
      </div>
      <div class="good-table">
        <MainTable
          :tableTitle="tableTitle"
          :loading="loading"
          :tableData="tableData"
          :multipleSelection="multipleSelection"
          :total="total"
          :currentPage="currentPage"
          :pageSize="pageSize"
          :getTableData="getTableData"
        >
          <template v-slot:xg>
            <a
              style="cursor: pointer; margin-right: 2px"
              @click="&quot;&quot;;"
            >
              修改
            </a>
          </template>
          <template v-slot:sc>
            <a
              style="cursor: pointer; margin-right: 2px"
              @click="&quot;&quot;;"
            >
              删除
            </a>
          </template>
        </MainTable>
      </div>
    </el-card>
  </div>
</template>

<script>
import MainHeader from "@/components/MainHeader.vue";
import MainTable from "@/components/MainTable.vue";
import axios from "@/utils/axios.js";
// 获取分类列表
export default {
  name: "Good",
  components: { MainHeader, MainTable },
  data() {
    return {
      headerTitle: [
        {
          type: "button",
          title: "新增商品",
          color: "primary",
          size: "small",
          icon: "el-icon-plus",
          method: "add",
        },
      ],
      tableTitle: [
        { title: "goodsId", label: "商品编号", width: "", type: "text" },
        { title: "goodsName", label: "商品名", width: "", type: "text" },
        { title: "goodsIntro", label: "商品简介", width: "", type: "text" },
        {
          title: "goodsImg",
          label: "商品图片",
          width: "150",
          type: "img",
          alt: "商品图片",
        },
        { title: "stockNum", label: "商品库存", width: "", type: "text" },
        { title: "sellingPrice", label: "商品售价", width: "", type: "text" },
        {
          title: "sellStatus",
          label: "上架状态",
          width: "",
          type: "sellStatus",
        },
        {
          title: "operation",
          label: "操作",
          width: "100",
          type: "operation",
          operations: [
            { title: "xg", label: "修改" },
            { title: "xj", label: "下架" },
            { title: "sj", label: "上架" },
          ],
        },
      ],
      loading: false,
      tableData: [], // 数据列表
      multipleSelection: [], // 选中项
      total: 0, // 总条数
      currentPage: 1, // 当前页
      pageSize: 10, // 分页大小
    };
  },

  methods: {
    async getTableData() {
      this.loading = true;
      let res = await axios.get("/api/goods/list", {
        params: {
          pageNumber: this.currentPage,
          pageSize: this.pageSize,
        },
      });
      console.log(res);
      this.tableData = res.list;
      this.total = res.totalCount;
      this.currentPage = res.currPage;
      this.loading = false;
    },

    addGood() {
      this.$router.push({ path: "/add" });
      console.log("addGood");
    },
    deleteGood() {
      console.log("deleteGood");
    },
  },
};
</script>
<style scoped>
</style>
