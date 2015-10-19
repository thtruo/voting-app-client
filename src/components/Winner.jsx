import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import classNames from 'classnames';

export default React.createClass({
  mixins: [PureRenderMixin],
  render() {
    return <div className="winner">
      Winner is {this.props.winner}!
    </div>;
  }
})