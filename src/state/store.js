import Vue from 'vue';
import Revue from 'revue';
import { combineReducers, applyMiddleware, createStore, compose } from 'redux';
import thunk from 'redux-thunk';
import * as reducers from './reducers';
import VueRouter from 'vue-router';
Vue.use(VueRouter);

/**
 *
 * @param {*} initialState
 * @param {Object} handlers
 * @returns {function}
 * @see http://redux.js.org/docs/recipes/ReducingBoilerplate.html
 */
export function createReducer(initialState, handlers) {
  return function reducer(state = initialState, action) {
    if (handlers.hasOwnProperty(action.type)) {
      return handlers[action.type](state, action);
    } else {
      return state;
    }
  };
}

/**
 *
 * @returns {function}
 */
export function configureStore(initialState) {
  const rootReducer = combineReducers(reducers);

  return createStore(
    rootReducer,
    initialState,
    compose(
      applyMiddleware(thunk),
      window.devToolsExtension ? window.devToolsExtension() : f => f
    )
  );
}

const store = new Revue(Vue, configureStore(), reducers);

export default store;
