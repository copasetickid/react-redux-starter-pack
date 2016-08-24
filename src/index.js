import React from 'react';
import ReactDOM from 'react-dom';
import { render } from 'react-dom';
import { Router, browserHistory } from 'react-router';
import App from './App';
import routes from './routes';

//ReactDOM.render(<App />, document.getElementById('root'));
render(
      <Router history={browserHistory} routes={routes} />,
      document.getElementById('root')
);
