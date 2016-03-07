'use strict';
/**
 * Created by toddgeist on 3/6/16.
 */
const expect = require('expect.js');
const client = require('./client');


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
});