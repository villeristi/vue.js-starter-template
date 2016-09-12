/*eslint-disable no-unused-expressions, no-unused-vars*/
import { fromJS, List, Map } from 'immutable';
import { createReducer } from '../store';
import { PostsActionTypes } from './actions';

export const initialState = fromJS({
  allPosts: [],
  post: Map(),
  isLoading: false
});

/**
 * All posts
 */

export function handleAllPostsRequest(state) {
  return state.set('isLoading', true);
}

export function handleAllPostsReceive(state, action) {
  return state
    .set('allPosts', action.data)
    .set('isLoading', false);
}

export function handleAllPostsError(state, action) {
  return state
    .set('allPosts', [])
    .set('allPostsError', action)
    .set('isLoading', false);
}

export const PostsReducer = createReducer(initialState, {
  [PostsActionTypes.REQUEST_ALL_POSTS]: handleAllPostsRequest,
  [PostsActionTypes.RECEIVE_ALL_POSTS]: handleAllPostsReceive,
  [PostsActionTypes.ALL_POSTS_ERROR]: handleAllPostsError
});
