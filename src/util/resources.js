import Vue from 'vue';
import VueResource from 'vue-resource';
import { router } from 'src/main';

const API_BASE = 'http://jsonplaceholder.typicode.com';

Vue.use(VueResource);

Vue.http.options = {
  root: API_BASE
};

Vue.http.interceptors.push((request, next) => {
  next((response) => {
    // Handle global API 404 =>
    if (response.status === 404) {
      router.push('/404');
    }
  });
});

export const postsResource = Vue.resource('posts{/id}');
