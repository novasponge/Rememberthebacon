import React from 'react';
import { Link, withRouter } from 'react-router';

const STRONGPASSWORD = /^(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z]).{6,}$/;
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
    if (this.props.errors.length === 0) {
      this.props.signup(this.state);
    }
  }

  handleEmailInput(e) {
    this.setState({email_address: e.target.value});
    const emailAddress = e.target.value;
    if (emailAddress.match(EMAILREG)) {
      this.props.clearErrors();
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
      this.props.clearErrors();
    } else {
      if (!this.props.errors.includes("Password is too weak")) {
        this.props.receiveErrors(this.props.errors.concat(["Password is too weak"]));
      }
    }
  }

  componentWillReceiveProps(nextProps) {
    if(nextProps.loggedIn){
      this.props.router.push("/");
    }
  }

  render(){
    let errors = this.props.errors.map((error, idx) => <li key={idx}>{error}</li>);
    return(
      <section>
        <ul>{errors}</ul>
        <li><Link to="/login">Log in</Link></li>
        <h2>Sign up for free</h2>
        <form className="session_form" onSubmit={this.handleSubmit}>
          <input type='text' value={this.state.username}
            onChange={this.handleUsernameInput}
            placeholder="Username"/>
          <input type='text' value={this.state.email_address}
            onChange={this.handleEmailInput}
            placeholder="Email"/>
          <input type='password' value={this.state.password}
            onChange={this.handlePasswordInput}
            placeholder="Password"/>
          <button>Sign up!</button>
        </form>
      </section>
    );
  }
}

export default withRouter(SignupForm);
