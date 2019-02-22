import Vue from 'vue'
import Router from 'vue-router'

const Principal = () => import('@/views/Principal')
const Usuarios = () => import('@/views/Usuarios')

Vue.use(Router)

const router = new Router({
  routes: [
    { path: '/', name: 'principal', component: Principal },
    { path: '/usuarios', name: 'usuarios', component: Usuarios }
  ]
})

export default router
