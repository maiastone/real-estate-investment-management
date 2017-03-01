import React from 'react';
import { shallow, mount, render } from 'enzyme';
import { assert, expect } from 'chai';

import Debt from '../lib/components/Debt.jsx';

describe('Debt', () => {
  it('renders as a <div>', () => {
    const wrapper = shallow(<Debt />);
    assert.equal(wrapper.type(), 'div');
  });
  it('should receive props of propertyID', () => {
    const wrapper = shallow(<Debt />);
    expect(wrapper.props().propertyID).to.be.defined;
  });
  it('should render the VictoryChart', () => {
    const wrapper = shallow(<Debt />);
    expect(wrapper.find('.debt')).to.have.length(1);
  });
});
