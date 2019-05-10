import Vue from 'vue'
import Router from 'vue-router'
import index from '@/views/index'
import search from '@/views/search'
import writes from '@/views/writes'
import Details from '@/views/Details'
import register from '@/views/register'
import picup from '@/views/picup'
import userschange from '@/views/userschange'
import textt from '@/views/textt'

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
      path: '/picup',
      name: 'picup',
      component: picup
    }, {
      path: '/userschange',
      name: 'userschange',
      component: userschange
    },{
      path: '/textt',
      name: 'textt',
      component:textt
    },{
      path: '/Progress',
      name: 'Progress',
      component:()=>import('@/views/Progress/Progress')
    }
  ]
})
