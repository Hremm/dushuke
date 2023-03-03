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
          path: 'footprint',
          component: () => import('../views/me/FootPrint.vue')
        },        
        {
          path: 'set',
          component: () => import('../views/me/Set.vue')
        }, 
        {
          path: 'opinion',
          component: () => import('../views/me/Opinion.vue')
        }, 
        {
          path: 'personal',
          component: () => import('../views/me/Personal.vue')
        }, 
        {
          path: 'safety',
          component: () => import('../views/me/Safety.vue')
        }, 
        {
          path: 'privacy',
          component: () => import('../views/me/Privacy.vue')
        }, 
        {
          path: '/home/directory',
          name: 'directory',
          component: () => import('../views/bookstore/Directory.vue')
        },
        {
          path: '/home/comment',
          name: 'comment',
          component: () => import('../views/bookstore/Comment.vue')
        },
        {
          path: '/home/more',
          name: 'more',
          component: () => import('../views/bookstore/More.vue')
        },
        {
          path: '/home/more',
          name: 'more',
          component: () => import('../views/bookstore/More.vue')
          },
           
      ]
      
     },
     {
       path: '/home/search',
       name: 'search',
       component: () => import('../views/bookstore/Search.vue')
   },
   {
    path: '/home/details',
    name: 'details',
    component: () => import('../views/bookstore/Details.vue')
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
