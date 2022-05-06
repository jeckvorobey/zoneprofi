<template>
  <div class="content-wrapper">
    <div class="content-header">
      <div class="container-fluid">
        <div class="row mb-2">
          <div class="col-sm-6">
            <h1>Список пользователей</h1>
          </div>
        </div>
        <!-- end row-->
      </div>
      <!--end container-fluid-->
    </div>
    <!-- end content-header-->
    <section class="content">
      <div class="row">
        <div class="col-xs-12">
          <div class="box">
            <!--            <div class="box-header">-->
            <!--              <h3 class="box-title">Data Table With Full Features</h3>-->
            <!--            </div>-->
            <div class="box-body">
              <div class="dataTables_wrapper form-inline dt-bootstrap">
                <div class="row">
                  <div class="col-sm-6">
                    <div class="dataTables_length" id="example1_length">
                      <label>Показывать по:
                        <select class="form-control input-sm"
                                v-model="select">
                          <option
                              v-for="(select, index) in selects"
                              :key="index"
                          >{{ select }}
                          </option>
                        </select> записей
                      </label>
                    </div>
                  </div>
                  <div class="col-sm-6">
                    <div id="example1_filter" class="dataTables_filter">
                      <label>Search:
                        <input type="search" class="form-control input-sm" placeholder=""
                               aria-controls="example1"></label>
                    </div>
                  </div>
                </div>
                <div class="row">
                  <div class="col-sm-12">
                    <table id="example1" class="table table-bordered table-striped dataTable" role="grid"
                           aria-describedby="example1_info">
                      <thead>
                      <tr role="row">
                        <th class="sorting_asc" tabindex="0" aria-controls="example1" rowspan="1" colspan="1"
                            aria-sort="ascending" aria-label="Rendering engine: activate to sort column descending"
                        >
                          ID
                        </th>
                        <th class="sorting" tabindex="0" aria-controls="example1" rowspan="1" colspan="1"
                            aria-label="Browser: activate to sort column ascending">
                          Имя/Логин
                        </th>
                        <th class="sorting" tabindex="0" aria-controls="example1" rowspan="1" colspan="1"
                            aria-label="Platform(s): activate to sort column ascending">
                          Телеграм
                        </th>
                        <th class="sorting" tabindex="0" aria-controls="example1" rowspan="1" colspan="1"
                            aria-label="CSS grade: activate to sort column ascending">
                          Часы работы
                        </th>
                        <th class="sorting" tabindex="0" aria-controls="example1" rowspan="1" colspan="1"
                            aria-label="CSS grade: activate to sort column ascending">
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
                          <a href="#">
                            {{ item['1'].info.name }}
                            {{ item['1'].info.login !== '' ? ' / ' + item['1'].info.login : '' }}
                            ({{ item['1'].info.balans }} &#8381;)
                          </a>
                        </td>
                        <td class="sorting">@{{ item['1'].info.TGname }}</td>
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
                  <div class="col-sm-5">
                    <div class="dataTables_info" id="example1_info" role="status" aria-live="polite">Показано с
                      {{ fromPageNumber + 1 }} по {{ toPageNumber }}
                      из
                      {{ users.length }} записей
                    </div>
                  </div>
                  <div class="col-sm-7">
                    <nav aria-label="Page navigation">
                      <ul class="pagination">
                        <li class="paginate_button"
                            :class="{'active': page === pageNumber}"
                            v-for="page in pages"
                            :key="page.id"
                        >
                          <span @click="pageClick(page)">{{ page }}</span>
                        </li>

                        <!--                        <li class="paginate_button previous disabled" id="example1_previous">-->
                        <!--                          <a href="#"-->
                        <!--                             aria-controls="example1"-->
                        <!--                             data-dt-idx="0"-->
                        <!--                             tabindex="0">Previous-->
                        <!--                          </a>-->
                        <!--                        </li>-->
                        <!--                        <li class="paginate_button active">-->
                        <!--                          <a href="#" aria-controls="example1" data-dt-idx="1"-->
                        <!--                                                              tabindex="0">1</a></li>-->
                        <!--                        <li class="paginate_button "><a href="#" aria-controls="example1" data-dt-idx="2"-->
                        <!--                                                        tabindex="0">2</a></li>-->
                        <!--                        <li class="paginate_button "><a href="#" aria-controls="example1" data-dt-idx="3"-->
                        <!--                                                        tabindex="0">3</a></li>-->
                        <!--                        <li class="paginate_button "><a href="#" aria-controls="example1" data-dt-idx="4"-->
                        <!--                                                        tabindex="0">4</a></li>-->
                        <!--                        <li class="paginate_button "><a href="#" aria-controls="example1" data-dt-idx="5"-->
                        <!--                                                        tabindex="0">5</a></li>-->
                        <!--                        <li class="paginate_button "><a href="#" aria-controls="example1" data-dt-idx="6"-->
                        <!--                                                        tabindex="0">6</a></li>-->
                        <!--                        <li class="paginate_button next" id="example1_next"><a href="#" aria-controls="example1"-->
                        <!--                                                                               data-dt-idx="7" tabindex="0">Next</a>-->
                        <!--                        </li>-->
                      </ul>
                    </nav>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <h1></h1>
    </section>
  </div>
  <!--  end content-wrapper -->
</template>

<script>
import {mapActions, mapState} from 'vuex'

export default {
  name: 'UsersIndex',
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
    loadUsersList () {
      this.LOAD_USERS_LIST(this.user.avtkey)
    },
    pageClick (page) {
      this.pageNumber = page
    }
  },
  computed: {
    ...mapState('user', ['user']),
    ...mapState('users', ['users']),
    pages () {
      if (this.users) {
        return Math.ceil(this.users.length / +this.select)
      }
    },
    paginatedUsers () {
      if (this.users) {
        this.fromPageNumber = (this.pageNumber - 1) * +this.select
        this.toPageNumber = this.fromPageNumber + +this.select
        return this.users.slice(this.fromPageNumber, this.toPageNumber)
      }
    }
  },
  mounted () {
    this.loadUsersList()
  }
}
</script>
