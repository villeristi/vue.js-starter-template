import Vue from 'vue';
import template from './posts.html';

export default Vue.extend({
  template,

  data() {
    return {
      posts: []
    }
  },

  route: {
    waitForData: true,
    data(transition){
      return this.$http.get('http://jsonplaceholder.typicode.com/posts').then((response) => {
        return { posts: response.data }
      }, (response) => {
        console.log(response);
      });
    }
  }
});
