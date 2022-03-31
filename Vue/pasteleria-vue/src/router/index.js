import { createRouter, createWebHashHistory } from 'vue-router'
import Bienvenida from '../views/Bienvenida.vue'

const routes = [
  {
    path: '/',
    name: 'bienvenida',
    component: Bienvenida
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/pedido',
    name: 'pedido',
    component: () => import(/* webpackChunkName: "about" */ '../views/Pedido.vue')
  },
  {
    path: '/pastelero',
    name: 'pastelero',
    component: () => import(/* webpackChunkName: "about" */ '../views/Pastelero.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
