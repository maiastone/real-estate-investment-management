import React from 'react';
import * as V from 'victory';
import { VictoryBar, VictoryChart, VictoryAxis } from 'victory';
import rentalIncome from '../rentalIncome.js'


export default class Victory extends React.Component {

  render() {


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
          data = {rentalIncome}
          x='month'
          y='rentalIncome'
        />
        </VictoryChart>
      </div>
    );
  }
}
