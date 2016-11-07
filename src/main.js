/* eslint-disable no-unused-vars */
import Vue from 'vue';
import VueResource from 'vue-resource';
import VueRouter from 'vue-router';
import Navigation from 'components/Navigation/navigation';
import Loader from 'components/Loader/Loader';

Vue.use(VueRouter);
Vue.use(VueResource);

import routes from 'src/routes';
import 'src/style.scss';

export const router = new VueRouter({
  routes,
  mode: 'history',
  linkActiveClass: 'active'
});

export const App = new Vue({
  router,
  components: {
    Navigation,
    Loader
  },

  // data(){
  //   return {
  //     UI: this.$select('UI')
  //   };
  // },

  mounted(){
    // this.$root.$on('UIChange', function(data) {
    //   this.$set('UI', 'isLoading', false);
    // });
  }
}).$mount('#app');
