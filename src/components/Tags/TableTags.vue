<template>
  <div class="row">
    <div class="col">
      <div class="row mt-3 px-2">
        <div class="col-md-6 col-sm-12">
          <div class="dataTables_length">
            <label
              >Показывать по:
              <select class="custom-select-sm mx-2" v-model="select">
                <option v-for="(select, index) in selects" :key="index">{{ select }}</option></select
              >записей
            </label>
          </div>
        </div>
        <div class="col-sm-12 col-md-6">
          <div class="card-tools">
            <div class="input-group input-group-sm">
              <input
                type="text"
                name="table_search"
                class="form-control float-right"
                placeholder="Search"
                v-model="search"
              />
              <div class="input-group-append">
                <button type="submit" class="btn btn-default">
                  <i class="fas fa-search"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <table id="tagsTable" class="table table-hover table-bordered">
      <thead>
        <tr role="row">
          <th>ID</th>
          <th>Название</th>
          <th>Дополнительно</th>
        </tr>
      </thead>
      <tbody>
        <tr role="row" v-for="tag in paginatedTags" :key="tag.id">
          <td class="text-center">{{ tag.id }}</td>
          <td class="w-100">{{ tag.title }}</td>
          <td>
            <div class="btn-group d-flex justify-content-center">
              <button class="btn btn-default">
                <i class="fa fa-pen" aria-hidden="true"></i>
              </button>
              <button class="btn btn-default">
                <i class="fa fa-trash" aria-hidden="true"></i>
              </button>
            </div>
          </td>
        </tr>
      </tbody>
    </table>
    <div class="col">
      <div class="row px-2">
        <div class="col-sm-12 col-md-5">
          <div class="dataTables_info" id="example1_info" role="status" aria-live="polite">
            Показано с {{ fromPageNumber + 1 }} по {{ toPageNumber }} из {{ count }} записей
          </div>
        </div>
        <div class="col-sm-12 col-md-7 d-flex justify-content-end">
          <div class="dataTables_paginate paging_simple_numbers">
            <paginate
              :page-count="pages"
              :click-handler="pageClick"
              :prev-text="'Назад'"
              :next-text="'Вперед'"
              :container-class="'pagination'"
              :page-class="'paginate_button page-item'"
              :page-link-class="'page-link'"
              :prev-class="'paginate_button page-item previous'"
              :prev-link-class="'page-link'"
              :next-link-class="'page-link'"
              :next-class="'paginate_button page-item next'"
            >
            </paginate>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "TableTags",
  data: function () {
    return {
      search: "",
      pageNumber: 1,
      fromPageNumber: null,
      toPageNumber: null,
      selects: [10, 25, 50, 100],
      select: 10,
    };
  },
  methods: {
    pageClick(page) {
      this.pageNumber = page;
    },
  },
  computed: {
    ...mapGetters("tags", ["GET_TAGS"]),
    getTags() {
      return this.GET_TAGS;
    },
    pages() {
      if (this.getTags) {
        return +Math.ceil(this.getTags.length / +this.select);
      }
      return 0;
    },
    count() {
      if (this.getTags) {
        return this.getTags.length;
      }
      return null;
    },
    // eslint-disable-next-line vue/return-in-computed-property
    paginatedTags() {
      if (this.getTags) {
        // eslint-disable-next-line vue/no-side-effects-in-computed-properties
        this.fromPageNumber = (this.pageNumber - 1) * +this.select;
        // eslint-disable-next-line vue/no-side-effects-in-computed-properties
        this.toPageNumber = this.fromPageNumber + +this.select;
        return this.getTags
          .slice(this.fromPageNumber, this.toPageNumber)
          .filter((tags) => tags.title.includes(this.search));
      }
    },
  },
  async mounted() {},
};
</script>
