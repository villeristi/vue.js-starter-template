/*eslint-disable no-unused-vars*/
import Vue from 'vue';
import { postsResource } from 'src/helpers/resources';
import store from '../../state/store';
import { fetchPost } from '../../state/posts/actions';

import template from './post.html';

export default Vue.extend({
  template,

  data() {
    return {
      posts: this.$select('posts')
    };
  },

  route: {
    data() {
      store.dispatch(fetchPost({ id: this.$route.params.id }));
    }
  }
});
