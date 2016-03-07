'use strict';
/**
 * Created by toddgeist on 3/6/16.
 */

require('dotenv').config({silent : true});
const createClient = require('../index');

const client = createClient({
  serverAddress : process.env.SERVER_ADDRESS,
  userName : process.env.USER_NAME,
  password : process.env.PASSWORD,
});

module.exports = client