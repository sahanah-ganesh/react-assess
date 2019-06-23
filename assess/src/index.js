import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import store from './Modules/store.js';
import App from './App';
import './Styles/index.css';

import { addComment } from './Modules/action.js';

window.store = store;
window.addComment = addComment;

render(
  <Provider store={ store }>
    <App/>
  </Provider>,
  document.getElementById('root')
);
