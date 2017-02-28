import React from 'react';
import { shallow, mount, render } from 'enzyme';
import { assert, expect } from 'chai';

import PropertyList from '../lib/components/PropertyList.jsx';

describe('PropertyList', () => {
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
    const wrapper = shallow(<PropertyList />);
    assert.equal(wrapper.type(), 'div');
  });
  it('should receive props of propertyID', () => {
    const wrapper = shallow(<PropertyList />);
    expect(wrapper.props().propertyID).to.be.defined;
  });
  it('should render properties as buttons', () => {
    const wrapper = shallow(<PropertyList />);
    expect(wrapper.find('.properties').length)
  });
  it('should render the name of the property in the list', () => {
    const wrapper = shallow(<PropertyList properties={mockProperties}/>);
    console.log(mockProperties[0].name);
    expect(mockProperties[0].name).to.equal('Blue RiNo');
  });
});
