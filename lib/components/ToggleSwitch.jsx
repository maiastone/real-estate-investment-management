import React from 'react';

const ToggleSwitch = (props) => {
  const { toggleModeIncome, toggleModeDebt, incomeBgColor, debtBgColor } = props;

  return (
      <div className='switch-container'>

          <button
            className='switch-button-income'
            style={{ backgroundColor: incomeBgColor }}
            onClick={(e) => toggleModeIncome(e)}
            >Income
          </button>

          <button
            className='switch-button-debt'
            style={{ backgroundColor: debtBgColor }}
            onClick={(e) => toggleModeDebt(e)}
            >Debt
          </button>

      </div>
  );
};

module.exports = ToggleSwitch;
