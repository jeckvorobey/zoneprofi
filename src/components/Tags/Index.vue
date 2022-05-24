<template>
  <div class="content-wrapper">
    <!-- Content Header (Page header) -->
    <section class="content-header">
      <h1>Теги</h1>
      <!-- Main content -->
      <section class="content">
        <!-- Default box -->
        <div class="box"></div>
        <!-- /.box -->
      </section>
      <!-- /.content -->
    </section>
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  name: "index",
  methods: {
    ...mapActions("tags", ["loadTags"]),
    async loadTagsList() {
      try {
        await this.loadTags();
      } catch (e) {
        console.log(`ERR loadrtags >>> ${e}`);
      }
    },
  },
  async mounted() {
    await this.loadTagsList();
  },
};
</script>
