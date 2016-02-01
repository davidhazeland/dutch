import test from 'tape';

import {handle} from 'gapi/EarningReport';

test('EarningReport service: handle() function', assert => {
  assert.plan(1);

  const account = {
    properties: [
      {
        id: 1,
        websiteUrl: 'http://conlatatca.vn'
      }
    ]
  };
  const response = {
    result: {
      rows: [
        [
          'conlatatca.vn', '13.7'
        ]
      ]
    }
  };

  const actual = handle(response, account);
  const expected = [
    {
      id: 1,
      earning: '13.7'
    }
  ];

  assert.deepEqual(actual, expected,
    'should handle response from Earning Report request');
});
