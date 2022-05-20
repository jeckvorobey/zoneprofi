<template>
  <div class="content-wrapper">
    <section class="content-header">
      <div class="container-fluid">
        <div class="row mb-2">
          <div class="col-sm-6">
            <h1>Список пользователей</h1>
          </div>
        </div>
        <!-- end row-->
      </div>
      <!--end container-fluid-->
    </section>
    <!-- end content-header-->
    <section class="content">
      <div class="container-fluid">
        <div class="row">
          <div class="col-12">
            <div class="card">
              <!--              <div class="card-header">-->

              <!--              </div>-->
              <div class="card-body">
                <div class="dataTables_wrapper dt-bootstrap4">
                  <div class="row">
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
                  <div class="row">
                    <div class="col-sm-12">
                      <table
                        id="table_users"
                        class="table table-responsive table-bordered table-striped table-hover dataTable table-head-fixed"
                      >
                        <thead class="text-nowrap">
                          <tr>
                            <th class="sorting">ID</th>
                            <th class="sorting">Имя/Логин</th>
                            <th class="sorting">Телеграм</th>
                            <th class="sorting">Теги</th>
                            <th class="sorting">Часы работы</th>
                            <th class="sorting">Дополнительно</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr
                            role="row"
                            class="odd"
                            :class="{ 'bg-orange': item['1'].info.moder === '0' }"
                            v-for="item in paginatedUsers"
                            :key="item.id"
                          >
                            <td class="sorting">{{ item["0"] }}</td>
                            <td class="sorting" @click="showModal(item['0'])">
                              <a>
                                {{ item["1"].info.name }}
                                {{ item["1"].info.login !== "" ? " / " + item["1"].info.login : "" }}
                                ({{ item["1"].info.balans }} &#8381;)
                              </a>
                            </td>
                            <td class="sorting">@{{ item["1"].info.TGname }}</td>
                            <td class="sorting">{{ item["1"].tags }}</td>
                            <td class="sorting">{{ item["1"].work[Object.keys(item["1"].work)[0]] }}</td>
                            <td class="sorting btn-group">
                              <button class="btn btn-default">
                                <i class="fa fa-pen" aria-hidden="true"></i>
                              </button>
                              <button class="btn btn-default">
                                <i class="fa fa-ban" aria-hidden="true"></i>
                              </button>
                              <button class="btn btn-default">
                                <i class="fa fa-trash" aria-hidden="true"></i>
                              </button>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-sm-12 col-md-5">
                      <div class="dataTables_info" id="example1_info" role="status" aria-live="polite">
                        Показано с {{ fromPageNumber + 1 }} по {{ toPageNumber }} из {{ this.GET_USERS.length }} записей
                      </div>
                    </div>
                    <div class="col-sm-12 col-md-7">
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
            </div>
          </div>
        </div>
      </div>
      <h1></h1>
    </section>
    <modal name="userInfo">
      <Form />
    </modal>
  </div>
  <!--  end content-wrapper -->
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import Form from "../users/Form";

export default {
  name: "UsersIndex",
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
  components: {
    Form,
  },
  methods: {
    ...mapActions("users", ["LOAD_USERS_LIST"]),
    loadUsersList() {
      this.LOAD_USERS_LIST(this.GET_USER.avtkey);
    },
    pageClick(page) {
      this.pageNumber = page;
    },
    showModal(idUser) {
      this.$modal.show(Form, { idUser });
    },
  },
  computed: {
    ...mapGetters("user", ["GET_USER"]),
    ...mapGetters("users", ["GET_USERS"]),
    // eslint-disable-next-line vue/return-in-computed-property
    pages() {
      if (this.GET_USERS.length > 0) {
        return Math.ceil(this.GET_USERS.length / +this.select);
      }
    },
    // eslint-disable-next-line vue/return-in-computed-property
    paginatedUsers() {
      if (this.GET_USERS) {
        // eslint-disable-next-line vue/no-side-effects-in-computed-properties
        this.fromPageNumber = (this.pageNumber - 1) * +this.select;
        // eslint-disable-next-line vue/no-side-effects-in-computed-properties
        this.toPageNumber = this.fromPageNumber + +this.select;
        return this.GET_USERS.slice(this.fromPageNumber, this.toPageNumber).filter((users) =>
          users["1"].info.name.includes(this.search)
        );
      }
    },
  },
  async mounted() {
    await this.loadUsersList();
  },
};
</script>
