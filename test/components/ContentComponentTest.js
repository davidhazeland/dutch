import React from 'react';
import test from 'tape';
import createComponent from 'helpers/shallowRenderHelper';

import createContent from 'components/ContentComponent';

const Content = createContent(React);

test('Content component', assert => {
  assert.plan(1);

  const children = '<p>Hello World!</p>';
  const re = new RegExp(children, 'g');

  const component = createComponent(Content, {}, children);

  const output = component.props.children;
  const actual = re.test(output);
  const expected = true;

  assert.equal(actual, expected,
    'should output the correct children');
});
