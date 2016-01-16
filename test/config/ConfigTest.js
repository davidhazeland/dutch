/*eslint-env node, mocha */
/*global expect */
/*eslint no-console: 0*/
'use strict';

import test from 'tape';
import config from 'config';

test('appEnvConfigTests', assert => {
  const expected = config.appEnv;
  const actual = 'test';

  assert.equal(actual, expected,
    'should load app config file depending on current --env');

  assert.end();
});
