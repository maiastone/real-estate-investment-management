import React from 'react';
import * as V from 'victory';
import { VictoryBar, VictoryChart, VictoryAxis, VictoryStack, VictoryTheme } from 'victory';
import debt from '../propertyData/debt.js'

export default class Debt extends React.Component {


  render() {

    return (
      <div>
        <VictoryChart height={600} width={1000}
          theme={VictoryTheme.material}
          domainPadding={40}
        >
        <VictoryAxis
          label="years"
          style={{
            axisLabel: { padding: 30 },
          }}
          tickValues={['', '', '', '']}
        />
        <VictoryAxis
            label="Principal and Interest Payments"
            style={{
              axisLabel: { padding: 50 },
            }}
            dependentAxis
            tickFormat={(x) => (`$${x}`)}
        />
        <VictoryStack>
          <VictoryBar
            data = {debt}
            x='date'
            y='prin'
          />
          <VictoryBar
            data = {debt}
            x='date'
            y='int'
          />
        </VictoryStack>
          </VictoryChart>
      </div>
    );
  }
}
