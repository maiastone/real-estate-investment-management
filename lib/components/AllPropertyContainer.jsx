import React from 'react';
import PropertyList from './PropertyList.jsx';
import Header from './Header.jsx';
import ToggleSwitch from './ToggleSwitch.jsx';
import PropertyDetailCard from './PropertyDetailCard.jsx';

export default class AllPropertyContainer extends React.Component {
  constructor() {
    super();
    this.state = {
      incomeView: true,
      incomeBgColor: 'white',
      debtBgColor: 'gray',
      propertyID: 1,
    };
  }
  toggleModeIncome(e) {
    e.preventDefault();
    if (this.state.incomeView === false) {
      this.setState({
        incomeView: true,
        incomeBgColor: 'white',
        debtBgColor: 'gray',
      });
    }
  }

  toggleModeDebt(e) {
    e.preventDefault();
    if (this.state.incomeView === true) {
      this.setState({
        incomeView: false,
        incomeBgColor: 'gray',
        debtBgColor: 'white',
      });
    }
  }

  setProperty(id) {
    this.setState({
      propertyID: id,
    });
  }

  render() {
    return (
      <div>
        <header>
          <Header />
        </header>
          <ToggleSwitch
            incomeBgColor={this.state.incomeBgColor}
            debtBgColor={this.state.debtBgColor}
            toggleModeIncome={this.toggleModeIncome.bind(this)}
            toggleModeDebt={this.toggleModeDebt.bind(this)}
          />
        <div className='detail-view'>
          <PropertyList
            setProperty={this.setProperty.bind(this)}
          />
          <PropertyDetailCard
            propertyID={this.state.propertyID}
          />
        </div>
      </div>
    );
  }
}
