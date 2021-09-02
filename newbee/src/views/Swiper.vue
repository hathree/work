<template>
  <div class="swiper">
    <el-card class="swiper-card">
      <div slot="header" class="swiper-header">
        <MainHeader
          :headerTitle="headerTitle"
          @add="addGood"
          @delete="deleteGood"
        ></MainHeader>
      </div>
      <div class="swiper-table">
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
    <DialogSwiper ref="addGood" :type="type" :dialogVisible="dialogVisible">
    </DialogSwiper
    >>
  </div>
</template>

<script>
import MainHeader from "@/components/MainHeader.vue";
import MainTable from "@/components/MainTable.vue";
import DialogSwiper from "@/components/DialogSwiper.vue";
import axios from "@/utils/axios.js";
// 获取分类列表
export default {
  name: "Swiper",
  components: { MainHeader, MainTable, DialogSwiper },
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
        {
          title: "carouselImg",
          label: "轮播图",
          width: "200",
          type: "img",
          alt: "轮播图",
        },
        { title: "carouselUrl", label: "跳转链接", width: "", type: "url" },
        { title: "carouselRank", label: "排序值", width: "120", type: "text" },
        { title: "createTime", label: "添加时间", width: "200", type: "text" },
        {
          title: "operation",
          label: "操作",
          width: "100",
          type: "operation",
          operations: [
            { title: "xg", label: "修改" },
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
      type: "add", // 操作类型
    };
  },

  methods: {
    async getTableData() {
      this.loading = true;
      let res = await axios.get("/api/carousels", {
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
