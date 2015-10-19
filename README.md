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
