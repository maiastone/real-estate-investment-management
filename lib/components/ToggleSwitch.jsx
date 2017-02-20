import React from 'react';
import PropertyCard from './PropertyCard.jsx';

const ToggleSwitch = (props) => {
  const { toggleMode } = props;

  return (
      <div className="switch-container">
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
            id="debt"
            onClick={(e) => toggleMode(e)}
            >
          </input>
          <label htmlFor="debt"
            className="switch-label switch-label-on"
            >Debt
          </label>

          <span className="switch-selection"></span>
        </div>
      </div>
  );
};

module.exports = ToggleSwitch;