import React, { Component } from "react";
import {Route} from 'react-router-dom';
import {Router} from 'react-router';

import ProblemView from "./Components/ProblemView/ProblemView";
import ProblemList from './Components/ProbemList/ProblemList';
import Navbar from './Components/ProblemView/Navbar';
import ProblemLevel from './Components/ProblemLevel/ProblemLevel';
import settings from './settings';
import logout from './logout';
import history from './history';
import Admin from "./Admin/Admin";
import profile from "./Components/Profile/profile";

import * as actions from './actions'
import { connect } from "react-redux";
import Leaderboard from "./Components/Leaderboard/Leaderboard";


class App extends Component {

  componentDidMount() {
    this.props.fetchUser();
  }

  render(){
    return (
      <div>
      <Router history={history} >
        <div style={{overflowX:'hidden'}}>
          <Navbar/>
          <Route path="/logout" component={logout}/>
          <Route path="/" exact component={ProblemLevel}/>
          {/* <Route path="/problem" exact render={
            (props) => (<ProblemView {...props} auth={isAuthenticated}/>)
          }/>
          <Route path="/problemlist" exact render={
            (props) => (<ProblemList {...props} auth={}/>)
          }/> */}
          <Route path="/problem" exact component={ProblemView}/>
          <Route path="/problemlist" exact component={ProblemList}/>
          <Route path="/settings" exact component={settings}/>
          <Route path="/dashboard" exact component={Admin}/>
          <Route path="/profile" exact component={profile}/>
          <Route path="/leaderboard" exact component={Leaderboard}/>
        </div>
      </Router>
    </div>
    )
  }
}

export default connect(null,actions)(App);
