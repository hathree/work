<template>
  <div class="category">
    <el-card class="category-card">
      <div slot="header" class="category-header">
        <MainHeader
          :headerTitle="headerTitle"
          @add="addGood"
          @delete="deleteGood"
        ></MainHeader>
      </div>
      <div class="category-table">
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
          <template v-slot:xjfl>
            <a
              style="cursor: pointer; margin-right: 2px"
              @click="&quot;&quot;;"
            >
              下级分类
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
    <DialogCategory
      ref="addGood"
      :type="type"
      :dialogVisible="dialogVisible"
    ></DialogCategory>
  </div>
</template>

<script>
import MainHeader from "@/components/MainHeader.vue";
import MainTable from "@/components/MainTable.vue";
import DialogCategory from '@/components/DialogCategory.vue';
import axios from "@/utils/axios.js";
// 获取分类列表
export default {
  name: "Category",
  components: { MainHeader, MainTable,DialogCategory },
  data() {
    return {
      headerTitle: [
        {
          type: "button",
          title: "增加",
          color: "primary",
          size: "small",
          icon: "el-icon-plus",
          method: "add",
        },
        {
          type: "button",
          title: "批量删除",
          color: "danger",
          size: "small",
          icon: "el-icon-delete",
          method: "delete",
        },
      ],
      tableTitle: [
        { title: "categoryName", label: "分类名称", width: "", type: "text" },
        { title: "categoryRank", label: "排序值", width: "120", type: "text" },
        { title: "createTime", label: "添加时间", width: "200", type: "text" },
        {
          title: "operation",
          label: "操作",
          width: "220",
          type: "operation",
          operations: [
            { title: "xg", label: "修改" },
            { title: "xjfl", label: "下级分类" },
            { title: "sc", label: "删除" },
          ],
        },
      ],
      dialogVisible: {
        is: false,
      },
      loading: false,
      tableData: [], // 数据列表
      multipleSelection: [], // 选中项
      total: 0, // 总条数
      currentPage: 1, // 当前页
      pageSize: 10, // 分页大小
      level: 1,
      parent_id: 0,
      type: "add", // 操作类型
    };
  },

  methods: {
    async getTableData() {
      this.loading = true;
      let res = await axios.get("/api/categories", {
        params: {
          pageNumber: this.currentPage,
          pageSize: this.pageSize,
          categoryLevel: this.level,
          parentId: this.parent_id,
        },
      });
      console.log(res);
      this.tableData = res.list;
      this.total = res.totalCount;
      this.currentPage = res.currPage;
      this.loading = false;
      this.level = 1;
      this.parentId = 0;
    },

    addGood() {
      this.dialogVisible.is = true;
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
