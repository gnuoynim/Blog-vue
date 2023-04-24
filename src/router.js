import { createWebHistory, createRouter } from 'vue-router'
import List from './components/List.vue'
import Todo from './components/Todo.vue'
import Detail from './components/Detail.vue'

const routes = [
  {
    path: '/list/',
    component: List
  },
  {
    path: '/todo',
    component: Todo
  },
  {
    path: '/detail/:id(\\d+)',
    component: Detail
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
