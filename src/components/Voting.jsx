import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import {connect} from 'react-redux';
import classNames from 'classnames';
import Vote from './Vote';
import Winner from './Winner';
import * as actionCreators from '../action_creators';

/* Pure component */
export const Voting = React.createClass({
  mixins: [PureRenderMixin],
  render() {
    return <div>
      {this.props.winner ?
        <Winner ref="winner" winner={this.props.winner} /> :
        <Vote {...this.props} />}
    </div>;
  }
});

function mapStateToProps(state) {
  return {
    pair: state.getIn(['vote', 'pair']),
    hasVoted: state.get('hasVoted'),
    winner: state.get('winner')
  }
}

/* Smart connected component. Adding `actionCreators` to `connect` causes
 * a `vote` prop to be given to the `Voting` component.
 */
export const VotingContainer =
  connect(mapStateToProps, actionCreators)(Voting);