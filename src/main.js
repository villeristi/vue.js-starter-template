import Vue from 'vue';
import VueResource from 'vue-resource';
import VueRouter from 'vue-router';
import App from './components/App/App';

Vue.use(VueRouter);
Vue.use(VueResource);

import routes from 'src/routes';
import './style.scss';

const router = new VueRouter({
  hashbang: false,
  history: true
});

router.map(routes);

router.redirect({
  '*': '/404'
});

router.start(App, '#app');
