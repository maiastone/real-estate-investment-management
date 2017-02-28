import React from 'react';
import AllPropertyContainer from './AllPropertyContainer.jsx';
import Victory from './Victory.jsx';
import Debt from './Debt.jsx';


export default class PropertyDetailCard extends React.Component {

  render() {
    const propertyID = this.props.propertyID;
    const incomeView = this.props.incomeView;
    return (

      <div className='graph-container'>
        {incomeView ?
        <Victory
          propertyID={propertyID}
        /> :
        <Debt
          propertyID={propertyID}
        />}
      </div>
    );
  }
}
