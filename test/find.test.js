'use strict';
/**
 * Created by toddgeist on 3/6/16.
 */
const expect = require('expect.js');
const client = require('./client');


describe( 'find' , function() {
  it('should find some records' , function( ) {
    return client.find({db: 'data', layout:'Customers'}).then((result)=>{
      expect(result).to.be.an('object')})
  });

  it('should find some records given a callback' , function( done) {
    client.find({db: 'data', layout: 'Customers'}, (err, result) => {
      expect(result).to.be.an('object')
      done()
    })
  })
});