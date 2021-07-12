import React from "react";

function OutputField(props) {
  var size;
  if (props.currState === "true") {
    size = "10vw";
  } else {
    size = "45vw";
  }

  return (
    <div>
      <h3>Output</h3>
      <textarea
        disabled
        rows="10"
        style={{ width: size, backgroundColor:'white'}}
        placeholder={props.val}
        onChange={(e) => props.dispatch(e.target.value)}
        id="outputfield"
      ></textarea>
    </div>
  );
}

export default OutputField;
