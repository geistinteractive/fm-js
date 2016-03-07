'use strict';
/**
 * Created by toddgeist on 3/6/16.
 */
const expect = require('expect.js');
const client = require('./client');

describe( 'createOrUpdate' , function() {
  it('should update a record' , function( ) {
    return client.createOrUpdate({
        db:'ContactsTest', layout : 'userTable', query : {first_name:'Jimmy'},
        data : {
          age : "12"
        }
      })
      .then((record)=>{
        expect(record.data[0].age).to.be('12');
      })
  });
  it('should create a record' , function( ) {
    return client.createOrUpdate({
        db:'ContactsTest', layout : 'userTable', query : {firstName:'Sdasdadcasdcasdcs'},
        data : {
          age : 13
        }
      })
      .then((record)=>{
        expect(record.data[0].age).to.be('13');
      })
  })
})