'use strict';
/**
 * Created by toddgeist on 3/6/16.
 */

require('dotenv').config({silent : true});
const createClient = require('../index');

const client = createClient({
  serverAddress : process.env.FM_SERVER_ADDRESS,
  userName : process.env.FM_USER_NAME,
  password : process.env.FM_PASSWORD,
});

module.exports = client