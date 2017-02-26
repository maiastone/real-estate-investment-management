import React from 'react';
import * as V from 'victory';
import { VictoryBar, VictoryChart, VictoryAxis } from 'victory';
import rentalIncome from '../income/rentalIncome.js'
// import rentalIncome1 from '../income/rentalIncome1.js'
import rentalIncome2 from '../income/rentalIncome2.js'


export default class Victory extends React.Component {


  render() {
    console.log(rentalIncome)

    const propertyID = this.props.propertyID;
    console.log(propertyID);

    const propertyData = rentalIncome[propertyID - 1].rentalIncome;
    console.log(propertyData);

    const data1 = rentalIncome2;
    const data2 = rentalIncome2;

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
