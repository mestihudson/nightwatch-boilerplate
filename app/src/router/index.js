import Vue from 'vue'
import Router from 'vue-router'

const Principal = () => import('@/views/Principal')
const Leitores = () => import('@/views/Leitores')
const Livros = () => import('@/views/Livros')
const Emprestimos = () => import('@/views/Emprestimos')

Vue.use(Router)

const router = new Router({
  routes: [
    { path: '/emprestimos', name: 'emprestimos', component: Emprestimos },
    { path: '/livros', name: 'livros', component: Livros },
    { path: '/leitores', name: 'leitores', component: Leitores },
    { path: '/', name: 'principal', component: Principal }
  ]
})

export default router
