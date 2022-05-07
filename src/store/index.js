import Vue from 'vue'
import Vuex from 'vuex'
import user from './user/index'
import users from './users/index'
import modal from './modal/index'

Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    user,
    users,
    modal
  }
})

export default store
