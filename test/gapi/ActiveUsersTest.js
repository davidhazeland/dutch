import test from 'tape';

import {handle} from 'gapi/ActiveUsers';

test('ActiveUsers service: handle() function', assert => {
  assert.plan(1);

  const responses = {
    result: {
      'ID': {
        result: {
          rows: ['rows'],
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
    devices: ['rows'],
    totalDevices: ['activeUsers']
  }];

  assert.deepEqual(actual, expected,
    'should handle responses from Active Users request');
});
