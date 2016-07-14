import Vue from 'vue';
import { postsResource } from 'src/helpers/resources';

import template from './post.html';

export default Vue.extend({
  template,

  data() {
    return {
      post: {},
    };
  },

  route: {
    data() {
      const id = this.$route.params.id;
      return postsResource.get({ id }).then((response) => {
        return this.$set('post', response.data);
      }, (errorResponse) => {
        // Handle error...
        console.log('API responded with:', errorResponse.status);
      });
    }
  }
});
