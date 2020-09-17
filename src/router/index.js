import Vue from 'vue'
import VueRouter from 'vue-router'
import Dashboard from '../views/Dashboard.vue'
import Project from '../views/Projects.vue'
import Team from '../views/Team.vue'
import Profile from '../views/updateProfile.vue'
import About from '../views/about.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Dashboard
  },
  {
    path: '/projects',
    name: 'Project',
    component: Project
  },
  {
    path: '/team',
    name: 'Team',
    component: Team
  },
  {
    path: '/profile',
    name: 'Profile',
    component: Profile
  },
  {
    path: '/about',
    name: 'About',
    component: About
  },
  
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
