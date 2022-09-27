import { createRouter, createWebHistory } from "vue-router";
import Principal from '../pages/Principal.vue'
import Favoritos from '../pages/Favoritos.vue'
import Perfil from '../pages/Perfil.vue'

const routes = [
  {
    path:'/',
    name:'principal',
    component: () => import('../pages/Principal.vue')
  },
  {
    path:'/perfil/:perfil',
    name: 'perfil',
    props: true,
    component: () => import('../pages/Perfil.vue')
  },
  {
    path:'/favoritos',
    name:'favoritos',
    props: true,
    component: () => import('../pages/Favoritos.vue')
  }
]

const router = createRouter ({
  history:createWebHistory(),
  routes:routes
})

export default router