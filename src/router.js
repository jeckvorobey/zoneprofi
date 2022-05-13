import Vue from 'vue'
import VueRouter from 'vue-router'
import DashboardLayout from './layout/DashboardLayout'

Vue.use(VueRouter)

// Routing logic
export default new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  // scrollBehavior: function (to, from, savedPosition) {
  //   return savedPosition || {x: 0, y: 0}
  // },
  routes: [
    {
      path: '/login',
      name: 'login',
      component: () => import('./views/Login'),
      beforeEnter: (to, from, next) => {
        document.body.className = 'login-page'
        next()
      }
    }, {
      path: '/',
      component: DashboardLayout,
      name: 'home',
      meta: {auth: true},
      beforeEnter: (to, from, next) => {
        document.body.className = 'sidebar-mini'
        next()
      },
      children: [
        {
          path: '',
          redirect: {name: 'dashboard'}
        }, {
          path: '/dashboard',
          name: 'dashboard',
          component: () => import('./modules/dashboard/Index.vue')
        }, {
          path: '/users',
          name: 'users',
          component: () => import('./modules/users/Index.vue')
        }, {
          path: '/tags',
          name: 'tags',
          component: () => import('./modules/Tags/TagsIndex.vue')
        }, {
          path: '*',
          name: '404',
          component: () => import('./modules/dashboard/404.vue')
        }
      ]
    }, {
      // not found handler
      path: '*',
      redirect: '/login'
    }
  ]
})
