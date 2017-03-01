import React from 'react';
import { shallow, mount, render } from 'enzyme';
import { assert, expect } from 'chai';
import { Link, BrowserRouter, Match, Miss, MemoryRouter } from 'react-router';
let sinon = require('sinon');

import AllPropertyContainer from '../lib/components/AllPropertyContainer.jsx';

describe('AllPropertyContainer', () => {

  it('renders as a <div>', () => {
    const wrapper = shallow(<AllPropertyContainer params={1} />);
    assert.equal(wrapper.type(), 'div');
  });
  it('should have a default incomeView state of true', () => {
    const wrapper = shallow(<AllPropertyContainer params={1}/>);
    expect(wrapper.state().incomeView).to.equal(true);
  });
  it('should change the state of incomeView when toggle button is clicked', () => {
    const wrapper = mount(<AllPropertyContainer params={1}/>);
    wrapper.setState({ incomeView: true });
    wrapper.find('.switch-button-debt').simulate('click');
    assert.equal(wrapper.state().incomeView, false);
  });
  it('should have a render the ToggleSwitch component', () => {
    const wrapper = shallow(<AllPropertyContainer params={1}/>);
    expect(wrapper.find('.toggle')).to.have.length(1);
  });
  it('should render the Victory component if incomeView is true', () => {
    const wrapper = shallow(<MemoryRouter><AllPropertyContainer params={1}/></MemoryRouter>);
    expect(wrapper.find('.victory')).to.have.length(1);
  });
});
