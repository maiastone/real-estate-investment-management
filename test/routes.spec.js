process.env.NODE_ENV = 'test';

var chai = require('chai');
var should = chai.should();
var chaiHttp = require('chai-http');
var server = require('../server.js');

chai.use(chaiHttp);
describe('GET /', function() {
  it('should send index.html', function(done) {
    done();
  });
});
