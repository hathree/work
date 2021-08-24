<template>
  <div class="dashboard">
    <el-card class="dashboard-box">
      <div class="order">
        <el-card class="order-item">
          <div slot="header" class="card-header">今日订单数</div>
          <div class="card-item">1888</div>
        </el-card>
        <el-card class="order-item">
          <div slot="header" class="card-header">今日日活</div>
          <div class="card-item">36271</div>
        </el-card>
        <el-card class="order-item">
          <div slot="header" class="card-header">转化率</div>
          <div class="card-item">20%</div>
        </el-card>
      </div>
      <div id="line-chart" class="line-chart"></div>
    </el-card>
  </div>
</template>

<script>
import * as echarts from "echarts";

export default {
  name: "Dashboard",
  mounted() {
    this.drawEchart();
  },
  methods: {
    drawEchart() {
      var chartDom = document.getElementById("line-chart");
      var myChart = echarts.init(chartDom);
      var option = {
        title: {
          text: "系统折线图",
        },
        tooltip: {
          trigger: "axis",
          axisPointer: {
            type: "cross",
            label: {
              backgroundColor: "#6a7985",
            },
          },
        },
        legend: {
          data: ["新增注册", "付费用户", "活跃用户", "订单数", "当月总收入"],
        },
        toolbox: {
          feature: {
            saveAsImage: {},
          },
        },
        grid: {
          left: "3%",
          right: "4%",
          bottom: "3%",
          containLabel: true,
        },
        xAxis: [
          {
            type: "category",
            boundaryGap: false,
            data: [
              "2021-03-11",
              "2021-03-12",
              "2021-03-13",
              "2021-03-14",
              "2021-03-15",
              "2021-03-16",
              "2021-03-17",
            ],
          },
        ],
        yAxis: [
          {
            type: "value",
          },
        ],
        series: [
          {
            name: "新增注册",
            type: "line",
            stack: "总量",
            areaStyle: {},
            emphasis: {
              focus: "series",
            },
            data: [120, 132, 101, 134, 90, 230, 210],
          },
          {
            name: "付费用户",
            type: "line",
            stack: "总量",
            areaStyle: {},
            emphasis: {
              focus: "series",
            },
            data: [220, 182, 191, 234, 290, 330, 310],
          },
          {
            name: "活跃用户",
            type: "line",
            stack: "总量",
            areaStyle: {},
            emphasis: {
              focus: "series",
            },
            data: [150, 232, 201, 154, 190, 330, 410],
          },
          {
            name: "订单数",
            type: "line",
            stack: "总量",
            areaStyle: {},
            emphasis: {
              focus: "series",
            },
            data: [320, 332, 301, 334, 390, 330, 320],
          },
          {
            name: "当月总收入",
            type: "line",
            stack: "总量",
            label: {
              show: true,
              position: "top",
            },
            areaStyle: {},
            emphasis: {
              focus: "series",
            },
            data: [820, 932, 901, 934, 1290, 1330, 1320],
          },
        ],
      };

      option && myChart.setOption(option);
    },
  },
};
</script>

<style scoped>
.order {
  display: flex;
  width: 100%;
}
.order-item {
  flex: 1;
  margin: 10px 20px 10px 20px;
}
.line-chart {
  margin-top: 30px;
}
.line-chart {
  width: 100%;
  min-height: 300px;
}
</style>