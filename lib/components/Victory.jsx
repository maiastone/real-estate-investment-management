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
          className='victory'
          domainPadding={20}
        >
        <VictoryAxis
          style= {{
            tickLabels: {
              padding: 10,
              fontSize: 14,
              fontFamily: 'News Cycle',
              fill: '#5d5d5d',
            },
          }}
          tickValues={['January', 'April', 'July', 'October']}
        />
        <VictoryAxis
            dependentAxis
            style= {{
              tickLabels: {
                padding: 10,
                fontSize: 14,
                fontFamily: 'News Cycle',
                fill: '#5d5d5d',
              },
            }}
            tickFormat={(x) => (`$${x / 1000}k`)}
        />
        <VictoryBar
          style= {{
            data: {
              fill: 'gray',
            },
          }}
          data = {propertyData}
          x='month'
          y='rentalIncome'
        />
        </VictoryChart>
      </div>
    );
  }
}
