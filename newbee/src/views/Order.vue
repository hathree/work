<template>
  <div class="order">
    <el-card class="order-card">
      <div slot="header" class="order-header">
        <MainHeader
          :headerTitle="headerTitle"
          @add="addGood"
          @delete="deleteGood"
        >
          <template v-slot:inputOrder>
            <el-input
              style="width: 200px; margin-right: 10px"
              placeholder="请输入订单号"
              v-model="orderNo"
              @change="''"
              size="small"
              clearable
            />
          </template>
          <template v-slot:selectOrderStatus>
            <el-select
              @change="''"
              v-model="orderStatus"
              size="small"
              style="width: 200px; margin-right: 10px"
            >
              <el-option
                v-for="item in options"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              />
            </el-select>
          </template>
        </MainHeader>
      </div>
      <div class="order-table">
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
  </div>
</template>

<script>
import MainHeader from "@/components/MainHeader.vue";
import MainTable from "@/components/MainTable.vue";
import axios from "@/utils/axios.js";
// 获取分类列表
export default {
  name: "Order",
  components: { MainHeader, MainTable },
  data() {
    return {
      headerTitle: [
        {
          type: "text",
          title: "inputOrder",
        },
        {
          type: "select",
          title: "selectOrderStatus",
        },
        {
          type: "button",
          title: "配货完成",
          color: "primary",
          size: "small",
          icon: "el-icon-s-home",
          method: "add",
        },
        {
          type: "button",
          title: "出库",
          color: "primary",
          size: "small",
          icon: "el-icon-s-home",
          method: "add",
        },
        {
          type: "button",
          title: "关闭订单",
          color: "danger",
          size: "small",
          icon: "el-icon-delete",
          method: "delete",
        },
      ],
      tableTitle: [
        { title: "orderNo", label: "订单号", width: "", type: "text" },
        { title: "totalPrice", label: "订单总价", width: "", type: "text" },
        {
          title: "orderStatus",
          label: "订单状态",
          width: "",
          type: "orderStatus",
        },
        { title: "payType", label: "支付方式", width: "", type: "payType" },
        {
          title: "createTime",
          label: "创建时间",
          width: "",
          type: "text",
        },
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
      options: [{
        value: '',
        label: '全部'
      }, {
        value: 0,
        label: '待支付'
      }, {
        value: 1,
        label: '已支付'
      }, {
        value: 2,
        label: '配货完成'
      }, {
        value: 3,
        label: '出库成功'
      }, {
        value: 4,
        label: '交易成功'
      }, {
        value: -1,
        label: '手动关闭'
      }, {
        value: -2,
        label: '超时关闭'
      }, {
        value: -3,
        label: '商家关闭'
      }],
      loading: false,
      tableData: [], // 数据列表
      multipleSelection: [], // 选中项
      total: 0, // 总条数
      currentPage: 1, // 当前页
      pageSize: 10, // 分页大小
      orderNo: "", // 订单号
      orderStatus: "", // 订单状态
    };
  },

  methods: {
    async getTableData() {
      this.loading = true;
      let res = await axios.get("/api/orders", {
        params: {
          pageNumber: this.currentPage,
          pageSize: this.pageSize,
          orderNo: this.orderNo,
          orderStatus: this.orderStatus,
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
