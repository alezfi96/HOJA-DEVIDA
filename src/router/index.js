import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import VistaView from '../views/VistaView.vue'
import InforView from '../views/InforView.vue'
import LaboralView from '../views/LaboralView.vue'
import RefeView from '../views/RefeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/Principal',
    name: 'Principal',
    component: VistaView
  },
  {
    path: '/informacion',
    name: 'informacion',
    component: InforView
  },
  {
    path: '/laboral',
    name: 'laboral',
    component: LaboralView
  },
  {
    path: '/referencias',
    name: 'referencias',
    component: RefeView
  },

]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
