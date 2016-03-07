'use strict';
/**
 * Replace Native Promise with Bluebird
 * tried to restore Native promise if it existed.
 * Created by toddgeist on 3/6/16.
 */

const Promise = require('bluebird');

let originalPromise;


// save the original Promise
// before replacing with bluebird
if(typeof window === 'undefined') {
  originalPromise = global.Promise
  global.Promise = Promise
}else{
  originalPromise = window.Promise
  window.Promise = Promise
}

// fetch will pick up BlueBird
const fetch = require('isomorphic-fetch');

//restore the old Promise
if(typeof window === 'undefined') {
  global.Promise = originalPromise
}else{
  window.Promise = originalPromise
}

module.exports = fetch;