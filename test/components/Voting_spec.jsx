import React from 'react/addons';
import ReactDOM from 'react-dom';
import {List} from 'immutable';
import Voting from '../../src/components/Voting';
import {expect} from 'chai';

const {
  renderIntoDocument,
  scryRenderedDOMComponentsWithTag,
  Simulate
} = React.addons.TestUtils;

describe('Voting', () => {

  it('renders a pair of buttons', () => {
    const component = renderIntoDocument(
      <Voting pair={["Batman Begins", "The Dark Knight"]} />
    );

    const buttons = scryRenderedDOMComponentsWithTag(component, 'button');

    expect(buttons.length).to.equal(2);
    expect(buttons[0].textContent).to.equal('Batman Begins');
    expect(buttons[1].textContent).to.equal('The Dark Knight');
  });

  it('invokes a callback when a button is clicked', () => {
    let votedWith;
    const vote = (entry) => votedWith = entry;
    const component = renderIntoDocument(
      <Voting pair={["Batman Begins", "The Dark Knight"]}
              vote={vote} />
    );
    const buttons = scryRenderedDOMComponentsWithTag(component, 'button');
    Simulate.click(buttons[1]);

    expect(votedWith).to.equal('The Dark Knight');
  });

  it('disables buttons when user has voted', () => {
    const component = renderIntoDocument(
      <Voting pair={["Batman Begins", "The Dark Knight"]}
              hasVoted="The Dark Knight" />
    );
    const buttons = scryRenderedDOMComponentsWithTag(component, 'button');

    expect(buttons.length).to.equal(2);
    expect(buttons[0].hasAttribute('disabled')).to.equal(true);
    expect(buttons[1].hasAttribute('disabled')).to.equal(true);
  });

  it('adds label to the voted entry', () => {
    const component = renderIntoDocument(
      <Voting pair={["Batman Begins", "The Dark Knight"]}
              hasVoted="The Dark Knight" />
    );
    const buttons = scryRenderedDOMComponentsWithTag(component, 'button');

    expect(buttons[1].textContent).to.contain('Voted');
  });

  it('renders just the winner when there is one', () => {
    const component = renderIntoDocument(
      <Voting winner="The Dark Knight" />
    );
    const buttons = scryRenderedDOMComponentsWithTag(component, 'button');
    expect(buttons.length).to.equal(0);

    const winner = ReactDOM.findDOMNode(component.refs.winner);
    expect(winner).to.be.ok;
    expect(winner.textContent).to.contain('The Dark Knight');
  });

  /* Our component is supposed to be pure, so if we did give it a
   * mutable array, and then caused a mutation inside the array, it
   * should **not** be re-rendered.
   */
  it('renders as a pure component', () => {
    const pair = ['Batman Begins', 'The Dark Knight'];
    const component = renderIntoDocument(
      <Voting pair={pair} />
    );

    let firstButton = scryRenderedDOMComponentsWithTag(component, 'button')[0];
    expect(firstButton.textContent).to.equal('Batman Begins');

    pair[0] = 'The Dark Knight Rises';
    component.setProps({pair: pair});
    firstButton = scryRenderedDOMComponentsWithTag(component, 'button')[0];
    expect(firstButton.textContent).to.equal('Batman Begins');
  });

  it('does update DOM when prop changes', () => {
    const pair = List.of('Batman Begins', 'The Dark Knight');
    const component = renderIntoDocument(
      <Voting pair={pair} />
    );

    let firstButton = scryRenderedDOMComponentsWithTag(component, 'button')[0];
    expect(firstButton.textContent).to.equal('Batman Begins');

    const newPair = pair.set(0, 'The Dark Knight Rises');
    component.setProps({pair: newPair});
    firstButton = scryRenderedDOMComponentsWithTag(component, 'button')[0];
    expect(firstButton.textContent).to.equal('The Dark Knight Rises');
  });

});