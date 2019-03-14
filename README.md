# Express Dir Router

Now support `GET`, `POST`, `PUT`, `DELETE`, and `PUT`.

## Install

```sh
$ npm install express-dir-router
```

## Usage

To create a route:

```http
GET /api/v1/greeting
```

### Config

```js
// index.js

const app = require('express')();

const router = require('express-dir-router')({
  app: app,
  root: __dirname,
  prefix: '/api'
});
app.use(router);
```

### Directory

Create directory structure like below in `routes`:

```html
routes
    |---v1
          |---greeting.js
```

### Route

```js
// greeting.js

module.exports = app => {
  return {
    method: 'get',
    url: '/greeting',
    handler: (req, res) => {
      res.send('Hello!');
    }
  };
};
```

## License

MIT
