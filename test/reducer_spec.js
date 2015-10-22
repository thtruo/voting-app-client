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

});
