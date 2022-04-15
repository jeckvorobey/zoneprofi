import Vue from 'vue'
import VueRouter from 'vue-router'

import routes from './routes'
import store from './store/index'

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
if (window.localStorage) {
  if (window.localStorage.getItem('avtkey')) {
    store.dispatch('user/AUTH_KEY_USER', window.localStorage.getItem('avtkey'))
      .then(() => {
        router.resolve('/dashboard')
      })
      .catch(e => console.log(e))
  }
}
// Some middleware to help us ensure the user is authenticated.
router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth) && (store.getters['user/GET_USER'] === null)) {
    next('/login')
  } else if ((store.getters['user/GET_USER'] !== null && to.path === '/login')) {
    next('/dashboard')
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

require('bootstrap')
require('admin-lte')
require('../node_modules/admin-lte/dist/js/demo.js')
