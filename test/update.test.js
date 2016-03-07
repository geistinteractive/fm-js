'use strict';
/**
 * Created by toddgeist on 3/6/16.
 */
const expect = require('expect.js');
const client = require('./client');

describe( 'update' , function() {
  it('should update a record' , function( ) {
    return client.update({
      db:'data', layout : 'Customers', id : 'A009461A-EFEB-476C-8B0C-D3E39B86C96F',
      data : {
        name : "new data"
      }
    })
      .then((record)=>{
        expect(record).to.be.an('object');
      })
  })
})