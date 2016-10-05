import { connect } from 'react-redux';
import { logout, login } from '../../actions/session_actions';
import Greeting from './greeting';

const mapStateToProps = (state) => {
  return {
    currentUser: state.session.currentUser
  };
};

const mapDispatchToProps = (dispatch) => ({
  logout: () => dispatch(logout()),
  login: (guess) => dispatch(login({info:"test", password:"123456"}))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Greeting);
