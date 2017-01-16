import Vue from 'vue';

import { postsResource } from 'src/util/resources';
import { setLoading } from 'src/util/helpers';

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
      return postsResource.get().then((response) => {
        this.posts = response.data;
      })
      setLoading(true);
        .catch((errorResponse) => {
          // Handle error...
          console.log('API responded with:', errorResponse.status);
        })
        .finally(() => {
          setLoading(false);
        });
    }
  }

});
