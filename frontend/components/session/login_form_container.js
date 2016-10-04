import { connect } from 'react-redux';
import { login } from '../../actions/session_actions';
import LoginForm from './login_form';

const mapStateToProps = (state) => {
  let loggedIn;
  if (state.session.currentUser) {
    loggedIn = true;
  }
  return {
    loggedIn,
    errors: state.session.errors
  };
};

const mapDispatchToProps = (dispatch) => {
  return {login: (user)=>dispatch(login(user))};
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginForm);
