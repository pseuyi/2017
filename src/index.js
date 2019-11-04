import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, IndexRoute, browserHistory} from 'react-router';

import App from './components/App';
import './css/index.css';

const baseUrl = process.env.PUBLIC_URL;
ReactDOM.render(
  <Router history={browserHistory}>
    <Route path={baseUrl + '/'} component={App}></Route>
  </Router>,
  document.getElementById('app'),
);
