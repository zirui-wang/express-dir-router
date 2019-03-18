'use strict';

const request = require('supertest');
const server = require('../../../index');
const expect = require('chai').expect;

describe('#Integration:GET greeting', () => {
  after(done => {
    server.close(done);
  });

  it('Should respond 200', done => {
    request(server)
      .get('/api/v1/')
      .set('Accept', 'text/html; charset=utf-8')
      .end((err, res) => {
        expect(res.statusCode).to.equal(200);
        expect(res.headers['content-type']).to.equal(
          'text/html; charset=utf-8'
        );
        done();
      });
  });
});
