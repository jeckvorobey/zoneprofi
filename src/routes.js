// Routes
const routes = [
  {
    path: '/login',
    name: 'login',
    component: () => import('./views/Login.vue'),
    beforeEnter: (to, from, next) => {
      document.body.className = 'login-page'
      next()
    }
  }, {
    path: '/',
    component: () => import('./views/Dashboard.vue'),
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

export default routes
