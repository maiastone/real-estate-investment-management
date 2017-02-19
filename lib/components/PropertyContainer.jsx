import React from 'react';
import PropertyCard from './PropertyCard.jsx';

export default class PropertyContainer extends React.Component {

  render() {
    return (
      <div>
        <div className="switch">
          <input type="radio"
            className="switch-input"
            name="view"
            value="income"
            id="income"
            defaultChecked>
          </input>
          <label htmlFor="income"
            className="switch-label switch-label-off"
            >Income
          </label>

          <input type="radio"
            className="switch-input"
            name="view"
            value="debt"
            id="debt">
          </input>
          <label htmlFor="debt"
            className="switch-label switch-label-on"
            >Debt
          </label>

          <span className="switch-selection"></span>
        </div>
        <PropertyCard />
      </div>
    );
  }
}
