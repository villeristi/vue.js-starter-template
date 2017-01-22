import Vue from 'vue';
import VeeValidate from 'vee-validate';

Vue.use(VeeValidate);

import { postsResource } from 'src/util/resources';
import template from './editPost.html';

export default Vue.extend({
  template,

  data() {
    return {
      post: {},
      message: null,
      id: this.$route.params.id
    };
  },

  created(){
    this.fetchPost();
  },

  methods: {
    handleSubmit(){
      this.$validator.validateAll().then((success) => {
        if (success) {
          return this.savePost();
        }

        return this;
      });
    },

    showMessage(message = {}, timeout = 2000){
      this.message = message;
      setTimeout(() => {
        this.message = null;
      }, timeout);
    },

    savePost(){
      return postsResource.put(`${this.id}`, this.post)
        .then((response) => {
          this.post = response.data;

          this.showMessage({
            type: 'success',
            text: 'Post updated!'
          });

          // We need to reset the fields after successfull request
          this.fields.reset();
        })
        .catch((errorResponse) => {
          // Handle error...
          this.showMessage({
            type: 'danger',
            text: errorResponse
          });
          console.log('API responded with:', errorResponse);
        });
    },

    fetchPost(){
      return postsResource.get(`${this.id}`)
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
