const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Index.vue') },
      {
        path: '/1-intro-to-floats',
        component: () => import('pages/1-intro-to-floats.vue')
      },
      {
        path: '/2-flexbox-intro',
        component: () => import('pages/2-flexbox-intro.vue')
      },
      {
        path: '/3-flexbox-grid',
        component: () => import('pages/3-flexbox-grid.vue')
      },
      {
        path: '/4-flexbox-pie',
        component: () => import('pages/4-flexbox-pie.vue')
      }
    ]
  }
]

// Always leave this as last one
if (process.env.MODE !== 'ssr') {
  routes.push({
    path: '*',
    component: () => import('pages/Error404.vue')
  })
}

export default routes
