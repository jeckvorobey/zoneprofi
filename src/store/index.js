import Vue from 'vue'
import Vuex from 'vuex'
import auth from './auth/index'

Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    auth
  }
})

export default store
