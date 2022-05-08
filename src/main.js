import Vue from 'vue'
import VueRouter from 'vue-router'
import routes from './routes'
import store from './store/index'

import 'admin-lte'
import 'bootstrap'

Vue.use(VueRouter)

// Import top level component
import App from './App.vue'

// Routing logic
const router = new VueRouter({
  routes: routes,
  mode: 'history',
  scrollBehavior: function (to, from, savedPosition) {
    return savedPosition || {x: 0, y: 0}
  }
})

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
