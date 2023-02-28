import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path:'/',
    redirect:'/home/bookstore'
  },
  {
    path: '/home',
    component: HomeView,
    children:[{
      path: 'bookstore',
      component: () => import('../views/bookstore/BookStore.vue'),
      meta: {
        keepAlive: true // 自定义的meta属性，用于表示该路由要保活
      }
     },{
          path: 'bookshelf',
          component: () => import('../views/bookshelf/BookShelf.vue')
        },{
          path: 'classification',
          component: () => import('../views/classification/Classification.vue')
        },
        {
          path: 'me',
          component: () => import('../views/me/Me.vue')
        },        
        {
          path: 'headpicture',
          component: () => import('../views/me/HeadPicture.vue')
        },        
        {
          path: 'readingpreference',
          component: () => import('../views/me/ReadingPreference.vue')
        },
      ]
     },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
