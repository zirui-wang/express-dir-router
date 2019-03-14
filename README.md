# Express Dir Router

## Install

```sh
$ npm install express-dir-router
```

## Usage

```js
const app = require('express')();

const router = require('express-dir-router')({
  app: app,
  root: __dirname,
  prefix: '/api'
});
app.use(router);
```

## License

MIT
