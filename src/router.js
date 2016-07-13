import Vue from 'vue';
import VueRouter from 'vue-router';

import Home from './components/Home/home'
import NotFound from './components/NotFound/notFound';

Vue.use(VueRouter);

const router = new VueRouter({
  hashbang: false,
  history: true
});

router.map({
  '/': {
    component: Home
  },
  '/404': {
    component: NotFound
  }
});

router.redirect({
  '*': '/404'
});

export default router;
