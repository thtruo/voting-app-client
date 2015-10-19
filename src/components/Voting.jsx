import React from 'react';
import classNames from 'classnames';

export default React.createClass({
  getPair() {
    return this.props.pair || [];
  },
  render() {
    return <div className="voting">
      {this.getPair().map(entry =>
        <button key={entry}>
          <h1>{entry}</h1>
        </button>
      )}
    </div>;
  }
});