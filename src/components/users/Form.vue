<template>
  <div class="card card-primary">
    <div class="card-header">
      <h3>{{ getUserInfo.name }}</h3>
      <p class="m-0">{{ getUserInfo.role !== "" ? getUserInfo.role : "Пользователь" }}</p>
    </div>
    <div class="card-body">
      <div class="row">
        <div class="col-md-8">
          Дата регистрации: <span>{{ getUserInfo.date }}</span>
        </div>
        <div class="col-md-4">
          Баланс: <span>{{ getUserInfo.balans }}</span> <i class="fa fa-ruble-sign"></i>
        </div>
      </div>
      <div class="row mt-3">
        <form class="w-100" id-user="">
          <div class="row">
            <fieldset class="w-100" disabled>
              <h5>Контакты:</h5>
              <div class="form-group">
                <div class="row justify-content-between">
                  <div class="col-md-6">
                    <label for="inputTgName" class="col-sm-1-12 col-form-label text-sm">Email: </label>
                    <div class="input-group">
                      <div class="input-group-prepend">
                        <span class="input-group-text">
                          <i class="fa fa-at"></i>
                        </span>
                        <input
                          type="text"
                          v-model="getUserCont['3']"
                          class="form-control"
                          name="inputTgName"
                          id="inputTgName"
                          placeholder=""
                        />
                      </div>
                    </div>
                    <label for="inputTgName" class="col-sm-1-12 col-form-label text-sm">Телеграм: </label>
                    <div class="input-group">
                      <div class="input-group-prepend">
                        <span class="input-group-text">
                          <i class="fa fa-paper-plane"></i>
                        </span>
                        <input
                          type="text"
                          v-model="getUserInfo.TGname"
                          class="form-control"
                          name="inputTgName"
                          id="inputTgName"
                          placeholder=""
                        />
                      </div>
                    </div>
                    <label for="inputPhone" class="col-sm-1-12 col-form-label text-sm">Телефон: </label>
                    <div class="input-group">
                      <div class="input-group-prepend">
                        <span class="input-group-text">
                          <i class="fa fa-phone-alt"></i>
                        </span>
                        <input
                          type="text"
                          v-model="getUserCont['2']"
                          class="form-control"
                          name="inputTgName"
                          id="inputTgName"
                          placeholder=""
                        />
                      </div>
                    </div>
                  </div>
                  <div class="col-md-6">
                    <label>Почтовый адрес:</label>
                    <textarea v-model="getUserCont['4']" class="form-control" rows="5"></textarea>
                  </div>
                </div>
              </div>
            </fieldset>
          </div>
          <div class="row">
            <fieldset disabled>
              <h5>Теги:</h5>
              <ul class="d-inline-flex flex-wrap">
                <li class="list-group mr-2" v-for="tag in getUserTags" :key="tag">{{ tag }}</li>
              </ul>
            </fieldset>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "Form",
  props: {
    idUser: {
      type: String,
      required: true,
    },
  },
  computed: {
    ...mapGetters("users", ["GET_USERS"]),
    getUserInfo() {
      return this.GET_USERS[this.idUser].info;
    },
    getUserCont() {
      return this.GET_USERS[this.idUser].cont;
    },
    getUserTags() {
      return this.GET_USERS[this.idUser].tags;
    },
  },
  mounted() {},
};
</script>
