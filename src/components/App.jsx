import React from 'react';
import {List, Map} from 'immutable';

const pair = List.of('Batman Begins', 'The Dark Knight');
const tally = Map({'Batman Begins': 5, 'The Dark Knight': 4});

/* This component renders its child components via the children prop */
export default React.createClass({
  render() {
    return React.cloneElement(this.props.children, {
      pair: pair,
      tally: tally
    });
  }
});