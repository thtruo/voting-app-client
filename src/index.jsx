/* Entry point for app
 */
import React from 'react';
import ReactDOM from 'react-dom';
import Router, {Route} from 'react-router';
import {createStore} from 'redux';
import reducer from './reducer';
import App from './components/App';
import Voting from './components/Voting';
import Results from './components/Results';

require('./style.css');

const store = createStore(reducer);
store.dispatch({
  type: 'SET_STATE',
  state: {
    vote: {
      pair: ['Star Wars', 'Halo 5'],
      tally: {'Halo 5': 117}
    }
  }
});

const routes = <Route component={App}>
  <Route path="/results" component={Results}></Route>
  <Route path="/" component={Voting}></Route>
</Route>;

ReactDOM.render(
  <Router>{routes}</Router>,
  document.getElementById('app')
);