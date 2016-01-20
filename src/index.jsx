import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxPromise from 'redux-promise';

import App from './components/app'
import reducers from './reducers'

require("../style/main.scss");

const createStoreWithMiddleware = applyMiddleware(ReduxPromise)(createStore);

// Tell it where to place rendered element in the DOM
ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <App />
  </Provider>,
  document.querySelector('.container'));
