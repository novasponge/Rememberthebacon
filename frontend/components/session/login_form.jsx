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
    const errors = this.props.errors.map((error, idx) => <div className='user-error'>{error}</div>);
    return(
      <section className="session-body group">
        <div className="session-side group">
          <a href="/" className='session-side-logo'>
            <h1 className="session-side-logo-name">Remember the bacon</h1>
          </a>
        </div>
        <section className="session-section">
          <div className="session-container group">
            <Link className="session-buttom" to='/signup'>Sign up for free</Link>
            <div className="session-form-container">
              <h2 className="session-text">Been here before? Welcome back!</h2>
              <form className="login-form" onSubmit={this.handleSubmit}>
                <input className="session-username" type='text' value={this.state.info}
                  onChange={this.handleUserInfoInput}
                  placeholder="Email or username"/>
                <input className="session-password" type='password' value={this.state.password}
                  onChange={this.handlePasswordInput}
                  placeholder="Password"/>
                  {errors}
                <button className="form-session">Log in</button>
              </form>
            </div>
          </div>
        </section>
      </section>
    );
  }
}

export default withRouter(LoginForm);
