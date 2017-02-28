import React from 'react';

const ToggleSwitch = (props) => {
  const { toggleModeIncome, toggleModeDebt, incomeBgColor, debtBgColor } = props;

  return (
      <div className="switch-container">

          <button
            className="switch-button"
            style={{
              backgroundColor: incomeBgColor,
              boxShadow: '2px 2 5 1 rgba(0, 0, 0, 0.2)',
            }}
            onClick={(e) => toggleModeIncome(e)}
            >Income
          </button>

          <button
            className="switch-button"
            style={{ backgroundColor: debtBgColor }}
            onClick={(e) => toggleModeDebt(e)}
            >Debt
          </button>

      </div>
  );
};

module.exports = ToggleSwitch;
