'use strict';

var app = require('../server'),
  chai = require('chai'),
  request = require('supertest');

  const expect = chai.expect;
  const should = chai.should();
  const test_url = '/api/' + encodeURIComponent("example"); 
  const test_url_multiple = '/api/' + encodeURIComponent("example text with more than one word");
  const test_url_empty_param = '/api/';

  describe('API Server Tests!', function() {
    describe('#GET /api response status check', function() { 
      it('The response status should be 200 sending just one word', function(done){
        request(app).get(test_url)
          .end(function(err, res){
            expect(res.statusCode).to.equal(200); 
            done();
          }); 
      });
     
     it('The response status should be 404 if we dont send any word', function(done){
        request(app).get(test_url_empty_param)
          .end(function(err, res){
            expect(res.statusCode).to.equal(404);
            done();
          });
      });
     
     it('The response status should be 200 sending more than one word at time', function(done){
        request(app).get(test_url_multiple)
          .end(function(err, res){
            expect(res.statusCode).to.equal(200);
            done();
          });
      });
   });
   describe('##GET /api/some_text response text check', function() { 
     it('The response text message should be equal', function(done) { 
        request(app).get(test_url_multiple)
          .end(function(err, res) { 
            console.log("response text -> " + res.text);
            res.text.should.be.eql("example text with more than one word"); // passes test
            done(); 
          }); 
      });
    });
  });
