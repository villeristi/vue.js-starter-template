import Vue from 'vue';
import template from './post.html';

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
      return this.$http.get(`http://jsonplaceholder.typicode.com/posts/${id}`).then((response) => {
        return { post: response.data }
      }, (response) => {
        console.log(response);
      });
    }
  }
});
