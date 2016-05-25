import React from 'react';
import TestUtils from 'react-addons-test-utils';
const Tweets = require('../components/Tweets');

const shallowRenderer = TestUtils.createRenderer();

const defaultProps = {
    tweets: [
        {
            twid_str: '12345',
            active: true,
            screenname: 'foo',
            author: 'Mr Foo',
            body: 'Lorem ipsum',
            avatar: 'http://lorempixel.com/50/50',
        },
        {
            twid_str: '98765',
            active: true,
            screenname: 'bar',
            author: 'Miss Bar',
            body: 'Quick brown fox',
            avatar: 'http://lorempixel.com/50/50',
        },
        {
            twid_str: '678910',
            active: true,
            screenname: 'baz',
            author: 'Mrs Baz',
            body: 'The rain in Spain',
            avatar: 'http://lorempixel.com/50/50',
        },
    ],
};

QUnit.module('Tweets');

QUnit.test('the Tweets shallow render', function(assert) {
    shallowRenderer.render(<Tweets {...defaultProps} />);
    const component = shallowRenderer.getRenderOutput();
    assert.ok(true, 'truth bomb!');
});

