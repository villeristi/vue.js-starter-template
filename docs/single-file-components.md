# Single File Components

It's also possible to define your components with a [single file components](https://vuejs.org/v2/guide/single-file-components.html) fashion. Below is an example how to turn the `Loader` into a single-file-component and make use of the `vue-loader`:  

1. Remove all files from `src/components/Loader`
2. Add a `Loader.vue` -file populated with below content:

```vue
<template>
  <div class="loader"></div>
</template>
<style lang="sass">
  $vue-green: #41b883;

  .loader {
    font-size: 10px;
    position: absolute;
    top: 50%;
    left: 50%;
    margin: -20px 0 0 -20px;
    text-indent: -9999em;
    border-top: 5px solid lighten($vue-green, 35%);
    border-right: 5px solid lighten($vue-green, 35%);
    border-bottom: 5px solid lighten($vue-green, 35%);
    border-left: 5px solid $vue-green;
    -webkit-transform: translateZ(0);
    -ms-transform: translateZ(0);
    transform: translateZ(0);
    -webkit-animation: loaderSpinner 1.1s infinite linear;
    animation: loaderSpinner 1.1s infinite linear;

    &,
    &:after {
      border-radius: 50%;
      width: 40px;
      height: 40px
    }
  }

  @-webkit-keyframes loaderSpinner {
    0% {
      -webkit-transform: rotate(0deg);
      transform: rotate(0deg);
    }
    100% {
      -webkit-transform: rotate(360deg);
      transform: rotate(360deg);
    }
  }


</style>
<script>
  import Vue from 'vue';

  export default Vue.extend({});

</script>
```

3. Import the file with `.vue`-extension in `main.js`:
```javascript
import Loader from 'components/Loader/Loader.vue';
```

4. Edit your webpack config `webpack/webpack.base.js` so that `.vue` files are linted. Look for `eslint-loader` part of module rules and change the `test` attribute:
```javascript
{
    enforce: 'pre',
    exclude: /node_modules/,
    loader: 'eslint-loader',
    test: /\.(js?|vue)$/
},

```

5. Optionally, in the same config `webpack/webpack.base.js`, define `resolve.extensions` for [automatic extension resolution](https://webpack.js.org/configuration/resolve/#resolve-extensions) :
```javascript
 resolve: {
    alias: {
      ...
    },
    extensions: ['*','.js','.vue']
},
```
This will allow you to import `.js` and `.vue` files without having to specify their extension, i.e.
```javascript
import Loader from 'components/Loader/Loader';
```
