import React from "react";
import "./textArea.css";

function OutputField(props) {
  return (
    <div
      className="ui segment"
      style={{
        marginLeft: "5%",
        marginRight: "5%",
        marginBottom: "5%",
        marginTop: "2%",
      }}
    >
      <h3>Output</h3>
      <textarea
        disabled
        rows="7"
        placeholder={props.val}
        onChange={(e) => props.dispatch(e.target.value)}
        id="outputfield"
      ></textarea>
    </div>
  );
}

export default OutputField;
