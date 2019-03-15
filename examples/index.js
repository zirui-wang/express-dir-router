'use strict';

const app = require('express')();
const expressDirRouter = require('express-dir-router');

expressDirRouter(app, __dirname, {
  prefix: '/api',
  filter: filename => filename !== 'json.js'
});

app.listen(3000);