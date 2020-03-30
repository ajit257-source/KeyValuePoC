var supertest = require("supertest");
var should = require("should");
var assert = require("assert");
var app = require('../config/express.conf');

// This agent refers to PORT where the program is running.
var request = supertest.agent(app.listen());

// UNIT test begin
describe('Test', () => {
  it ('should return Smartport App', function (done)  {
     request
    .get('/')
    .expect('Smartport App')
    .end(done);
  });
});

describe('Array', function() {
  describe('#indexOf()', function() {
    it('should return -1 when the value is not present', function() {
      assert.equal([1, 2, 3].indexOf(4), -1);
    });
  });
});