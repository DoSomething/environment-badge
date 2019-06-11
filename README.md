<p align="center">
  <img width="801" height="auto" alt="preview" src="https://user-images.githubusercontent.com/583202/48219897-d3d0b680-e35b-11e8-9ad6-356fa14eeeb9.png">
</p>

<p align="center">
  <strong>environment-badge</strong> - simple zero-dependency environment indicators
</p>

<p align="center">
  <a href="https://npmjs.org/package/environment-badge"><img alt="npm version" src="https://img.shields.io/npm/v/environment-badge.svg?style=flat"></a>  <a href="https://bundlephobia.com/result?p=environment-badge"><img alt="npm bundle size" src="https://img.shields.io/bundlephobia/minzip/environment-badge.svg?style=flat" /></a>
</p>
<br/><br/>

It's easy to get disoriented when your application runs in multiple environments. This package checks the domain & adds a simple indicator to let you know when you're not on production. It looks for the following environments out of the box:

* Local development, at `localhost` or `.test` domains.
* Development environments, at `dev.` or `*-dev.` subdomains.
* QA environments, at `qa.` or `*-qa.` subdomains.
* Preview environments, at `preview.` or `*-preview.` subdomains.

### Usage
If you're building your application with [Webpack](https://webpack.js.org), [Create React App](https://facebook.github.io/create-react-app/), or a similar tool, simply import this module:

```js
require('environment-badge')();
```

For applications without a front-end build system, you can embed this script from [unpkg](https://unpkg.com):

```html
<script type="text/javascript" src="https://unpkg.com/environment-badge@^1.0.0/dist/bundle.js"></script>
```

### Advanced Usage
You can customize what environments are checked for by providing an array. For example:

```js
require('environment-badge')([
  {
    displayName: 'local',
    host: /(^localhost$|\.test$)/,
  },
  {
    displayName: 'staging',
    host: /^([a-z0-9-]*-)?staging\./,
    backgroundColor: '#000000',
    foregroundColor: '#fcd116',
  },
]);
```

### License

&copy; DoSomething.org. environment-badge is free software, and may be redistributed under the terms specified
in the [LICENSE](https://github.com/DoSomething/environment-badge/blob/master/LICENSE) file. The name and logo for
DoSomething.org are trademarks of Do Something, Inc and may not be used without permission.
