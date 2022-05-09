import Login from './views/Login.vue'
import Dashboard from './views/Dashboard.vue'
import DashboardIndex from './modules/dashboard/Index.vue'
import UsersIndex from './modules/users/Index'
import NotFound from './modules/dashboard/404.vue'

// Routes
const routes = [
  {
    path: '/login',
    name: 'login',
    component: Login,
    beforeEnter: (to, from, next) => {
      document.body.className = 'login-page'
      next()
    }
  }, {
    path: '/',
    component: Dashboard,
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
        component: DashboardIndex
      }, {
        path: '/users',
        name: 'users',
        component: UsersIndex
      }, {
        path: '*',
        name: '404',
        component: NotFound
      }
    ]
  }, {
    // not found handler
    path: '*',
    redirect: '/login'
  }
]

export default routes
