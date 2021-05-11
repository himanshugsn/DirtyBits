import React from 'react'
// import { useAuth0 } from '@auth0/auth0-react'
import Button from '@material-ui/core/Button';
// import Spinner from '../ProbemList/Component/Spinner'
import { connect } from 'react-redux'
import { FcGoogle } from 'react-icons/fc';

class Loginbutton extends React.Component {
    
    renderButton() {
      switch(this.props.auth){
        case null:
          return;
        case false:
          return (
            <>
            <Button variant="contained">
              <FcGoogle style={{fontSize:'20px'}}/>
              <a style={{ marginLeft:'5px',color:'black',textTransform:'none', textDecoration:'none'}} href="/auth/google">Sign in with Google</a>
              </Button>
            </>
          )
        default:
          return;
      }
    }

    render(){
      return (
        <div>
          {this.renderButton()}
        </div>
      )
    }
}

function mapStateToProps({auth}) {
    return {
      auth
    }
}

export default connect(mapStateToProps)(Loginbutton)
