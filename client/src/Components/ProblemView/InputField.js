import React from "react";

function InputField(props) {
  var size;
  if (props.currState === "true") {
    size = "10vw";
  } else {
    size = "45vw";
  }

  return (
    <div>
      <h3>Input</h3>
      <textarea
        id="onlyInput"
        rows="5"
        style={{ width: size }}
        placeholder={props.val}
        onChange={(e) => props.dispatch(e.target.value)}
      ></textarea>
    </div>
  );
}

export default InputField;
