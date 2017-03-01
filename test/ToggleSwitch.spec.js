import React from 'react';
import { shallow, mount, render } from 'enzyme';
import { assert, expect } from 'chai';
let sinon = require('sinon');

import ToggleSwitch from '../lib/components/ToggleSwitch.jsx';

describe('ToggleSwitch', () => {
  it('renders as a <div>', () => {
    const wrapper = shallow(<ToggleSwitch />);
    assert.equal(wrapper.type(), 'div');
  });
  it('renders lots of buttons', () => {
    const wrapper = shallow(<ToggleSwitch />);
    expect('.switch-button-income').to.have.length(21);
    expect('.switch-button-debt').to.have.length(19);
  });
  it('can call toggleModeIncome with an onClick event', () => {
    const toggleModeIncome = sinon.spy();
    const wrapper = mount(<ToggleSwitch toggleModeIncome={toggleModeIncome} />);
    wrapper.find('.switch-button-income').first().simulate('click');
    expect(toggleModeIncome).to.have.property('callCount', 1);
  });
  it('can call toggleModeDebt with an onClick event', () => {
    const toggleModeDebt = sinon.spy();
    const wrapper = mount(<ToggleSwitch toggleModeDebt={toggleModeDebt} />);
    wrapper.find('.switch-button-debt').first().simulate('click');
    expect(toggleModeDebt).to.have.property('callCount', 1);
  });
  it('should receive props of incomeBgColor', () => {
    const wrapper = shallow(<ToggleSwitch />);
    expect(wrapper.props().incomeBgColor).to.be.defined;
  });
  it('should receive props of debtBgColor', () => {
    const wrapper = shallow(<ToggleSwitch />);
    expect(wrapper.props().debtBgColor).to.be.defined;
  });
});
