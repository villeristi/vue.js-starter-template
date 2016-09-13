import Vue from 'vue';
import store from '../../state/store';
import { fetchAllPosts } from '../../state/posts/actions';
import template from './posts.html';

export default Vue.extend({
  template,

  data() {
    return {
      posts: this.$select('posts')
    };
  },

  route: {
    data(){
      if (!this.posts.get('allPosts').length) {
        store.dispatch(fetchAllPosts());
      }
    }
  }
});
