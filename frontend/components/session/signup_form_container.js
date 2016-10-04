import { connect } from 'react-redux';
import { signup, receiveErrors, clearErrors } from '../../actions/session_actions';
import SignupForm from './signup_form';

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
  return {
    signup: (user) => dispatch(signup(user)),
    receiveErrors: (error) => dispatch(receiveErrors(error)),
    clearErrors: () => dispatch(clearErrors())
  };

};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SignupForm);
