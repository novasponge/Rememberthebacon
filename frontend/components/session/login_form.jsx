import React from 'react';
import { Link, withRouter } from 'react-router';

class LoginForm extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      info: "",
      password: ""
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleUserInfoInput = this.handleUserInfoInput.bind(this);
    this.handlePasswordInput = this.handlePasswordInput.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.login(this.state);
  }

  handleUserInfoInput(e) {
    this.setState({info: e.target.value});
  }

  handlePasswordInput(e) {
    this.setState({password: e.target.value});
  }

  componentWillReceiveProps(nextProps) {
    if(nextProps.loggedIn){
      this.props.router.push("/");
    }
  }

  render(){
    return(
      <section className="login-section">
        <ul>
          <li><Link to='/signup'>Sign up for free</Link></li>
        </ul>
        <h2>Been here before? Welcome back!</h2>
        <form className="login-form" onSubmit={this.handleSubmit}>
          <input type='text' value={this.state.info}
            onChange={this.handleUserInfoInput}
            placeholder="Email or username"/>
          <input type='password' value={this.state.password}
            onChange={this.handlePasswordInput}
            placeholder="Password"/>
          <button>Log in</button>
        </form>
      </section>
    );
  }
}

export default withRouter(LoginForm);
