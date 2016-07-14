import Vue from 'vue';
import template from './posts.html';

import { postsResource } from 'src/helpers/resources';

export default Vue.extend({
  template,

  data() {
    return {
      posts: []
    };
  },

  route: {
    data(){
      return postsResource.get().then((response) => {
        return this.$set('posts', response.data);
      }, (errorResponse) => {
        // Handle error...
        console.log('API responded with:', errorResponse.status);
      });
    }
  }
});
