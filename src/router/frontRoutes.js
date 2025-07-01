export const frontRoutes = [
  {
    path: '/front',
    name: 'Front',
    component: () => import('@/views/Front.vue'),
    children: [
      {
        path: 'home',
        name: 'FrontHome',
        meta: { title: '前台首页' },
        component: () => import('@/views/front/Home.vue'),
      },
    ],
  },
]
