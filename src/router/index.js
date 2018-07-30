import Vue from 'vue'
import Router from 'vue-router'
import index from '@/views/index'
import search from '@/views/search'
import writes from '@/views/writes'
import Details from '@/views/Details'
import register from '@/views/register'
import test1 from '@/views/test1'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: index
    },
    {
      path: '/search',
      name: 'search',
      component: search
    },
    {
      path: '/writes',
      name: 'writes',
      component: writes
    },
    {
      path: '/Details',
      name: 'Details',
      component: Details
    },
    {
      path: '/register',
      name: 'register',
      component: register
    },
    {
      path: '/test1',
      name: 'test1',
      component: test1
    }
  ]
})
