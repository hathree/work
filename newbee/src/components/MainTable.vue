<template>
  <el-table
    ref="multipleTable"
    :data="tableData"
    tooltip-effect="dark"
    style="width: 100%"
    @selection-change="&quot;&quot;;"
  >
    <el-table-column type="selection" width="55"></el-table-column>
    <template v-for="item in tableTitle">
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

      <el-table-column
        v-else
        :prop="item.title"
        :label="item.label"
        :key="item.title"
        :width="item.width"
      ></el-table-column>
    </template>
  </el-table>
</template>

<script>
export default {
  name: "MainTable",
  props: {
    tableTitle: {},
    tableData: {},
  },
};
</script>

<style>
</style>