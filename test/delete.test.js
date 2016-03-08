'use strict';
/**
 * Created by toddgeist on 3/6/16.
 */


const expect = require('expect.js');
const client = require('./client').client;


describe( 'delete' , function() {
  it('should read a record' , function( ) {
    return client.destroy({
      db: 'ContactsTest', layout:'userTable', id : 2
    }).then((result)=>{
      // I think this might need to return the actual deleted record.
      expect(result.error).to.be('0')})
  });
});