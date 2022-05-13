<template>
  <div id="app">
    <component :is="layout">
      <router-view />
    </component>
  </div>
</template>

<script>
import HomeLayout from "./layout/HomeLayout";
import EmptyLayout from "./layout/EmptyLayout";

export default {
  name: "App",
  components: {
    HomeLayout,
    EmptyLayout,
  },
  computed: {
    layout() {
      return (this.$route.meta.layout || "empty") + "-layout";
    },
  },
};
</script>
<style lang="scss">
@import "assets/style/styles";
</style>
