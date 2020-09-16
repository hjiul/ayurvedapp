import Vue from 'vue'
import VueRouter from 'vue-router'
import dashboard from '../views/dashboard.vue'
import factura from '../views/factura.vue'
import client from '../views/client.vue'
import formularios from '../views/formularios.vue'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'dashboard',
    component: dashboard
  },
  {
    path: '/client',
    name: 'client',
    component: client
  },
  {
    path: '/factura',
    name: 'factura',
    component: factura
  },
  {
    path: '/formularios',
    name: 'formularios',
    component: formularios
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
