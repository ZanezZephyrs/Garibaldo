import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/votacao',
    name: 'votacao',
    component: () => import('../views/votacao.vue')
  },
  {
    path: '/add_pergunta',
    name: 'add_pergunta',
    component: () => import('../views/add_pergunta.vue') 
  },
  {
    path: '/ordemdefala',
    name: 'ordemdefala',
    component: () => import('../views/ListaFala.vue') 
  },
  {
    path: '/Form',
    name: 'Form',
    component: () => import('../views/Form.vue') 
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
