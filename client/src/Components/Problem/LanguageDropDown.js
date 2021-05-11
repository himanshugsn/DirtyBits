import React from "react";

const LanguageDropDown = (props) => {
  return (
    <div>
      <div className="ui two column very relaxed grid">
        <div className="four wide column">
          <h3>Language</h3>
        </div>
        <div className="twelve wide column custom1">
          <select
            className="custom2"
            onChange={(e) => props.dispatch(e.target.value)}
          >
            <option value="">{props.props}</option>
            <option value="cpp">cpp</option>
            <option value="python">Python</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default LanguageDropDown;
