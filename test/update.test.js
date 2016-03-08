'use strict';
/**
 * Created by toddgeist on 3/6/16.
 */
const expect = require('expect.js');
const client = require('./client').client;

describe( 'update' , function() {
  it('should update a record' , function( ) {
    return client.update({
      db:'ContactsTest', layout : 'userTable', id : 1,
      data : {
        age : 13
      }
    })
      .then((record)=>{
        expect(record.data[0].age).to.be('13');
      })
  })
})