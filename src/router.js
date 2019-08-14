import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    },
    {
      path: '/Register',
      name: 'Register',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/Register.vue')
    },{
      path: '/Dashboard',
      name: 'Dashboard',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/Dashboard.vue')
    },{
      path: '/PostBucket',
      name: 'PostBucket',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/PostBucket.vue')
    },{
      path: '/BucketList',
      name: 'BucketList',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.ItemView
      component: () => import(/* webpackChunkName: "about" */ './views/BucketList.vue')
    },{
      path: '/ItemView/:id',
      params: 'id',
      name: 'ItemView',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.ItemView
      component: () => import(/* webpackChunkName: "about" */ './views/ItemView.vue')
    },{
      path: '/PostItem/:id',
      params: 'id',
      name: 'PostItem',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.EditBucket
      component: () => import(/* webpackChunkName: "about" */ './views/PostItem.vue')
    },{
      path: '/EditBucket/:id',
      params: 'id',
      name: 'EditBucket',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/EditBucket.vue')
    }
  ]
})
