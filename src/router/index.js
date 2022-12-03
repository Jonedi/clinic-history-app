import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/perfil',
    name: 'perfil',
    component: () => import('../views/PerfilView.vue')
  },
  {
    path: '/registro',
    name: 'registro',
    component: () => import('../views/RegistroView.vue')
  },
  {
    path: '/editar-hv/:id',
    name: 'EditarHC',
    component: () => import('../views/EditarHC.vue')
  },
  {
    path: '/agregarHC',
    name: 'agregarHC',
    component: () => import('../views/AgregarHC.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
