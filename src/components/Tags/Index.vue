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
  props: ["id"],
  data: function () {
    return {
      loading: true,
    };
  },
  components: {
    TableTags,
  },
  methods: {
    ...mapActions("tags", ["loadTagsSubcategoryId"]),
    async loadTagsList(id) {
      try {
        await this.loadTagsSubcategoryId(id);
        this.loading = false;
      } catch (e) {
        console.log(`ERR loadrtags >>> ${e}`);
      }
    },
  },
  watch: {
    id: function () {
      this.loading = true;
      this.loadTagsList(this.id);
      this.loading = false;
    },
  },
  async mounted() {
    await this.loadTagsList(this.$route.params.id);
    this.loading = false;
  },
};
</script>
