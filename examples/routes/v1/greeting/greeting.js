'use strict';

module.exports = app => {
  return {
    method: 'get',
    url: '/',
    hander: (req, res) => {
      res.send('Hello!');
    }
  };
};
