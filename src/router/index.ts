import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import Home from '../views/Home.vue'
import DataTable from '../components/DataTable.vue'
import Calendar from '../components/Calendar.vue'

Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/Data-Table',
    name: 'Calendar',
    component: DataTable
  },
  {
    path: '/Calendar',
    name: 'Calendrier',
    component: Calendar
  },
  {
    path: '/Data',
    name: 'Data',
    component: DataTable
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
