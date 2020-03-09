import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';

import user from './reducers/user';
import podcast from './reducers/podcast';
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const rootReducer = combineReducers({
  user: user,
  podcast: podcast,
});

export const logger = store => {
  return next => {
    return action => {
      // console.log('[Middleware] Dispatching ', action);
      const result = next(action);
      // console.log('[Middleware]', store.getState());
      return result;
    }
  }
}

const store = createStore(rootReducer, composeEnhancers(
  applyMiddleware(logger, thunk)
));

export default store;
