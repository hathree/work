<template>
  <div class="guest">
    <el-card class="guest-card">
      <div slot="header" class="guest-header">
        <MainHeader :headerTitle="headerTitle" @solve="addGood" @forbid="deleteGood"></MainHeader>
      </div>
      <div class="guest-table">
        <MainTable
          :tableTitle="tableTitle"
          :loading="loading"
          :tableData="tableData"
          :multipleSelection="multipleSelection"
          :total="total"
          :currentPage="currentPage"
          :pageSize="pageSize"
          :getTableData = "getTableData"
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
  name: "Guest",
  components: { MainHeader, MainTable },
  data() {
    return {
      headerTitle: [
        {
          type: "button",
          title: "解除禁用",
          color: "primary",
          size: "small",
          icon: "el-icon-plus",
          method: "solve",
        },
        {
          type: "button",
          title: "禁用账户",
          color: "danger",
          size: "small",
          icon: "el-icon-delete",
          method: "forbid",
        },
      ],
      tableTitle: [
        { title: "nickName", label: "昵称", width: "", type: "text" },
        { title: "loginName", label: "登录名", width: "", type: "text"},
        { title: "guestStatus", label: "身份状态", width: "", type: "guestStatus" },
        { title: "isDeleted", label: "是否注销", width: "", type: "isDeleted" },
        { title: "createTime", label: "注册时间", width: "", type: "text" },
      
      ],
      loading: false,
      tableData: [], // 数据列表
      multipleSelection: [], // 选中项
      total: 0, // 总条数
      currentPage: 1, // 当前页
      pageSize: 10, // 分页大小
      type: "add", // 操作类型
      configType: 5
    };
  },

  methods: {
    async getTableData() {
      this.loading = true;
      let res = await axios.get("/api/users", {
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
