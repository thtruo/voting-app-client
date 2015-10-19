import React from 'react';
import classNames from 'classnames';

export default React.createClass({
  render() {
    return <div className="winner">
      Winner is {this.props.winner}!
    </div>;
  }
})