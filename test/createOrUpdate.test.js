'use strict';
/**
 * Created by toddgeist on 3/6/16.
 */
const expect = require('expect.js');
const client = require('./client');

describe( 'create or update' , function() {
  it('should update a record' , function( ) {
    return client.createOrUpdate({
        db:'data', layout : 'Customers', query : {id:'A009461A-EFEB-476C-8B0C-D3E39B86C96F'},
        data : {
          name : "new data2"
        }
      })
      .then((record)=>{
        expect(record).to.be.an('object');
      })
  });
  it.only('should create a record' , function( ) {
    return client.createOrUpdate({
        db:'data', layout : 'Customers', query : {id:'Sdasdas'},
        data : {
          name : "new data3"
        }
      })
      .then((record)=>{
        expect(record).to.be.an('object');
      })
  })
})