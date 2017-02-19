import React from 'react';


export default class ToggleSwitch extends React.Component {

  render() {
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
              id="debt">
            </input>
            <label htmlFor="debt"
              className="switch-label switch-label-on"
              >Debt
            </label>

            <span className="switch-selection"></span>
          </div>
        </div>
    );
  }
}
