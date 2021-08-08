import Vue from 'vue'
import VueRouter from 'vue-router'
import getArticle from '../components/getArticle.vue'
import getTime from '../components/getTime.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/getArticle',
    name: 'getArticle',
    component: getArticle
  },
  {
    path: '/getTime',
    name: 'getTime',
    component: getTime
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
