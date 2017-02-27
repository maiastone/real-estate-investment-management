import React from 'react';
import * as V from 'victory';
import { VictoryBar, VictoryChart, VictoryAxis } from 'victory';
import debt from '../propertyData/debt.js'

export default class Debt extends React.Component {


  render() {
    const propertyID = this.props.propertyID || 1;

    console.log(debt);

    return (
      <div>
        <VictoryChart
          domainPadding={20}
        >
        <VictoryAxis
          tickValues={['2017-02-01', '2024-01-01', '2032-01-01', '2039-01-01']}
        />
        <VictoryAxis
            dependentAxis
            tickFormat={(x) => (`$${x}`)}
        />
        <VictoryBar
          data = {debt}
          x='date'
          y='prin'
        />
        </VictoryChart>
      </div>
    );
  }
}
