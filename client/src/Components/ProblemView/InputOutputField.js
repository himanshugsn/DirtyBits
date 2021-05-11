import React from "react";

function InputOutputField(props) {
  const size = "20vw";
  return (
    <div className="d-flex flex-row">
      <div className="pr-4">
        <h3>Input</h3>
        <textarea
          id="onlyInput"
          rows="5"
          style={{ width: size }}
          placeholder={props.vali}
          onChange={(e) => props.dispatchi(e.target.value)}
        ></textarea>
      </div>
      <div className="pl-4">
        <h3>Output</h3>
        <textarea
          disabled
          rows="5"
          style={{ width: size }}
          placeholder={props.valo}
          onChange={(e) => props.dispatcho(e.target.value)}
          id="outputfield"
        ></textarea>
      </div>
    </div>
  );
}

export default InputOutputField;
