import React from "react";
import ViewArea from "./ViewArea";
import "./sass/ProblemView.css";
import { useSelector } from 'react-redux'

function ProblemView(props) {
  const questionId = props.location.questionId ? props.location.questionId:props.history.push('/')
  const id = questionId;
  const uid = 1;
  const isAuth = useSelector((state)=>state.auth)
  return (
    isAuth ?
    <div id="pageDiv">
      <ViewArea id={id} uid={uid} />
    </div>
    :
    'Not logged in '
  );
}

export default ProblemView;
