# Vue.js starter template

<p align="center">
  <img src="src/assets/images/logo.png" height="100" />
</p>

A bare-bones starter-template to get your hands dirty with awesome [Vue.js](https://github.com/vuejs/vue) library.

Built with:
* [Vue.js 2](https://github.com/vuejs/vue)
* [Vue Router 2](https://github.com/vuejs/vue-router)
* [Axios](https://github.com/mzabriskie/axios)
* [Animate.css](https://github.com/daneden/animate.css)
* [Babel](https://babeljs.io/)
* [Bootstrap 4](https://v4-alpha.getbootstrap.com/)
* [BrowserSync](https://www.browsersync.io/)
* [ESLint](http://eslint.org/)
* [Font Awesome](http://fontawesome.io/)
* [JSONPlaceholder](http://jsonplaceholder.typicode.com/)
* [SASS](http://sass-lang.com/)
* [Webpack 2](https://webpack.js.org/)
* [Yarn](https://yarnpkg.com/en/docs/install)
* ...and many more

## Getting started

1. Be sure you have [Yarn](https://yarnpkg.com/en/docs/install) installed globally.
2. Clone the repo & run `yarn` from the project root

## Single File Components
See [instructions](docs/single-file-components.md) for example usage of [single file components](https://vuejs.org/v2/guide/single-file-components.html).

## Available commands

```sh
yarn start
```

Runs the Webpack module-bundler, starts watching for changes & launches the BrowserSync server to [http://localhost:3000](http://localhost:3000) (it's possible to change the port from `package.json` config-section). Uses [Webpack Dashboard](https://github.com/FormidableLabs/webpack-dashboard)

**Note!** Webpack handles all the reloading stuff while BrowserSync just proxies the default webpack-port (`8080`) giving the possibility to connect to dev-server from multiple devices:
![BrowserSync](.github/browsersync.png)


```sh
yarn lint:js
```

Lints javascript-files inside `/src` directory

```sh
yarn validate:dev
```

Validates Webpack development configuration (useful if you add plugins / loaders)

```sh
yarn validate:prod
```

Validates Webpack production configuration (useful if you add plugins / loaders)

```sh
yarn build
```

Runs the webpack module-bundler with production-settings (compress etc.) and builds the project to `/build` directory.

## Demo
Navigate to [https://vue-starter.ville.io/](https://vue-starter.ville.io/) and see the awesomeness IRL :bowtie:
