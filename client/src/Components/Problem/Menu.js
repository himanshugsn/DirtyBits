import CodeEditor from "./CodeEditor";
import React from "react";
import ProblemArea from "./ProblemArea";
import Navbar from "./Navbar";

function Menu(props) {
  return (
    <div>
      <Navbar />
      <div>
        <div
          className="ui two column very relaxed grid"
          style={{ paddingTop: "20px" }}
        >
          <div
            className="column"
            style={{
              overflow: "hidden",
              flexFlow: "wrap",
              paddingRight: "0px",
              justifyContent: "space-around",
            }}
          >
            <div className="ui container">
              <ProblemArea id={props.id} />
            </div>
          </div>
          <div
            className="column"
            style={{
              overflow: "hidden",
              whiteSpace: "nowrap",
              paddingRight: "0px",
              flexFlow: "wrap",
              justifyContent: "space-around",
            }}
          >
            <div className="ui container">
              <CodeEditor id={props.id} uid={props.uid} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Menu;
