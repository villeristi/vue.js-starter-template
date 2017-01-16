import Vue from 'vue';

// Resources for /posts endpoint on API
// @see https://github.com/pagekit/vue-resource/blob/master/docs/resource.md
export const postsResource = Vue.resource('posts{/id}');
