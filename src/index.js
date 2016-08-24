import React from 'react';
import { render } from 'react-dom';
import { Router, browserHistory } from 'react-router';
import { Provider } from 'react-redux';
import routes from './routes';
import store,{ history } from './store'


render(
  <Provider store={store}>
      <Router history={history} routes={routes} />
  </Provider>,
  document.getElementById('root')
);
