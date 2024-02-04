import { createRouter, createWebHistory } from 'vue-router'
import PageView from '../views/PageView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: PageView
    },
  ],
  scrollBehavior(to) {
    if (to.hash) {
      return { 
        el: to.hash, 
        behavior: 'smooth'
      }
    };
    return { 
      top: 0, 
      behavior: 'smooth' 
    };
  },

})

export default router
