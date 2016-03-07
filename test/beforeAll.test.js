'use strict';
/**
 * Created by toddgeist on 3/7/16.
 */

require('dotenv').config({silent : true});
const fetch = require('../modules/bluebird-fetch');

const user = process.env.FM_USER_NAME;
const password = process.env.FM_PASSWORD;
let serverAddress = process.env.FM_SERVER_ADDRESS;

serverAddress = serverAddress.split(":")[0]

const url = 'http://'+user+':'+password+'@'+serverAddress+'/fmi/xml/fmresultset.xml?-db=ContactsTest&-lay=userTable&-script=ResetForTest&-findany';


before((done)=>{

  fetch(url).asCallback((err, result)=>{
    if(err) throw err
    console.log('starting')
    done()
  })


})