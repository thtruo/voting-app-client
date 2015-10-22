/* Entry point for app
 */
import React from 'react';
import ReactDOM from 'react-dom';
import Router, {Route} from 'react-router';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import reducer from './reducer';
import App from './components/App';
import {VotingContainer} from './components/Voting';
import {ResultsContainer} from './components/Results';
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
  <Route path="/results" component={ResultsContainer}></Route>
  <Route path="/" component={VotingContainer}></Route>
</Route>;

ReactDOM.render(
  <Provider store={store}>
    <Router>{routes}</Router>
  </Provider>,
  document.getElementById('app')
);