import { type RouteRecordRaw } from 'vue-router'
const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'Layout',
    component: () => import('@/layout/index.vue'),
    children: [
      {
        path: '',
        name: 'Dashboard',
        component: () => import('@/views/dashboard/index.vue'),
      },
      {
        path: '/organization',
        name: 'Organization',
        component: () => import('@/views/organization/index.vue'),
      },
      {
        path: '/department',
        name: 'Department',
        component: () => import('@/views/department/index.vue'),
      },
      {
        path: '/faculty',
        name: 'Faculty',
        component: () => import('@/views/faculty/index.vue'),
      },
      {
        path: 'division',
        name: 'Division',
        component: () => import('@/views/division/index.vue'),
      },
    ],
  },
]

export default routes
