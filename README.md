#The Client Side##

##Learnings##

###Setting Up###
- Start with an HTML host page `dist/index.html`.
- Use [webpack](http://webpack.github.io/) and its development server `npm install --save-dev webpack webpack-dev-server`
- Add a `webpack.config.js` file at the root
- Use `webpack` to start the dev server which is accessible at `localhost:8080`
- Need Babel and Webpack loader in order to process ES6 and React's JSX syntax: `npm install --save-dev babel-core babel-loader`
- Webpack support for including and autoprefixing CSS. Instead of adding the dependencies to `package.json` manually, you can install them from the command line:
    + `npm install --save classnames`
    + `npm install --save-dev css-loader style-loader autoprefixer-loader`

###Unit Testing Setup###
- Use Mocha and Chai: `npm install --save-dev mocha chai`
- Using [jsdom](https://github.com/tmpvar/jsdom) and [testing with jsdom](http://jaketrent.com/post/testing-react-with-jsdom/): `npm install --save-dev jsdom`
- Add Chai expectation support for Immutable
    + `npm install --save immutable`
    + `npm install --save-dev chai-immutable`


###React and react-hot-loader###
- Add react: `npm install --save-dev react`
- Add react-hot-loader to make development workflow faster by reloading code for us without losing the current state of the app: `npm install --save-dev react-hot-loader`

We can (re)start the development server with `webpack-dev-server` and see a message about Hot Module Replacement being enabled in the console.

##Writing UI Components##

- Rename `.js` files to `.jsx`
- Start with `Voting` component and render to `div#app` at `src/index.jsx`
- Set up first unit test `Voting_spec.jsx` to test that the component renders those buttons based on the `pair` prop
    + To render a component in a unit test, use the helper function `renderIntoDocument` from `react/addons`
    + Once the component renders, we can use another React helper function `scryRenderedDOMComponentsWithTag` to find the `button` elements we expect there to be
    + We can simulate a click using `Simulate`
    + Run the test with `npm run test`

###Immutable Data and Pure Rendering###
If we use immutable data, we get a very pratical benefit when using it with React. That is, if we only use immutable data in component props and write the component as a pure component, React can use a more efficient strategy for detecting changes in props! 
We can apply the [PureRenderMixin](https://facebook.github.io/react/docs/pure-render-mixin.html). It changes how React checks for changes in the component's props and state by using the faster shallow comparison.
To make the tests pass and avoid deep checks, install the package for PureRenderMixin: `npm install --save react-addons-pure-render-mixin`

For now, the `App` component is an exception to this rule because it would cause route changes not to fire.

##Writing the UI for Results and Routing##
The voting screen should be set at the root path `#/` and the results screen should be set at the `#/results` path. 
We'll use [react-router](https://github.com/rackt/react-router/tree/master/docs) to associate different components to different paths. We'll add it to the project `npm install --save react-router@1.0.0-rc3`
We configure the route paths in `index.jsx` by calling `react-router`'s `Route` and `Router` components. There is more this library can do, but this is all we take away from it.

##Client-Side Redux Store##
Redux is designed as a state container for UI apps. Thinking through the shape of the client state tree, we should take into account the sources of state change:
- User actions (clicks on vote buttons and the next button)
- The Server's current `state` payload

The server's state tree looks very similar to the client's state tree - thi is intentionally designed. 
We know the server is set up to send the current state. We need to write code to receive it and merge it into the client's state.

To proceed, we add unit tests. We expect that, given an action, a reducer merges its payload into the current state.

With an initial implementation of the reducer, we can spin up a Redux store by adding it `npm install --save redux` and set up the store in `index.jsx`.


