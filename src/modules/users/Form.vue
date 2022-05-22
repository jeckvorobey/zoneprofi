<template>
  <div class="card card-primary">
    <div class="card-header">
      <h3>{{ getUserInfo.name }}</h3>
      <p class="m-0">{{ getUserInfo.role !== "" ? getUserInfo.role : "Пользователь" }}</p>
    </div>
    <div class="card-body">
      <div class="container">
        <div>Дата регистрации: <span>{{ getUserInfo.date }}</span></div>
        <div>Баланс: <span>{{ getUserInfo.balans }}</span> <i class="fa fa-ruble-sign"></i></div>
        <form id-user="">
          <div class="form-group row">
            <div class="col-sm-1-12">
              <label for="inputTgName" class="col-sm-1-12 col-form-label">Телеграм: </label>
              <div class="input-group">
                <div class="input-group-prepend">
                  <span class="input-group-text">
                    <i class="fa fa-paper-plane"></i>
                  </span>
                  <input
                    type="text"
                    v-model="getUserInfo.TGname"
                    disabled
                    class="form-control"
                    name="inputTgName"
                    id="inputTgName"
                    placeholder=""
                  />
                </div>
              </div>
            </div>
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
  },
  mounted() {},
};
</script>
