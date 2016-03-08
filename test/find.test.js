'use strict';
/**
 * Created by toddgeist on 3/6/16.
 */
const expect = require('expect.js');
const client = require('./client').client;

const badPasswordClient = require('./client').badPasswordClient;
const badURLClient = require('./client').badURLClient;


describe( 'find' , function() {
  it('should find some records' , function( ) {
    return client.find({db: 'ContactsTest', layout:'userTable'}).then((result)=>{
      expect(result.data).to.be.an('array')})
  });

  it('should find some records given a callback' , function( done) {
    client.find({db: 'ContactsTest', layout: 'userTable'}, (err, result) => {
      expect(result.data).to.be.an('array')
      done()
    })
  })

  describe( 'Bad Password' , function() {
    it('should return an error' , function( done ) {
      badPasswordClient.find({db: 'ContactsTest', layout: 'userTable'}, (err, result) => {
        expect(err).to.be.a(Error);
        done()
      })
    })
  });

  describe( 'Bad URL' , function() {
    it('should return an error' , function( done ) {
      badURLClient.find({db: 'ContactsTest', layout: 'userTable'}, (err, result) => {
        expect(err).to.be.a(Error);
        done()
      })
    })
  })

});