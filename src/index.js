import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import './index.css';
import App from './containers/App/App';
import * as serviceWorker from './serviceWorker';

import user from './store/reducers/user';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const rootReducer = combineReducers({
  user,
});

const logger = store => {
  return next => {
    return action => {
      console.log('[Middleware] Dispatching ', action);
      const result = next(action);
      console.log('[Middleware]', store.getState());
      return result;
    }
  }
}

const store = createStore(rootReducer, composeEnhancers(
  applyMiddleware(logger, thunk)
));

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>, document.getElementById('root')
);

serviceWorker.unregister();
