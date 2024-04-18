import { createRouter, createWebHistory } from 'vue-router';
import login from './views/login.vue';
import dashboard from './views/dashboard.vue';
import notes from './views/notes.vue';
import allmoduls from './views/allmoduls.vue';
import human from './views/human.vue';
import empty from './views/emptydash.vue';

export const router = createRouter({
  history: createWebHistory(),
  
  routes: [
    {
      path: '/',
      redirect: '/login',
    },
    {
        path: '/login',
        component: login,
    },
    {
      path: '/dashboard',
      name:'dash',
      component: dashboard,
      children: [{ path: '', component: allmoduls },
        {
            path: 'allmoduls',
            component: allmoduls,
        },
        {
            path: 'human',
            component: human,
        },
        {
            path: 'empty',
            component: empty,
        },

      ],
    },
    {
        path: '/notes',
        component: notes,
    },
  ],

  scrollBehavior(to, from, savedPosition) {
    // always scroll to top
    return { top: 0 }
  },
})

