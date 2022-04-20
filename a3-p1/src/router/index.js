import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '../components/HomePage.vue'
import AboutUs from '../components/AboutUs.vue'
import OurCustomers from '../components/OurCustomers.vue'
import OurServices from '../components/OurServices.vue'

const routes = [
  {
    path: '/',
    name: 'HomePage',
    component: HomePage
  },
  {
    path: '/AboutUs',
    name: 'AboutUs',
    component: AboutUs
  },
  {
    path: '/OurCustomers',
    name: 'OurCustomers',
    component: OurCustomers
  },
  {
    path: '/OurServices',
    name: 'OurServices',
    component: OurServices
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router