import React from 'react';
import { clientId } from './constants';
import { connect } from 'react-redux';
import { signIn, signOut } from './../store/action/';

import classes from '../sass/google_auth.module.scss';
class GoogleAuth extends React.Component {

  auth = null;

  constructor(props) {
    super(props);

    this.onSignIn = this.onSignIn.bind(this);
    this.onSignOut = this.onSignOut.bind(this);
    this.onAuthChanged = this.onAuthChanged.bind(this);
    this.renderAuthButton = this.renderAuthButton.bind(this);
  }

  componentDidMount() {
    window.gapi.load('client:auth2', () => {
      window.gapi.client.init({
        clientId,
        scope: 'email'
      }).then(() => {
        this.auth = window.gapi.auth2.getAuthInstance();
        this.onAuthChanged(this.auth.isSignedIn.get());
        this.auth.isSignedIn.listen(this.onAuthChanged);
      }).catch(err => {
        console.log('amir is In Error!!!!!!', err);
      })
    })
  }

  onAuthChanged(isSignedIn) {
    if (isSignedIn) {
      this.props.signIn();
    } else {

      this.props.signOut();
    }
  }

  onSignIn() {
    this.auth.signIn(this.auth.currentUser.get().getId());
  }
  onSignOut() {
    this.auth.signOut();
  }

  renderAuthButton() {

    if (this.props.isSignIn === null) {
      return null;
    }
    else if (this.props.isSignIn) {
      return (
        <button
          className={`${classes.root_btn}  ${classes.root_btn_signout}`}
          onClick={this.onSignOut}>
          SignOut
       </button>
      )
    }
    else if (!this.props.isSignIn) {
      return (
        <button
          className={`${classes.root_btn}  ${classes.root_btn_signin}`}
          onClick={this.onSignIn}>
          SignIn
      </button>)
    }
  }

  render() {
    return (
      <div className={classes.root}>
        {this.renderAuthButton()}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    isSignIn: state.auth.isSignIn
  };
}

const mapDispatchToProps = {
  signOut,
  signIn
}

export default connect(mapStateToProps, mapDispatchToProps)(GoogleAuth); 