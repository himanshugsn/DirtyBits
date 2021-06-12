import React, { Component, lazy } from "react";
import {Route} from 'react-router-dom';
import {Router} from 'react-router';

import * as actions from './actions'
import { Suspense } from "react";
import { connect } from "react-redux";
import history from './history';
import Loader from './Loader';
const Blog = lazy(()=>import('./Blog/Blog'))
// import ProblemView from "./Components/ProblemView/ProblemView";
const ProblemView = lazy(()=> import('./Components/ProblemView/ProblemView'));
// import ProblemList from './Components/ProbemList/ProblemList';
const ProblemList = lazy(()=> import('./Components/ProbemList/ProblemList'))
// import Navbar from './Components/ProblemView/Navbar';
const Navbar = lazy(()=> import('./Components/ProblemView/Navbar'))
// import ProblemLevel from './Components/ProblemLevel/ProblemLevel';
const ProblemLevel = lazy(()=> import('./Components/ProblemLevel/ProblemLevel'))
// import settings from './settings';
const settings = lazy(()=> import('./settings'))
// import logout from './logout';
const logout = lazy(()=> import('./logout'))
// import Admin from "./Admin/Admin";
const Admin = lazy(()=> import('./Admin/Admin'))
// import profile from "./Components/Profile/profile";
const profile = lazy(() => import('./Components/Profile/profile'))

// import Leaderboard from "./Components/Leaderboard/Leaderboard";
const Leaderboard = lazy(()=> import('./Components/Leaderboard/Leaderboard'))

class App extends Component {

  componentDidMount() {
    this.props.fetchUser();
  }

  render(){
    return (
      <>
      <Router history={history} >
        <Suspense fallback={<Loader/>}>
        <div style={{overflowY:'hidden'}}>
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
          <Route path="/blogs" exact component={Blog} />
        </div>
        </Suspense>
      </Router>
    </>
    )
  }
}

export default connect(null,actions)(App);
