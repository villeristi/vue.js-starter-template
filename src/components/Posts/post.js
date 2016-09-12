/*eslint-disable no-unused-vars*/
import Vue from 'vue';
import { postsResource } from 'src/helpers/resources';
import store from '../../state/store';
import { toggleLoading } from '../../state/ui/actions';

import template from './post.html';

export default Vue.extend({
  template,

  data() {
    return {
      post: {},
      UI: this.$select('UI')
    };
  },

  route: {
    data() {
      store.dispatch(toggleLoading(true));
      const id = this.$route.params.id;
      return postsResource.get({ id }).then((response) => {
        store.dispatch(toggleLoading(false));
        this.$dispatch('UIChange', this.UI);
        return this.$set('post', response.data);
      }, (errorResponse) => {
        // Handle error...
        console.log('API responded with:', errorResponse.status);
      });
    }
  }
});
