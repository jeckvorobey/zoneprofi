<template>
  <div class="login-box">
    <div class="login-logo">
      <router-link to="/"><b>Zone</b>PRO</router-link>
    </div>
    <!-- /.login-logo -->
    <div class="login-box-body">
      <p class="login-box-msg">Для входа введите логин/пароль</p>
      <form @submit.prevent="userAuth">

        <div v-if="error" class="alert alert-danger">
          <a class="close" data-dismiss="alert">&times;</a>
          {{ error }}
        </div>

        <div class="form-group has-feedback">
          <input type="text" class="form-control" placeholder="Логин" v-model="credentials.login">
          <span class="glyphicon glyphicon-user form-control-feedback"></span>
        </div>
        <div class="form-group has-feedback">
          <input type="password" class="form-control" placeholder="Пароль" v-model="credentials.pas">
          <span class="glyphicon glyphicon-lock form-control-feedback"></span>
        </div>
        <div class="row">
          <div class="col-xs-8">
            <div class="checkbox icheck">
            <label>
              <div class="icheckbox_square-blue" aria-checked="false" aria-disabled="false"><input type="checkbox"></div>
              Запомнить меня
            </label>
            </div>
          </div>
          <!-- /.col -->
          <div class="col-xs-4">
            <button type="submit" class="btn btn-primary btn-block btn-flat" :disabled="isDisabled">Вход</button>
          </div>
          <!-- /.col -->
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  name: 'Login',
  data: function () {
    return {
      credentials: {
        login: '',
        pas: ''
      },
      error: ''
    }
  },
  methods: {
    ...mapActions(['auth/auth']),
    userAuth: function () {
      if (this.credentials.password !== '' && this.credentials.username !== '') {
        this.$store.dispatch('auth/auth', this.credentials)
      } else {
        this.error = 'Поля должны быть заполнены'
      }
    }
  },
  computed: {
    isDisabled () {
      return !(this.credentials.username !== '' && this.credentials.password !== '')
    }
  },
  mounted: function () {
    require('icheck')

    $('input').iCheck({
      checkboxClass: 'icheckbox_square-blue',
      radioClass: 'iradio_square-blue',
      increaseArea: '20%' // optional
    })
  }
}
</script>
