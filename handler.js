'use strict';

require('dotenv').config();

const doSomething = require('@you/doSomethingPackage').doSomething;

const doSomethingAWS = function(event, context, cb) {

  let input = {};
  // manipulate the input from event if needed

  doSomething(input)
    .then(function(response) {
      return cb(null, response);
    }).catch(function(error) {
      return cb(error);
    });

};

module.exports.doSomethingAWS = doSomethingAWS;
