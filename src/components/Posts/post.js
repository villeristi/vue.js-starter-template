import Vue from 'vue';
import template from './post.html';

import { postsResource } from 'src/helpers/resources';

export default Vue.extend({
  template,

  data() {
    return {
      post: {}
    }
  },

  route: {
    data(transition){
      let id = this.$route.params.id;
      return postsResource.get({ id }).then((response) => {
        return this.$set('post', response.data);
      }, (response) => {
        if (response.status === 404) {
          this.$router.go('/404')
        }
      });
    }
  }
});
