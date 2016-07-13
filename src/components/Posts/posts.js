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
      }, (response) => {
        if (response.status === 404) {
          this.$router.go('/404');
        }
      });
    }
  }
});
