import { connect } from 'react-redux';
import { logout } from '../../actions/session_actions';
import App from './app';

const mapStateToProps = (state) => {
  return {
    loggedIn: state.session.currentUser
  };
};

const mapDispatchToProps = (dispatch) => ({
  logout: () => dispatch(logout()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
