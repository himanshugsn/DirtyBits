import React from "react";

function LanguageDrop(props) {
  var LangMapping = {
    "C++": "CP",
    C: "c",
    Python3: "p3",
    Python2: "p2",
    Java: "java",
    JavaScript: "javascript",
  };
  var currId;
  const LangHelper = (e) => {
    const newId = LangMapping[e.target.text];
    currId = props.props;
    props.dispatch(newId);
    document.getElementById(newId).className = "dropdown-item active";
    if (currId === "cpp") {
      currId = "CP";
    }
    document.getElementById(currId).className = "dropdown-item";
  };
  currId = props.props;
  if (currId === "cpp") {
    currId = "CP";
  }

  console.log(currId);
  return (
    <div>
      <div className="dropdown">
        <b>Language</b>
        {"  "}
        <button
          className="btn btn-secondary dropdown-toggle"
          type="button"
          id="dropdownMenuButton"
          data-toggle="dropdown"
          aria-haspopup="true"
          aria-expanded="false"
        >
          {Object.keys(LangMapping).find((key) => LangMapping[key] === currId)}
        </button>
        <div
          className="dropdown-menu"
          aria-labelledby="dropdownMenuButton"
          onClick={(e) => LangHelper(e)}
        >
          <a id="CP" className="dropdown-item active" href="javascript:void(0)">
            C++
          </a>
          <a id="c" className="dropdown-item" href="javascript:void(0)">
            C
          </a>
          <a id="p3" className="dropdown-item" href="javascript:void(0)">
            Python3
          </a>
          <a id="p2" className="dropdown-item" href="javascript:void(0)">
            Python2
          </a>
          <a id="java" className="dropdown-item" href="javascript:void(0)">
            Java
          </a>
        </div>
      </div>
    </div>
  );
}

export default LanguageDrop;
