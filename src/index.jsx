/* Entry point for app
 */
import React from 'react';
import ReactDOM from 'react-dom';
import Router, {Route} from 'react-router';
import App from './components/App';
import Voting from './components/Voting';
import Results from './components/Results';

require('./style.css');

const pair = ['Batman Begins', 'The Dark Knight'];

const routes = <Route component={App}>
  <Route path="/results" component={Results}></Route>
  <Route path="/" component={Voting}></Route>
</Route>;

ReactDOM.render(
  <Router>{routes}</Router>,
  document.getElementById('app')
);