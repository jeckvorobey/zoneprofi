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
                <div class="dataTables_wrapper form-inline dt-bootstrap4">
                  <div class="row">
                    <div class="col--6">
                      <div class="dataTables_length" id="example_length">
                        <label>Показывать по:
                          <select class="form-control input-sm"
                                  v-model="select">
                            <option
                              v-for="(select, index) in selects"
                              :key="index"
                            >{{ select }}
                            </option>
                          </select>записей
                        </label>
                      </div>
                    </div>
                    <div class="col-sm-12 col-md-6">
                      <div class="card-tools">
                        <div class="input-group input-group-sm">
                          <input type="text" name="table_search" class="form-control float-right" placeholder="Search">
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
                      <table class="table table-responsive table-hover table-head-fixed">
                        <thead class="text-nowrap">
                        <tr>
                          <th class="sorting">
                            ID
                          </th>
                          <th class="sorting" >
                            Имя/Логин
                          </th>
                          <th class="sorting" >
                            Телеграм
                          </th>
                          <th class="sorting">
                            Теги
                          </th>
                          <th class="sorting">
                            Часы работы
                          </th>
                          <th class="sorting">
                            Дополнительно
                          </th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr
                          role="row"
                          class="odd"
                          :class="{ 'bg-yellow-active': item['1'].info.moder === '0' }"
                          v-for="(item) in this.paginatedUsers"
                          :key="item.id"
                        >
                          <td class="sorting">{{ item['0'] }}</td>
                          <td class="sorting">
                          <span @click="toggleModal">
                            {{ item['1'].info.name }}
                            {{ item['1'].info.login !== '' ? ' / ' + item['1'].info.login : '' }}
                            ({{ item['1'].info.balans }} &#8381;)
                          </span>
                          </td>
                          <td class="sorting">@{{ item['1'].info.TGname }}</td>
                          <td class="sorting">{{ item['1'].tags}}</td>
                          <td class="sorting">{{ item['1'].work[Object.keys(item['1'].work)[0]] }}</td>
                          <td class="sorting center">
                            <span class="glyphicon glyphicon-pencil"></span>
                            <span
                              class="glyphicon glyphicon-ban-circle"
                              v-if="item['1'].info.ban === '0'">
                          </span>
                            <span class="glyphicon glyphicon-trash" aria-hidden="true"></span>
                          </td>
                        </tr>
                        </tbody>
                        <!--                      <tfoot>-->
                        <!--                      <tr>-->
                        <!--                        <th rowspan="1" colspan="1">Rendering engine</th>-->
                        <!--                        <th rowspan="1" colspan="1">Browser</th>-->
                        <!--                        <th rowspan="1" colspan="1">Platform(s)</th>-->
                        <!--                        <th rowspan="1" colspan="1">Engine version</th>-->
                        <!--                        <th rowspan="1" colspan="1">CSS grade</th>-->
                        <!--                      </tr>-->
                        <!--                      </tfoot>-->
                      </table>
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-sm-12 col-md-5">
                      <div class="dataTables_info" id="example1_info" role="status" aria-live="polite">Показано с
                        {{ fromPageNumber + 1 }} по {{ toPageNumber }}
                        из 666 записей
                      </div>
                    </div>
                    <div class="col-sm-12 col-md-7">
                      <div class="dataTables_paginate paging_simple_numbers" id="example2_paginate">
                        <ul class="pagination">
                          <!--                          <li class="paginate_button page-item previous disabled" id="example2_previous">-->
                          <!--                            <a href="#" -->
                          <!--                               aria-controls="example2"-->
                          <!--                               data-dt-idx="0"-->
                          <!--                               tabindex="0"-->
                          <!--                               class="page-link">Previous</a>-->
                          <!--                          </li>-->
                          <li class="paginate_button page-item"
                              :class="{'active': page === pageNumber}"
                              v-for="page in pages"
                              :key="page.id"
                          >
                            <a href="#" class="page-link" @click.prevent="pageClick(page)">{{ page }}</a>
                          </li>
                          <!--       <li class=" paginate_button page-item next" -->
                          <!--                              id="example2_next">-->
                          <!--                            <a href="#"-->
                          <!--                               aria-controls="example2"-->
                          <!--                               data-dt-idx="7" tabindex="0"-->
                          <!--                               class="page-link">Next-->
                          <!--                            </a>-->
                          <!--                          </li>-->
                        </ul>
                      </div>
                    </div>
                    <!--                    <div class="col-sm-12 col-md-7">-->
                    <!--                      <div class="container-fluid">-->
                    <!--                        <nav class="dataTables_paginate paging_simple_numbers">-->
                    <!--                          <ul class="pagination">-->
                    <!--                            <li class="paginate_button"-->
                    <!--                                :class="{'active': page === pageNumber}"-->
                    <!--                                v-for="page in pages"-->
                    <!--                                :key="page.id"-->
                    <!--                            >-->
                    <!--                              <span @click="pageClick(page)">{{ page }}</span>-->
                    <!--                            </li>-->
                    <!--                          </ul>-->
                    <!--                        </nav>-->
                    <!--                      </div>-->
                    <!--                    </div>-->
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <h1></h1>
    </section>
    <modal v-if="showModal"></modal>
  </div>
  <!--  end content-wrapper -->
</template>

<script>
import {mapActions, mapGetters} from 'vuex'
import Modal from '../../components/Modal'

export default {
  name: 'UsersIndex',
  components: {
    Modal
  },
  data: function () {
    return {
      pageNumber: 1,
      fromPageNumber: null,
      toPageNumber: null,
      selects: [10, 25, 50, 100],
      select: 10
    }
  },
  methods: {
    ...mapActions('users', ['LOAD_USERS_LIST']),
    ...mapActions('modal', ['toggleInVisible']),
    loadUsersList () {
      return new Promise(() => {
        this.LOAD_USERS_LIST(this.GET_USER.avtkey)
      })
    },
    pageClick (page) {
      this.pageNumber = page
    },
    toggleModal () {
      this.toggleInVisible()
    }
  },
  computed: {
    ...mapGetters('user', ['GET_USER']),
    ...mapGetters('users', ['GET_USERS']),
    ...mapGetters('modal', ['GET_INVISIBLE']),
    pages () {
      if (this.GET_USER) {
        return Math.ceil(this.GET_USERS.length / +this.select)
      }
    },
    paginatedUsers () {
      if (this.GET_USERS) {
        this.fromPageNumber = (this.pageNumber - 1) * +this.select
        this.toPageNumber = this.fromPageNumber + +this.select
        return this.GET_USERS.slice(this.fromPageNumber, this.toPageNumber)
      }
    },
    showModal () {
      return this.GET_INVISIBLE
    }
  },
  mounted () {
    this.loadUsersList()
  }
}
</script>
