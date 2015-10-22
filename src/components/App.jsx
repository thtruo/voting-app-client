import React from 'react';

/* This component renders its child components via the children prop */
export default React.createClass({
  render() {
    return this.props.children;
  }
});