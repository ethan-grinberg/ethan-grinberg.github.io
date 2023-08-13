// Composables
import { createRouter, createWebHistory, createWebHashHistory  } from 'vue-router'
import HomeView from '../views/Home.vue'
import AboutView from '../views/About.vue'
import WorkView from '../views/Work.vue'
import ProjectPage from '../views/ProjectPage.vue'
import DefaultVue from '../layouts/default/Default.vue'

const routes = [
  {
    path: '/',
    component: () => import('@/layouts/default/Default.vue'),
    children: [
      {
        path: '',
        name: 'Home',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: HomeView
      },
    ],
  },
  {
    path: '/about',
    component: () => import('@/layouts/default/Default.vue'),
    children: [
      {
        path: '',
        name: 'About',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: AboutView
      },
    ],
  },
  {
    path: '/work',
    component: () => import('@/layouts/default/Default.vue'),
    children: [
      {
        path: '',
        name: 'Work',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: WorkView
      },
    ],
  },
  {
    path: '/project/:id',
    component: DefaultVue,
    children: [
      {
        path: '',
        name: 'ProjectPage',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: ProjectPage
      },
    ],
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
  scrollBehavior (to, from, savedPosition) {
    if (to.hash) {
      return {
        selector: to.hash
      }
    }
  }
})

export default router
