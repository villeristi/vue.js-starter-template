import Vue from 'vue';
import template from './posts.html';

import { LoadingState } from 'src/main';
import { postsResource } from 'src/helpers/resources';

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
      LoadingState.$emit('toggle', true);
      return postsResource.get().then((response) => {
        this.posts = response.data;
      })
        .catch((errorResponse) => {
          // Handle error...
          console.log('API responded with:', errorResponse.status);
        })
        .finally(() => {
          LoadingState.$emit('toggle', false);
        });
    }
  }

});
