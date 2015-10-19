/* Entry point for app
 */
import React from 'react';
import ReactDOM from 'react-dom';
import Voting from './components/Voting';

require('./style.css');

const pair = ['Batman Begins', 'The Dark Knight'];

ReactDOM.render(
  <Voting pair={pair}
          winner="The Dark Knight" />,
  document.getElementById('app')
);