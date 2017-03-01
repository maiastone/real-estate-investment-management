import React from 'react';
import { shallow, mount, render } from 'enzyme';
import { assert, expect } from 'chai';

import Victory from '../lib/components/Victory.jsx';

describe('Victory', () => {
  it('renders as a <div>', () => {
    const wrapper = shallow(<Victory />);
    assert.equal(wrapper.type(), 'div');
  });
  it('should receive props of propertyID', () => {
    const wrapper = shallow(<Victory />);
    expect(wrapper.props().propertyID).to.be.defined;
  });
  it('should render the VictoryChart', () => {
    const wrapper = shallow(<Victory />);
    expect(wrapper.find('.victory')).to.have.length(1);
  });
});
