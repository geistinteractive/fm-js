'use strict';
/**
 * Created by toddgeist on 3/6/16.
 */
const expect = require('expect.js');
const client = require('./client').client;


describe( 'read' , function() {
  it('should read a record' , function( ) {
    return client.read({
      db: 'ContactsTest', layout:'userTable', id : 1
    }).then((result)=>{
      expect(result.data[0].id).to.be('1')})
  });
});