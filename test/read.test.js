'use strict';
/**
 * Created by toddgeist on 3/6/16.
 */
const expect = require('expect.js');
const client = require('./client');


describe( 'read' , function() {
  it('should read a record' , function( ) {
    return client.read({
      db: 'data', layout:'Customers', id : 'A009461A-EFEB-476C-8B0C-D3E39B86C96F'
    }).then((result)=>{
      expect(result).to.be.an('object')})
  });
});