import Vue from 'vue'
import router from './router'
import store from './store/index'
import Paginate from 'vuejs-paginate'

import 'bootstrap/dist/js/bootstrap.min'
import 'bs-custom-file-input/dist/bs-custom-file-input.min'
import 'admin-lte/dist/js/adminlte.min'
import '@fortawesome/fontawesome-free/js/all.min'

// Import top level component
import App from './App.vue'

Vue.component('Paginate', Paginate)

// Check local storage to handle refreshes
if (localStorage.getItem('avtkey')) {
  store.dispatch('user/AUTH_KEY_USER', window.localStorage.getItem('avtkey'))
    .then(() => {
      // Some middleware to help us ensure the user is authenticated.
      if (store.getters['user/GET_USER']) {
        router.push('/')
      }
    }).catch(e => console.log(e))
}

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.auth) && !store.getters['user/GET_USER']) {
    next('/login')
  } else {
    next()
  }
})

// Start out app!
// eslint-disable-next-line no-new
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
