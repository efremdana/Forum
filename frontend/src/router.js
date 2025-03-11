import { createRouter, createWebHistory } from 'vue-router'

import ViewArticle from '@/components/ViewArticle.vue'
import ListArticle from '@/components/ListArticle.vue'

const routes = [
  { name: 'ListArticle', path: '/', component: ListArticle },
  { name: 'ViewArticle', path: '/article/:articleID', component: ViewArticle },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
