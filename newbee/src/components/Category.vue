<template>
  <div class="category">
    <div class="category-box-top">
      <el-button
        type="primary"
        size="small"
        icon="el-icon-plus"
        @click="&quot;&quot;;"
      >
        增加
      </el-button>
      <el-button type="danger" size="small" icon="el-icon-delete">
        批量删除
      </el-button>
    </div>
    <div class="category-box-table">
      <el-table
        ref="multipleTable"
        :data="tableData"
        tooltip-effect="dark"
        style="width: 100%"
        @selection-change="&quot;&quot;;"
      >
        <el-table-column prop="categoryName" label="分类名称">
        </el-table-column>
        <el-table-column prop="categoryRank" label="排序值" width="120">
        </el-table-column>
        <el-table-column prop="createTime" label="添加时间" width="200">
        </el-table-column>
        <el-table-column label="操作" width="220">
          <a style="cursor: pointer; margin-right: 10px" @click="&quot;&quot;;"
            >修改</a
          >
          <a style="cursor: pointer; margin-right: 10px" @click="&quot;&quot;;"
            >下级分类</a
          >
          <a style="cursor: pointer">删除</a>
        </el-table-column>
      </el-table>
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
  </div>
</template>

<script>
import axios from "@/utils/axios.js";

// 获取分类列表

export default {
  name: "Category",
  data() {
    return {
      loading: false,
      tableData: [], // 数据列表
      multipleSelection: [], // 选中项
      total: 0, // 总条数
      currentPage: 1, // 当前页
      pageSize: 10, // 分页大小
      type: "add", // 操作类型
      level: 1,
      parent_id: 0,
    };
  },
  mounted() {
    this.getCategory();
  },
  methods: {
    getCategory() {
      const level = 1;
      const parent_id = 0;
      this.loading = true;
      axios
        .get("/api/categories", {
          params: {
            pageNumber: this.currentPage,
            pageSize: this.pageSize,
            categoryLevel: level,
            parentId: parent_id,
          },
        })
        .then((res) => {
          console.log(res);
          this.tableData = res.list;
          this.total = res.totalCount;
          this.currentPage = res.currPage;
          this.loading = false;
          this.level = level;
          this.parentId = parent_id;
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
