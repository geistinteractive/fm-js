'use strict';
/**
 * Created by toddgeist on 3/6/16.
 */


const fetch = require('./modules/bluebird-fetch');
const qs = require('qs');

const validate = (options)=>{
  if(!options.db) throw Error('options is missing "db"');
  if(!options.layout) throw Error('options is missing "layout"');
  return true
};

/**
 *
 * @param promise
 * @param cb
 * @returns {*}
 */
const promiseOrCallback = (promise, cb )=>{

  if(typeof cb != 'function'){
    return promise
  }else{
    return promise.asCallback(cb)
  }

};

/**
 * parses the JSON from a response
 * @param response
 * @returns {*}
 */
const parseJSON = (response) => {

  return response.json()

};


/**
 * creates the fm client
 * @param options
 * @returns {{find: find}}
 */
const createClient = (options)=>{

  /**
   * builds the url
   * @param db
   * @param layout
   * @param query
   * @returns {string}
   */
  const createURL = (db, layout, query)=>{


    let url = 'http://' + options.userName + ':'+ options.password +'@'+ options.serverAddress + '/'+ db + '/'+ layout;
    if(query){
      url = url +'?' + qs.stringify(query);
    }
    return url

  };

  /**
   * creates a record
   * @param options {db, layout, query}
   * @param cb {function} optional
   * @returns {Promise} if no cb is passed.
   */
  const create = (options, cb)=>{


    validate(options);
    let url = createURL(options.db, options.layout);

    let postOptions = {
      method : 'POST',
      headers : {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body : JSON.stringify(options.data)
    };

    const promiseToCreate = fetch(url, postOptions).then(parseJSON);
    return promiseOrCallback(promiseToCreate, cb)

  };


  /**
   * reads a record from the db
   * @param options
   * @param cb
   * @returns {*}
   */
  const read = (options, cb) => {

    validate(options);
    if(!options.id) throw Error('options is missing "id"');
    let url = createURL(options.db, options.layout) + '/'+ options.id;

    let getOptions = {
      method : 'GET',
      headers : {
        'Accept': 'application/json',
      }
    };

    const promiseToRead = fetch(url, getOptions).then(parseJSON);
    return promiseOrCallback(promiseToRead, cb)

  };


  /**
   * update a record
   * @param options
   * @param cb
   * @returns {*}
   */
  const update = (options, cb) => {
    validate(options);
    if(!options.id) throw Error('options is missing "id"');
    let url = createURL(options.db, options.layout) + '/'+ options.id;


    let putOptions = {
      method : 'PUT',
      headers : {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body : JSON.stringify(options.data)
    };
    let promiseToUpdate = fetch(url, putOptions).then(parseJSON);
    return promiseOrCallback(promiseToUpdate, cb);

  };

  /**
   * deletes a record
   * @param options
   * @param cb
   */
  const destroy = (options, cb)=> {
    validate(options);
    if (!options.id) throw Error('options is missing "id"');
    let url = createURL(options.db, options.layout) + '/' + options.id;
    let deleteOptions = {
      method: 'DELETE',
      headers: {
        'Accept': 'application/json',
      }
    };
    let promiseToDelete = fetch(url, deleteOptions).then(parseJSON);
    return promiseOrCallback(promiseToDelete, cb);

  };


  /**
   * finds records
   * @param options
   * @param cb
   * @returns {*}
   */
  const find = (options, cb)=>{

    validate(options);
    let url = createURL(options.db, options.layout, options.query);
    let requestOptions = {
      method : 'GET',
      headers : {
        'Accept': 'application/json'
      }
    };
    let promiseToFind = fetch(url, requestOptions).then(parseJSON);
    return promiseOrCallback(promiseToFind, cb);

  };

  /**
   *
   * @param options
   * @param cb
   */
  const createOrUpdate = (options, cb)=>{
    let tryToFindRecord = find(options);

    return tryToFindRecord.then((result)=>{
      if(result.error || result.error===401){
        return create(options)
      }else if(!result.error){
        delete options.query;
        options.id = result.data[0].id
        return update(options)
      }

    })

  };


  return {

    create,
    read,
    update,
    destroy,
    find,
    createOrUpdate
  }

};

module.exports = createClient


