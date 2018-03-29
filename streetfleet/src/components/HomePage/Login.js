import React, { Component } from 'react';
import { Button, FormControl } from 'react-bootstrap';
import { connect } from 'react-redux';

import authActions from './../../store/actions/auth.actions';

class Login extends Component {

  login = {};

  onChange = (e) => {
    this.login[e.target.name] = e.target.value;
  }

  onSubmit = (e) => {
    e.preventDefault();
    const b64encode = window.btoa(this.login.username + ':' + this.login.password);
    this.props.login(b64encode);
  }

  render() {
    return (
      <div className="Login">
        <h2>Login</h2>
        <small>You don’t have an account?  <a>Register</a></small>
        <form>
          <FormControl
            id="formControlsText"
            type="text"
            name="username"
            onChange={this.onChange}
            placeholder="User Name"
          />
          <FormControl
            id="formControlsPassword"
            type="password"
            name="password"
            onChange={this.onChange}
            placeholder="Password"
          />
        </form>
        <Button bsSize="small" className="cancel" onClick={this.props.onClose}>Cancel</Button>
        <Button bsSize="small" type="submit" onClick={this.onSubmit}>Submit</Button>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  showLogin: state.auth.showLogin,
});

const mapDispatchToProps = (dispatch) => ({
  onClose: () => { dispatch(authActions.onClose); },
  login: (b64encode) => { dispatch(authActions.login(b64encode)); },
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);