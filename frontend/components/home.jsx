import React from 'react';
import GreetingContainer from './greeting/greeting_container';
import { withRouter } from 'react-router';
import { connect } from 'react-redux';
import Carousel from 'nuka-carousel';

class Home extends React.Component {

  componentWillReceiveProps(nextProps) {
    if(nextProps.loggedIn){
      this.props.router.push("/app");
    }
  }

  render() {
    return(
      <div className="home-body">
        <header className="header">
          <nav className="header-nav group">
            <a href="/" className='header-logo'>
              <h1 className="header-logo-name">Remember the bacon</h1>
            </a>
            <GreetingContainer />
          </nav>
        </header>
        <Carousel easing='easeInOutCirc' heightMode='max' autoplay={true} wrapAround={true}>
          <div className='slide-1 slide'>
            <div className='slide-1-cloud'>
              <div className='slide-1-cloud-left cloud'></div>
              <div className='slide-2-cloud-right cloud'></div>
            </div>
            <div className='slide-1-image'></div>
          </div>
          <div className='slide-2 slide'>
            <div className='slide-2-image'></div>
          </div>
          <div className='slide-3 slide'>
            <div className='slide-3-image'></div>
          </div>
          <div className='slide-4 slide'>
            <div className='slide-4-image'></div>
          </div>
        </Carousel>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { loggedIn: !!state.session.currentUser };
}

export default connect(mapStateToProps)(withRouter(Home));
