import Vue from 'vue'
import VueRouter from 'vue-router'

const Home = () => import('views/home/Home.vue')
const Menu = () => import('views/menu/Menu.vue')
const Shopping = () => import('views/shopping/Shopping.vue')
const Profile = () => import('views/profile/Profile.vue')

Vue.use(VueRouter)

const route = [
  {
    path: '/home',
    name: 'Home',
    component: Home
  },
  {
    path: '/menu',
    name: 'Menu',
    component: Menu
  },
  {
    path: '/shopping',
    name: 'Shopping',
    component: Shopping
  },
  {
    path: '/profile',
    name: 'Profile',
    component: Profile
  },
  {
    path: '/',
    redicect: '/home'
  }
]

const router = new VueRouter({
  routes: route,
  mode: 'history'
})

export default router
