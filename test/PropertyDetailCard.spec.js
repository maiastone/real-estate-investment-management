import React from 'react';
import { shallow, mount, render } from 'enzyme';
import { assert, expect } from 'chai';

import PropertyDetailCard from '../lib/components/PropertyDetailCard.jsx';


describe('PropertyDetailCard', () => {
  it('should receive props of incomeView', () => {
    const wrapper = shallow(<PropertyDetailCard />);
    expect(wrapper.props().incomeView).to.be.defined;
  });
  it('should receive props of propertyID', () => {
    const wrapper = shallow(<PropertyDetailCard />);
    expect(wrapper.props().propertyID).to.be.defined;
  });
});
