import React from 'react';
import classNames from 'classnames';
import Vote from './Vote';
import Winner from './Winner';

export default React.createClass({
  render() {
    return <div>
      {this.props.winner ?
        <Winner ref="winner" winner={this.props.winner} /> :
        <Vote {...this.props} />}
    </div>;
  }
});