import Vue from 'vue';

import { postsResource } from 'src/util/resources';
import template from './posts.html';

export default Vue.extend({
  template,

  data() {
    return {
      posts: []
    };
  },

  created(){
    this.fetchPosts();
  },

  methods: {
    fetchPosts(){
      return postsResource.get('/')
        .then((response) => {
          this.posts = response.data;
        })
        .catch((errorResponse) => {
          // Handle error...
          console.log('API responded with:', errorResponse);
        });
    }
  }
});
