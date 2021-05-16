import React from "react";
import ViewArea from "./ViewArea";
import "./sass/ProblemView.css";
import { useSelector } from 'react-redux'

function ProblemView(props) {
  const questionId = props.location.questionId ? props.location.questionId:props.history.push('/')
  const isAuth = useSelector((state)=>state.auth)
  const id = questionId;
  // const uid = isAuth._id;
  return (
    isAuth ?
    <div id="pageDiv">
      <ViewArea id={id} uid={isAuth._id} />
    </div>
    :
    'Not logged in '
  );
}

export default ProblemView;
