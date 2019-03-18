const greeting = require('../../../routes/v1/greeting');
const expect = require('chai').expect;

const app = {};

const req = {};

const res = {
  sendCalledWith: '',
  send: function(arg) {
    this.sendCalledWith = arg;
  }
};

describe('#Unit:GET greeting', () => {
  it('Should be GET request', () => {
    expect(greeting(app).method.toLowerCase()).to.equals('get');
  });

  it('Should url be url', () => {
    expect(greeting(app).url).to.equals('/');
  });

  it('Should return Hello', () => {
    greeting(app).handler(req, res);
    expect(res.sendCalledWith).to.equals('Hello!');
  });
});
