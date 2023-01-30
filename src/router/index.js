import { createRouter, createWebHistory } from 'vue-router'
import MainPage from '../views/MainPage.vue'
import ItemDetailPage from '../views/ItemDetailPage.vue'
import ItemInsertPage from '../views/ItemInsertPage.vue'

const routes = [
  {
    path: '/',
    name: 'main',
    component: MainPage
  },
  {
    path: '/detail',
    name: 'detail',
    component: ItemDetailPage
  },
  {
    path: '/insert',
    name: 'insert',
    component: ItemInsertPage
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
