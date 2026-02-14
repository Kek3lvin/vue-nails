import { createRouter, createWebHistory } from 'vue-router'
import AgendarView from '../views/AgendarView.vue'
import LoginView from '../views/LoginView.vue'
import DashboardView from '../views/DashboardView.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', component: AgendarView },
    { path: '/login', component: LoginView },
    { path: '/dashboard', component: DashboardView },
  ]
})

export default router
