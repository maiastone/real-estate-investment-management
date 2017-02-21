import React from 'react';
import PropertyCard from './PropertyCard.jsx';

const ToggleSwitch = (props) => {
  const { toggleModeIncome, toggleModeDebt, incomeBgColor, debtBgColor } = props;

  return (
      <div className="switch-container">

          <button
            className="switch-button"
            style={{backgroundColor: incomeBgColor}}
            onClick={(e) => toggleModeIncome(e)}
            >Income
          </button>

          <button
            className="switch-button"
            style={{backgroundColor: debtBgColor}}
            onClick={(e) => toggleModeDebt(e)}
            >Debt
          </button>

      </div>
  );
};

module.exports = ToggleSwitch;
