import { postsResource } from 'src/helpers/resources';

export const PostsActionTypes = {
  REQUEST_ALL_POSTS: 'POSTS/REQUEST_ALL_POSTS',
  RECEIVE_ALL_POSTS: 'POSTS/RECEIVE_ALL_POSTS',
  ALL_POSTS_ERROR: 'POSTS/ALL_POSTS_ERROR',
  REQUEST_POST: 'POSTS/REQUEST_POST',
  RECEIVE_POST: 'POSTS/RECEIVE_POST',
  POST_ERROR: 'POSTS/POST_ERROR'
};

// All posts
function requestAllPosts() {
  return { type: PostsActionTypes.REQUEST_ALL_POSTS };
}

function receiveAllPosts(data) {
  return {
    type: PostsActionTypes.RECEIVE_ALL_POSTS,
    data: data
  };
}

function allPostsError(data) {
  return {
    type: PostsActionTypes.ALL_POSTS_ERROR,
    data: data
  };
}

// Single
function requestPost() {
  return { type: PostsActionTypes.REQUEST_POST };
}

function receivePost(data) {
  return {
    type: PostsActionTypes.RECEIVE_POST,
    data: data
  };
}

function postError(data) {
  return {
    type: PostsActionTypes.POST_ERROR,
    data: data
  };
}

export function fetchAllPosts() {
  return (dispatch) => {
    dispatch(requestAllPosts());

    return postsResource.get()
      .then((response) => {
        dispatch(receiveAllPosts(response.data));
      }, (errorResponse) => {
        dispatch(allPostsError(errorResponse));
      });
  };
}

export function fetchPost(opts = {}) {
  return (dispatch) => {
    dispatch(requestPost());

    return postsResource.get(opts)
      .then((response) => {
        dispatch(receivePost(response.data));
      }, (errorResponse) => {
        dispatch(postError(errorResponse));
      });
  };
}
