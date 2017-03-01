process.env.NODE_ENV = 'test';

var chai = require('chai');
var chaiHttp = require('chai-http');
var server = require('../server.js');
var should = chai.should();

chai.use(chaiHttp);

describe('Server', function () {
  it('should respond with 200', function (done) {
    chai.request(server)
    .get('/')
    .end(function (err, res) {
      res.should.have.status(200);
      done();
    });
  });
});
