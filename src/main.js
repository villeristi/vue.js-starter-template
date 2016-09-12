import Vue from 'vue';
import VueResource from 'vue-resource';
import VueRouter from 'vue-router';
import Navigation from 'components/Navigation/navigation';
import Loader from 'components/Loader/Loader';

Vue.use(VueRouter);
Vue.use(VueResource);

import routes from 'src/routes';
import 'src/style.scss';

const router = new VueRouter({
  hashbang: false,
  history: true,
  linkActiveClass: 'active'
});

router.map(routes);

const App = Vue.extend({
  components: {
    Navigation,
    Loader
  },

  data(){
    return {
      UI: this.$select('UI')
    };
  },

  ready(){
    this.$root.$on('UIChange', function(data) {
      this.$set('UI', data);
    });
  }
});

router.start(App, '#app');

export default router;
