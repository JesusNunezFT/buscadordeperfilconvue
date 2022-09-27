import { createRouter, createWebHistory } from "vue-router";
import Principal from '../pages/Principal.vue'
import Favoritos from '../pages/Favoritos.vue'
import Perfil from '../pages/Perfil.vue'

const routes = [
  {
    path:'/',
    component:Principal
  },
  {
    path:'/perfil',
    component:Perfil
  },
  {
    path:'/favoritos',
    component:Favoritos
  }
]

const router = createRouter ({
  history:createWebHistory(),
  routes:routes
})

export default router