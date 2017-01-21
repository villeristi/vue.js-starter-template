import Vue from 'vue';

import { postsResource } from 'src/util/resources';
import template from './post.html';

export default Vue.extend({
  template,

  data() {
    return {
      post: {}
    };
  },

  created(){
    this.fetchPost();
  },

  methods: {
    fetchPost(){
      const id = this.$route.params.id;

      return postsResource.get(`${id}`)
        .then((response) => {
          this.post = response.data;
        })
        .catch((errorResponse) => {
          // Handle error...
          console.log('API responded with:', errorResponse);
        });
    }
  }
});
