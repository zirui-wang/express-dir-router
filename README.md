# Express Dir Router

Manage express routes by directory. Now support `GET`, `POST`, `PUT`, `DELETE`, and `PUT`.

## Install

```sh
$ npm install express-dir-router
```

## Usage

Let's say you want to have a route like below:

```http
GET /api/v1/greeting
```

Under `routes`, You can create directory structure like below:

```html
routes
    |---v1
        |---greeting.js
```

Configuration is easy: just pass `app` and `root` path. You can also pass `prefix` as well as `filter`:

```js
// index.js

const app = require('express')();
const expressDirRouter = require('express-dir-router');

expressDirRouter(app, __dirname, {
  prefix: '/api', // You can also use an 'api' directory between 'routes' and 'v1'.
  filter: filename => filename !== 'index.js'
});
```

The format of the route file is like below. You should return an object that contains `method`, `url`, and `handler`. Just like the principle in `Express`, you can pass an array of functions to `handler`.

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
