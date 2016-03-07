'use strict';
/**
 * Created by toddgeist on 3/6/16.
 */
const expect = require('expect.js');
const client = require('./client');


describe( 'create' , function() {
  it('should create a record' , function( ) {
    return client.create({
      db: 'data',
      layout:'Customers',
      data : {name : 'tester'}
    })
      .then((result)=>{
      expect(result).to.be.an('object')})
  });

});