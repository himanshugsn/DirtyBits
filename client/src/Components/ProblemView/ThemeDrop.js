import React from "react";

function ThemeDrop(props) {
  var ThemeMapping = {
    Dark: "dark",
    Light: "light",
  };

  var currId;

  const ThemeHelper = (e) => {
    const newId = ThemeMapping[e.target.text];
    currId = props.props;
    console.log(props.props)
    props.dispatch(newId);

    document.getElementById(newId).className = "dropdown-item active";
    document.getElementById(currId).className = "dropdown-item";
  };

  currId = props.props;

  return (
    <div>
      <div className="dropdown">
        <b>Theme</b>
        {"  "}
        <button
          className="btn btn-secondary dropdown-toggle"
          type="button"
          id="dropdownMenuButton"
          data-toggle="dropdown"
          aria-haspopup="true"
          aria-expanded="false"
        >
          {Object.keys(ThemeMapping).find(
            (key) => ThemeMapping[key] === currId
          )}
        </button>
        <div
          className="dropdown-menu"
          aria-labelledby="dropdownMenuButton"
          onClick={(e) => ThemeHelper(e)}
        >
          <a
            id="dark"
            className="dropdown-item active"
            href="javascript:void(0)"
          >
            Dark
          </a>
          <a id="light" className="dropdown-item" href="javascript:void(0)">
            Light
          </a>
        </div>
      </div>
    </div>
  );
}

export default ThemeDrop;
