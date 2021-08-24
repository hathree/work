<template>
  <div class="category">
    <el-card class="category-card">
      <div slot="header" class="category-box-top">
        <MainHeader @add="addGood" @delete="deleteGood"></MainHeader>
      </div>
      <div class="category-box-table">
        <MainTable :tableTitle="tableTitle" :tableData="tableData">
          <template v-slot:xg>
            <a
              style="cursor: pointer; margin-right: 10px"
              @click="&quot;&quot;;"
            >
              修改
            </a>
          </template>
          <template v-slot:xjfl>
            <a
              style="cursor: pointer; margin-right: 10px"
              @click="&quot;&quot;;"
            >
              下级分类
            </a>
          </template>
          <template v-slot:sc>
            <a
              style="cursor: pointer; margin-right: 10px"
              @click="&quot;&quot;;"
            >
              删除
            </a>
          </template>
        </MainTable>

        <br />
        <!--总数超过一页，再展示分页器-->
        <el-pagination
          background
          layout="prev, pager, next"
          :total="total"
          :page-size="pageSize"
          :current-page="currentPage"
          @current-change="changePage"
        />
      </div>
    </el-card>
  </div>
</template>

<script>
import axios from "@/utils/axios.js";
import MainHeader from "@/components/MainHeader.vue";
import MainTable from "@/components/MainTable.vue";

// 获取分类列表

export default {
  name: "Category",
  components: { MainHeader, MainTable },
  data() {
    return {
      tableTitle: [
        { title: "categoryName", label: "分类名称", width: "" },
        { title: "categoryRank", label: "排序值", width: "120" },
        { title: "createTime", label: "添加时间", width: "200" },
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
  mounted() {
    this.getCategory();
  },
  methods: {
    addGood() {
      console.log("addGood");
    },
    deleteGood() {
      console.log("deleteGood");
    },
    getCategory() {
      this.loading = true;
      axios
        .get("/api/categories", {
          params: {
            pageNumber: this.currentPage,
            pageSize: this.pageSize,
            categoryLevel: this.level,
            parentId: this.parent_id,
          },
        })
        .then((res) => {
          console.log(res);
          this.tableData = res.list;
          this.total = res.totalCount;
          this.currentPage = res.currPage;
          this.loading = false;
          this.level = 1;
          this.parentId = 0;
        });
    },
    changePage(val) {
      this.currentPage = val; //val为回调的当前页
      this.getCategory();
    },
  },
};
</script>
<style scoped>
.category {
  min-height: 100%;
}
.category-box-table {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
</style>
