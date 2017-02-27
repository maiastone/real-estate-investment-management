import React from 'react';
import * as V from 'victory';
import { VictoryBar, VictoryChart, VictoryAxis } from 'victory';
import rentalIncome from '../propertyData/rentalIncome.js'


export default class Victory extends React.Component {


  render() {
    const propertyID = this.props.propertyID || 1;

    const propertyData = rentalIncome[propertyID - 1].rentalIncome;

    return (
      <div>
        <VictoryChart
          domainPadding={20}
        >
        <VictoryAxis
          tickValues={['January', 'April', 'July', 'October']}
        />
        <VictoryAxis
            dependentAxis
            tickFormat={(x) => (`$${x / 1000}k`)}
        />
        <VictoryBar
          data = {propertyData}
          x='month'
          y='rentalIncome'
        />
        </VictoryChart>
      </div>
    );
  }
}
