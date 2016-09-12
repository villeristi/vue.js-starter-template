/*eslint-disable no-unused-expressions*/
import { fromJS } from 'immutable';
import { createReducer } from 'state/store';
import { UIActionTypes } from './actions';

export const initialState = fromJS({
  isLoading: false
});

/**
 * Base UI
 */

export function handleLoadingToggle(state, action) {
  return state.set('isLoading', action.isLoading);
}

export const UIReducer = createReducer(initialState, {
  [UIActionTypes.IS_LOADING]: handleLoadingToggle
});
