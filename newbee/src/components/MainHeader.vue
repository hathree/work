<template>
  <div class="mainHeader">
    <template v-for="item in headerTitle">
      <template v-if="item.type == 'button'">
        <el-button
          :type="item.color"
          :size="item.size"
          :icon="item.icon"
          @click="eventHandle(item.method)"
          :key="item.title"
        >
          {{ item.title }}
        </el-button>
      </template>
      <template v-else>
        <slot :name="item.title"></slot>
      </template>
    </template>
  </div>
</template>



<script>
export default {
  name: "MainHeader",
  props: ["headerTitle"],
  methods: {
    eventHandle(val) {
      this.$emit(val);
    },
  },
};
</script>

<style>
</style>