<template>
  <div class="card">
    <div class="card-body login-card-body">
      <div class="login-box-body">
        <p class="login-box-msg">Для входа введите логин/пароль</p>
        <form @submit.prevent="userAuth">
          <div v-if="error" class="alert alert-danger">
            <a class="close" data-dismiss="alert">&times;</a>
            {{ error }}
          </div>
          <!--        <div class="card">-->
          <div class="input-group form-group row mb-3">
            <input type="text" class="form-control" placeholder="Логин" v-model="form.credentials.login" />
            <div class="input-group-append">
              <div class="input-group-text">
                <i class="fa fa-user"></i>
              </div>
            </div>
          </div>
          <div class="input-group form-group row mb-3">
            <input type="password" class="form-control" placeholder="Пароль" v-model="form.credentials.pas" />
            <div class="input-group-append">
              <div class="input-group-text">
                <i class="fa fa-key"></i>
              </div>
            </div>
          </div>
          <div class="input-group form-group row justify-content-between mb-3">
            <div class="custom-control custom-checkbox">
              <input type="checkbox" class="custom-control-input" id="rememberMe" v-model="form.checked" />
              <label class="custom-control-label" for="rememberMe">Запомнить меня</label>
            </div>
            <div class="col-4">
              <button type="submit" class="btn btn-primary btn-block n-flat" :disabled="isDisabled">Вход</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";

export default {
  name: "Login",
  data: function () {
    return {
      form: {
        checked: false,
        credentials: {
          login: "",
          pas: "",
        },
      },
      error: "",
    };
  },
  methods: {
    ...mapActions("user", ["authUser"]),
    userAuth() {
      console.log(`form ${JSON.stringify(this.form)}`);
      if (this.form.credentials.pas !== "" && this.form.credentials.login !== "") {
        this.authUser(this.form)
          .then(() => {
            this.$router.push({ name: "dashboard" });
          })
          .catch((e) => {
            this.error = e.message;
            console.log(e);
          });
      } else {
        this.error = "Поля должны быть заполнены";
      }
    },
  },
  computed: {
    isDisabled() {
      return !(this.form.credentials.login !== "" && this.form.credentials.pas !== "");
    },
  },
};
</script>
