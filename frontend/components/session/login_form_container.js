import { connect } from 'react-redux';
import { login, clearErrors } from '../../actions/session_actions';
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

const mapDispatchToProps = (dispatch) => ({
  login: (user)=>dispatch(login(user)),
  clearErrors: () => dispatch(clearErrors())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginForm);
