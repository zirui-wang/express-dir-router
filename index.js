'use strict';

const path = require('path');
const fs = require('fs');

function getBaseUrl(prefix, name) {
  const index = name.lastIndexOf('/');
  if (index === -1) return prefix;
  return prefix + name.substring(0, index);
}

function dispatch(app, baseUrl, route) {
  const { method, url, handler } = route;
  const curUrl = baseUrl + url;

  switch (method.toLowerCase()) {
    case 'get':
      app.get(curUrl, handler);
      break;
    case 'post':
      app.post(curUrl, handler);
      break;
    case 'put':
      app.put(curUrl, handler);
      break;
    case 'delete':
      app.delete(curUrl, handler);
      break;
    case 'patch':
      app.patch(curUrl, handler);
    default:
      break;
  }
}

function loadRoutes(rootPath, filter) {
  const routes = {};
  loadRoutesHelper(rootPath, '');

  function loadRoutesHelper(dirPath, key) {
    fs.readdirSync(dirPath).forEach(file => {
      const filePath = path.resolve(dirPath, file);
      const stat = fs.statSync(filePath);
      const curKey = key + '/' + file;
      if (stat.isDirectory()) {
        loadRoutesHelper(filePath, curKey);
      } else if (filter && filter instanceof Function && filter(file)) {
        routes[
          curKey
            .split('.')
            .slice(0, -1)
            .join('.')
        ] = require(filePath);
      }
    });
  }

  return routes;
}

module.exports = (app, root, opt) => {
  opt = opt || {};
  const { prefix = '', filter } = opt;

  const routes = loadRoutes(path.resolve(root, 'routes'), filter);
  console.log(routes);

  for (let name in routes) {
    dispatch(app, getBaseUrl(prefix, name), routes[name](app));
  }
};
