import Vue from 'vue'
import Router from 'vue-router'
import Index from 'pages/home/index'
import City from 'pages/city/index'
import Order from 'pages/order/index'
import Detail from 'pages/detail/index'
import Oneday from 'pages/oneday/index'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: Index
    },
    {
      path: '/city',
      name: 'city',
      component: City
    },
    {
      path: '/order',
      name: 'order',
      component: Order
    },
    {
      path: '/detail',
      name: 'detail',
      component: Detail
    },
    {
      path: '/oneday',
      name: 'oneday',
      component: Oneday
    }
  ]
})
