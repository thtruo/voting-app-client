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
- Using [jsdom](https://github.com/tmpvar/jsdom) and [testing with jsdom](http://jaketrent.com/post/testing-react-with-jsdom/).