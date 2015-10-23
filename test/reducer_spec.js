import {List, Map, fromJS} from 'immutable';
import {expect} from 'chai';
import reducer from '../src/reducer';

describe('reducer', () => {

  /* The reducer should be able to receive a plain Javascript data structure
   * since that's what it gets from the socket. It should still be turned into
   * an immutable data structure by the time it is returned as the next value.
   */
  it('handles SET_STATE', () => {
    const initialState = Map();
    const action = {
      type: 'SET_STATE',
      state: Map({
        vote: Map({
          pair: List.of('Batman Begins', 'The Dark Knight'),
          tally: Map({'Batman Begins': 1})
        })
      })
    };

    const nextState = reducer(initialState, action);

    expect(nextState).to.equal(fromJS({
      vote: {
        pair: ['Batman Begins', 'The Dark Knight'],
        tally: {'Batman Begins': 1}
      }
    }));
  });

  /* As part of the reducer contract, an `undefined` initial state should
   *  be correctly initialized into an Immutable data structure by the reducer.
   */
  it('handles SET_STATE without intial state', () => {
    const action = {
      type: 'SET_STATE',
      state: Map({
        vote: Map({
          pair: List.of('Batman Begins', 'The Dark Knight'),
          tally: Map({'Batman Begins': 1})
        })
      })
    };

    const nextState = reducer(undefined, action);

    expect(nextState).to.equal(fromJS({
      vote: {
        pair: ['Batman Begins', 'The Dark Knight'],
        tally: {'Batman Begins': 1}
      }
    }));
  });

   it('handles VOTE by setting hasVoted', () => {
    const state = fromJS({
      vote: {
        pair: ['Star Wars', 'Halo 5'],
        tally: {'Halo 5': 117}
      }
    });
    const action = {type:'VOTE', entry: 'Halo 5'};
    const nextState = reducer(state, action);

    expect(nextState).to.equal(fromJS({
      vote: {
        pair: ['Star Wars', 'Halo 5'],
        tally: {'Halo 5': 117}
      },
      hasVoted: 'Halo 5'
    }));

   });

   it('does not set hasVoted for VOTE on invalid entry', () => {
    const state = fromJS({
      vote: {
        pair: ['Star Wars', 'Halo 5'],
        tally: {'Halo 5': 117}
      }
    });
    const action = {
      type:'VOTE',
      entry: 'Batman v Superman'
    };
    const nextState = reducer(state, action);

    expect(nextState).to.equal(fromJS({
      vote: {
        pair: ['Star Wars', 'Halo 5'],
        tally: {'Halo 5': 117}
      }
    }));
   });

   it('removes hasVoted on SET_STATE if pair changes', () => {
    const initialState = fromJS({
      vote: {
        pair: ['Star Wars', 'Halo 5'],
        tally: {'Halo 5': 117}
      },
      hasVoted: 'Halo 5'
    });
    const action = {
      type:'SET_STATE',
      state: {
        vote: {
          pair: ['Batman v Superman', 'Suicide Squad']
        }
      }
    };
    const nextState = reducer(initialState, action);

    expect(nextState).to.equal(fromJS({
      vote: {
        pair: ['Batman v Superman', 'Suicide Squad']
      }
    }));
   });
});
