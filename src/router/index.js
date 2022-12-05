import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import { auth } from '../firebase'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
    meta: { requiresAuth: true }
  },
  {
    path: '/perfil',
    name: 'perfil',
    component: () => import('../views/PerfilView.vue'),
    meta: { requiresAuth: true }
  },
  {
    path: '/signup',
    name: 'signup',
    component: () => import('../views/RegistroView.vue')
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('../views/LoginView.vue')
  },
  {
    path: '/editar-hv/:id',
    name: 'EditarHC',
    component: () => import('../views/EditarHC.vue'),
    meta: { requiresAuth: true }
  },
  {
    path: '/agregarHC',
    name: 'agregarHC',
    component: () => import('../views/AgregarHC.vue'),
    meta: { requiresAuth: true }
  },
  {
    path: '/dashboard',
    name: 'eashboard',
    component: () => import('../views/DashboardUsuario.vue'),
    meta: { requiresAuth: true }
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    const user = auth.currentUser
    // console.log('usuario actual desde router', user)
    if (!user) {
      next({path:'/login'})
    } else {
      next()
    }
  } else {
    next()
  }
})

export default router
