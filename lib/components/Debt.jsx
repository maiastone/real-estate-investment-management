import React from 'react';
import * as V from 'victory';
import { VictoryBar, VictoryChart, VictoryAxis, VictoryStack, VictoryTheme, VictoryLabel } from 'victory';
import debt from '../propertyData/debt.js';

export default class Debt extends React.Component {

  render() {
    const propertyID = this.props.propertyID;
    const propertyData = debt[propertyID - 1].debt;
    return (
      <div>
        <VictoryChart height={400} width={600}
          domainPadding={40}
        >

          <VictoryAxis
            label='30 Year Amortization Schedule: 2017 - 2047'
            scale='time'
            tickFormat={
             (x) => {
               if (x.getFullYear() === 2000) {
                 return x.getFullYear();
               }
               if (x.getFullYear() % 5 === 0) {
                 return x.getFullYear().toString().slice(2);
               }
             }
           }
            style= {{
              tickLabels: {
                padding: 10,
                fontSize: 14,
                fontFamily: 'News Cycle',
                fill: '#5d5d5d',
              },
              labels: {
                fontSize: 12,
                padding: 20,
                fontFamily: 'News Cycle',
              },
              axis: { stroke: 'black', strokeWidth: 1 },
              ticks: {
                size: (tick) => {
                  const tickSize =
                    tick.getFullYear() % 5 === 0 ? 10 : 5;
                  return tickSize;
                },
                stroke: 'black',
                strokeWidth: 1
              },
            }}
          />
          <VictoryAxis
            dependentAxis
            offsetX={50}
            style= {{
              tickLabels: {
                padding: 10,
                fontSize: 14,
                fontFamily: 'News Cycle',
                fill: '#5d5d5d',
              },
              labels: {
                fontSize: 12,
                padding: 10,
              },
            }}
            tickFormat={(x) => (`$${x}`)}
          />

          <VictoryStack>
            <VictoryBar
              style= {{
                data: {
                  fill: '#49A156',
                },
                labels: {
                  fontSize: 8,
                },
              }}
              data = {propertyData}
              domainPadding={20}
              x='date'
              y='prin'
            />
            <VictoryBar
              style= {{
                data: {
                  fill: 'lightgray',
                },
              }}
              data = {propertyData}
              domainPadding={20}
              x='date'
              y='int'
            />
          </VictoryStack>

        </VictoryChart>
      </div>
    );
  }
}
