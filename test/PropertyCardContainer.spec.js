import React from 'react';
import { shallow, mount, render } from 'enzyme';
import { assert, expect } from 'chai';
let sinon = require('sinon');

import PropertyCardContainer from '../lib/components/PropertyCardContainer.jsx';
import ToggleSwitch from '../lib/components/ToggleSwitch.jsx';


describe('PropertyCardContainer', () => {

  const mockProperties = [
    {
      id: 1,
      name: 'Blue RiNo',
      rentalType: 'nightly',
      monthToDate: 1060,
      currentPrincipal: 354,
      currentInterest: 250,
    },
    {
      id: 2,
      name: 'Taxi',
      rentalType: 'nightly',
      monthToDate: 1868,
      currentPrincipal: 454,
      currentInterest: 350,
    },
    {
      id: 3,
      name: 'Winter Park',
      rentalType: 'nightly',
      monthToDate: 4200,
      currentPrincipal: 605,
      currentInterest: 355,
    },
  ];

  it('renders as a <div>', () => {
    const wrapper = shallow(<PropertyCardContainer />);
    assert.equal(wrapper.type(), 'div');
  });
  it('should have a default incomeView state of true', () => {
    const wrapper = shallow(<PropertyCardContainer />);
    expect(wrapper.state().incomeView).to.equal(true);
  });
  it('should change the state of incomeView when toggle button is clicked', () => {
    const wrapper = mount(<PropertyCardContainer />);
    wrapper.setState({ incomeView: true });
    wrapper.find('.switch-button-debt').simulate('click');
    assert.equal(wrapper.state().incomeView, false);
  });
  it('should have a render the ToggleSwitch component', () => {
    const wrapper = shallow(<PropertyCardContainer />);
    expect(wrapper.find('.toggle')).to.have.length(1);
  });
  it('should render the property cards', () => {
    const wrapper = shallow(<PropertyCardContainer />);
    expect(wrapper.find('.property-card')).to.have.length(8);
  });
});
