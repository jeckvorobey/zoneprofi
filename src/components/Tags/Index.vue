<template>
  <div class="content-wrapper">
    <!-- Content Header (Page header) -->
    <section class="content-header">
      <h1>Теги</h1>
      <!-- Main content -->
      <section class="content">
        <Loader v-if="loading" />
        <!-- Default box -->
        <div v-else class="card">
          <TableTags />
        </div>
        <!-- /.box -->
      </section>
      <!-- /.content -->
    </section>
  </div>
</template>

<script>
import { mapActions } from "vuex";
import TableTags from "@/components/Tags/TableTags";

export default {
  name: "index",
  data: function () {
    return {
      loading: false,
    };
  },
  components: {
    TableTags,
  },
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
    this.loading = true;
    await this.loadTagsList();
    this.loading = false;
  },
};
</script>
