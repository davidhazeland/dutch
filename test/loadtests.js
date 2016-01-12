'use strict';

require('core-js/fn/object/assign');
require('babel-polyfill');

// Add support for all files in the test directory
const testsContext = require.context('.', true, /(Test\.js$)|(Helper\.js$)/);
testsContext.keys().forEach(testsContext);
