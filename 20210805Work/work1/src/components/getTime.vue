<template>
  <div class="getTime">
    <h1>getTime</h1>
    <button v-on:click="getDate">现在的时间是?</button>
    <p>{{ date }}</p>
  </div>
</template>

<script>
export default {
  name: "getTime",
  data() {
    return {
      date: "",
    };
  },
  methods: {
    getDate: function () {
      this.date = Date();
    },
  },
};
</script>

<style></style>
