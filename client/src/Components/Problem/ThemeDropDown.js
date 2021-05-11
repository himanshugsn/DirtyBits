import React from "react";
import "./DropDown.css";

const ThemeDropDown = (props) => {
  return (
    <div>
      <div className="ui two column very relaxed grid">
        <div className="four wide column">
          <h3>Theme</h3>
        </div>
        <div className="twelve wide column custom1">
          <select
            className="custom2"
            onChange={(e) => props.dispatch(e.target.value)}
          >
            <option>{props.props}</option>
            <option value="dark">dark</option>
            <option value="light">light</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default ThemeDropDown;
