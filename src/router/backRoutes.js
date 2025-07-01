export const backRoutes = [
  {
    path: '/',
    name: 'Manager',
    component: () => import('@/views/Manager.vue'),
    children: [
      {
        path: '403',
        name: 'NoAuth',
        meta: { name: '无权限' },
        component: () => import('../views/manager/403'),
      },
      {
        path: 'home',
        name: 'Home',
        meta: { name: '系统首页' },
        component: () => import('../views/manager/Home'),
      },
      {
        path: 'admin',
        name: 'Admin',
        meta: { name: '管理员信息' },
        component: () => import('../views/manager/Admin'),
      },
      {
        path: 'adminPerson',
        name: 'AdminPerson',
        meta: { name: '个人信息' },
        component: () => import('../views/manager/AdminPerson'),
      },
      {
        path: 'password',
        name: 'Password',
        meta: { name: '修改密码' },
        component: () => import('../views/manager/Password'),
      },
      {
        path: 'notice',
        name: 'Notice',
        meta: { name: '公告信息' },
        component: () => import('../views/manager/Notice'),
      },
      {
        path: 'information',
        name: 'Information',
        meta: { name: '扶贫资讯' },
        component: () => import('../views/manager/Information'),
      },
      {
        path: 'user',
        name: 'User',
        meta: { name: '用户信息' },
        component: () => import('../views/manager/User'),
      },
      {
        path: 'agritainment',
        name: 'Agritainment',
        meta: { name: '农家乐信息' },
        component: () => import('../views/manager/Agritainment'),
      },
      {
        path: 'goods',
        name: 'Goods',
        meta: { name: '商品信息' },
        component: () => import('../views/manager/Goods'),
      },
      {
        path: 'orders',
        name: 'Orders',
        meta: { name: '订单信息' },
        component: () => import('../views/manager/Orders.vue'),
      },
      {
        path: 'apply',
        name: 'Apply',
        meta: { name: '农家乐项目' },
        component: () => import('../views/manager/Apply.vue'),
      },
      {
        path: 'comment',
        name: 'Comment',
        meta: { name: '政策管理' },
        component: () => import('../views/manager/Comment.vue'),
      },
      {
        path: 'index',
        name: 'Index',
        meta: { name: '返回网站' },
        component: () => import('../views/front/Home'),
      },
    ],
  },
]
