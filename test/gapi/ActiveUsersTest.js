import test from 'tape';

import {handle} from 'gapi/ActiveUsers';

test('ActiveUsers service: handle() function', assert => {
  assert.plan(1);

  const responses = {
    result: {
      'ID': {
        result: {
          rows: [
            ['DESKTOP', 3],
            ['TABLET', 2]
          ],
          totalsForAllResults: {
            'rt:activeUsers': ['activeUsers']
          }
        }
      }
    }
  };

  const actual = handle(responses);
  const expected = [{
    id: 'ID',
    devices: {
      'DESKTOP': 3,
      'MOBILE': 0,
      'TABLET': 2
    },
    totalDevices: ['activeUsers']
  }];

  assert.deepEqual(actual, expected,
    'should handle responses from Active Users request');

  assert.end();
});
