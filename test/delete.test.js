'use strict';
/**
 * Created by toddgeist on 3/6/16.
 */


const expect = require('expect.js');
const client = require('./client');


describe.skip( 'delete' , function() {
  it('should read a record' , function( ) {
    return client.destroy({
      db: 'data', layout:'Customers', id : 'DELETE'
    }).then((result)=>{
      expect(result).to.be.an('object')})
  });
});