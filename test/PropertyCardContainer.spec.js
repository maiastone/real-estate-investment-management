import React from 'react';
import { shallow, mount, render } from 'enzyme';
import { assert, expect } from 'chai';
let sinon = require('sinon');

import PropertyCardContainer from '../lib/components/PropertyCardContainer.jsx';


describe('PropertyCardContainer', () => {
  it('renders as a <div>', () => {
    const wrapper = shallow(<PropertyCardContainer />);
    assert.equal(wrapper.type(), 'div');
  });
});
