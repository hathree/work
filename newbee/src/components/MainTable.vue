<template>
  <div class="mainTable">
    <el-table
      v-loading="loading"
      ref="multipleTable"
      :data="tableData"
      tooltip-effect="dark"
      style="width: 100%"
      @selection-change="SelectionChange"
    >
      <el-table-column type="selection" width="55"></el-table-column>
      <template v-for="item in tableTitle">
        <el-table-column
          v-if="item.type === 'text'"
          :prop="item.title"
          :label="item.label"
          :key="item.title"
          :width="item.width"
        ></el-table-column>

        <el-table-column
          v-if="item.type === 'url'"
          :prop="item.title"
          :label="item.label"
          :key="item.title"
          :width="item.width"
        >
          <template #default="scope">
            <a target="_blank" :href="scope.row.redirectUrl">{{
              scope.row.redirectUrl
            }}</a>
          </template>
        </el-table-column>

        <el-table-column
          v-if="item.type === 'img'"
          :prop="item.title"
          :label="item.label"
          :key="item.title"
          :width="item.width"
        >
          <template #default="scope">
            <img
              v-if="item.alt == '轮播图'"
              style="width: 150px; height: 150px"
              :src="scope.row.carouselUrl"
              :alt="item.alt"
            />
            <img
              v-if="item.alt == '商品图片'"
              style="width: 100px; height: 100px"
              :key="scope.row.goodsId"
              :src="scope.row.goodsCoverImg"
              :alt="item.alt"
            />
          </template>
        </el-table-column>

        <el-table-column
          v-if="item.type === 'sellStatus'"
          :prop="item.title"
          :label="item.label"
          :key="item.title"
          :width="item.width"
        >
          <template #default="scope">
            <span style="color: green" v-if="scope.row.goodsSellStatus == 0"
              >销售中</span
            >
            <span style="color: red" v-else>已下架</span>
          </template>
        </el-table-column>

        <el-table-column
          v-if="item.type === 'guestStatus'"
          :prop="item.title"
          :label="item.label"
          :key="item.title"
          :width="item.width"
        >
          <template #default="scope">
            <span
              :style="
                scope.row.lockedFlag == 0 ? 'color: green;' : 'color: red;'
              "
            >
              {{ scope.row.lockedFlag == 0 ? "正常" : "禁用" }}
            </span>
          </template>
        </el-table-column>

        <el-table-column
          v-if="item.type === 'isDeleted'"
          :prop="item.title"
          :label="item.label"
          :key="item.title"
          :width="item.width"
        >
          <template #default="scope">
            <span
              :style="
                scope.row.lockedFlag == 0 ? 'color: green;' : 'color: red;'
              "
            >
              {{ scope.row.isDeleted == 0 ? "正常" : "注销" }}
            </span>
          </template>
        </el-table-column>

        <el-table-column
          v-if="item.type === 'orderStatus'"
          :prop="item.title"
          :label="item.label"
          :key="item.title"
          :width="item.width"
        >
          <template #default="scope">
            <span v-if="scope.row.orderStatus == 0">待支付</span>
            <span v-if="scope.row.orderStatus == 1">已支付</span>
            <span v-if="scope.row.orderStatus == 2">配货完成</span>
            <span v-if="scope.row.orderStatus == 3">出库成功</span>
            <span v-if="scope.row.orderStatus == 4">交易成功</span>
            <span v-if="scope.row.orderStatus == -1">手动关闭</span>
            <span v-if="scope.row.orderStatus == -2">超时关闭</span>
            <span v-if="scope.row.orderStatus == -3">商家关闭</span>
          </template>
        </el-table-column>

        <el-table-column
          v-if="item.type === 'payType'"
          :prop="item.title"
          :label="item.label"
          :key="item.title"
          :width="item.width"
        >
          <template #default="scope">
            <span v-if="scope.row.payType == 1">微信支付</span>
            <span v-else-if="scope.row.payType == 2">支付宝支付</span>
            <span v-else>未支付</span>
          </template>
        </el-table-column>

        <el-table-column
          v-if="item.type === 'operation'"
          :prop="item.title"
          :label="item.label"
          :key="item.title"
          :width="item.width"
        >
          <template v-for="operationItem in item.operations">
            <slot :name="operationItem.title"></slot>
          </template>
        </el-table-column>
      </template>
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
</template>

<script>
export default {
  name: "MainTable",
  props: [
    "loading",
    "tableTitle",
    "tableData",
    "multipleSelection",
    "total",
    "pageSize",
    "currentPage",
    "getTableData",
  ],

  mounted() {
    this.getTableData();
  },
  methods: {
    changePage(val) {
      this.currentPage = val; //val为回调的当前页
      this.getTableData();
    },
    SelectionChange(val) {
      this.multipleSelection = val;
    },
  },
};
</script>

<style>
.mainTable {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
</style>