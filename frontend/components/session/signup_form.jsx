import React from 'react';
import { Link, withRouter } from 'react-router';

const STRONGPASSWORD = /^(?=.*[A-Z]|[a-z])(?=.*[!@#$&*])(?=.*[0-9]).{6,}$/;
const EMAILREG = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/;

class SignupForm extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      username: "",
      email_address: "",
      password: ""
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleUsernameInput = this.handleUsernameInput.bind(this);
    this.handlePasswordInput = this.handlePasswordInput.bind(this);
    this.handleEmailInput = this.handleEmailInput.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    if (this.props.errors.includes("Invalid email address") || this.props.errors.includes("Minimum 6 letters, at least 1 capital letter, 1 symbol, and 1 number." )) {
      return;
    } else {
      this.props.signup(this.state);
    }
  }

  handleEmailInput(e) {
    this.setState({email_address: e.target.value});
    const emailAddress = e.target.value;
    if (emailAddress.match(EMAILREG)) {
      this.props.clearError("Invalid email address");
    } else {
      if (!this.props.errors.includes("Invalid email address")) {
        this.props.receiveErrors(this.props.errors.concat(["Invalid email address"]));
      }
    }
  }

  handleUsernameInput(e) {
    this.setState({username: e.target.value});
  }

  handlePasswordInput(e) {
    this.setState({password: e.target.value});
    const password = this.state.password;

    if (password.match(STRONGPASSWORD)) {
      this.props.clearError("Minimum 6 letters, at least 1 capital letter, 1 symbol, and 1 number.");
    } else {
      if (!this.props.errors.includes("Minimum 6 letters, at least 1 capital letter, 1 symbol, and 1 number.")) {
        this.props.receiveErrors(this.props.errors.concat(["Minimum 6 letters, at least 1 capital letter, 1 symbol, and 1 number."]));
      }
    }
  }

  componentWillReceiveProps(nextProps) {
    if(nextProps.loggedIn){
      this.props.router.push("/app");
    }
  }

  render(){
    let emailError;
    let passwordError;
    let userError;

    this.props.errors.map(error => {
      if (error.toLowerCase().indexOf("email") != -1) {
        emailError = <div className="email-error">{error}</div>;
      } else if (error.toLowerCase().indexOf("minimum") != -1) {
        passwordError = <div className='password-error'>{error}</div>;
      } else if (error.toLowerCase().indexOf("username") != -1) {
        userError = <div className='user-error'>{error}</div>;
      }
    });

    return(
      <section className="session-body group">
        <div className="session-side group">
          <a href="/" className='session-side-logo'>
            <h1 className="session-side-logo-name">Remember the bacon</h1>
          </a>
          <div className="signup-text-container">
            <div className="signup-text">"It's 106 miles to Chicago, we've got a full tank of gas, half a pack of cigarettes, it's dark and we're wearing sunglasses"</div>
            <div className="signup-text-ref">--Blues Brothers</div>
          </div>
        </div>
        <section className="session-section">
          <div className="session-container group">
            <Link className="session-buttom" to="/login" onClick={this.props.clearErrors}>Log in</Link>
            <div className="session-form-container">
              <h2 className="session-text">Sign up for free</h2>
              <form className="signup-form" onSubmit={this.handleSubmit}>
                <input className="session-username" type='text' value={this.state.username}
                  onChange={this.handleUsernameInput}
                  placeholder="username"/>
                {userError}
                <input  className="signup-email" type='text' value={this.state.email_address}
                  onChange={this.handleEmailInput}
                  placeholder="email"/>
                {emailError}
                <input className="session-password" type='password' value={this.state.password}
                  onChange={this.handlePasswordInput}
                  placeholder="Password"/>
                {passwordError}
                <button className="form-session">Sign up!</button>
              </form>
              <a className='omniauth-google' href="/auth/google_oauth2">
                <p>Sign up with <i className="fa fa-google google-icon" aria-hidden="true"></i>oogle</p>
              </a>
            </div>
          </div>
        </section>
      </section>
    );
  }
}

export default withRouter(SignupForm);
