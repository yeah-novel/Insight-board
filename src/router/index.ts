import { createRouter, createWebHistory } from 'vue-router'
import AdminLayout from '@/layouts/AdminLayout.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),

  routes: [
    {
      path: '/',
      component: AdminLayout,
      redirect: '/dashboard',
      children: [
        {
          path: 'dashboard',
          name: 'Dashboard',
          component: () => import('@/views/DashboardView.vue'),
          meta: { title: '首页总览' },
        },
        {
          path: 'sales',
          name: 'Sales',
          component: () => import('@/views/SalesView.vue'),
          meta: { title: '销售分析' },
        },
        {
          path: 'customers',
          name: 'Customers',
          component: () => import('@/views/CustomersView.vue'),
          meta: { title: '客户管理' },
        },
        {
          path: 'orders',
          name: 'Orders',
          component: () => import('@/views/OrdersView.vue'),
          meta: { title: '订单管理' },
        },
        {
          path: 'reports',
          name: 'Reports',
          component: () => import('@/views/DashboardView.vue'),
          meta: { title: '数据报表' },
        },
        {
          path: 'settings',
          name: 'Settings',
          component: () => import('@/views/PlaceholderView.vue'),
          meta: { title: '系统设置' },
        },
      ],
    },
  ],

  scrollBehavior() {
    return { top: 0 }
  },
})

export default router