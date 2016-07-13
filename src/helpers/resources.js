import Vue from 'vue';
import VueResource from 'vue-resource';

const API_BASE = 'http://jsonplaceholder.typicode.com';

Vue.use(VueResource);

Vue.http.options = {
  root: API_BASE
};

export const postsResource = Vue.resource('posts{/id}');
