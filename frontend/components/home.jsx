import React from 'react';
import GreetingContainer from './greeting/greeting_container';
import { withRouter } from 'react-router';
import { connect } from 'react-redux';
import Carousel from 'nuka-carousel';

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      homeBodyBackgroundColor: "home-body color-1"
    };
    this.handleSlide = this.handleSlide.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if(nextProps.loggedIn){
      this.props.router.push("/app");
    }
  }

  handleSlide(){
    switch (this.state.homeBodyBackgroundColor) {
      case "home-body color-1":
        this.setState({homeBodyBackgroundColor: "home-body color-2" });
        break;
      case "home-body color-2":
        this.setState({homeBodyBackgroundColor: "home-body color-3" });
        break;
      case "home-body color-3":
        this.setState({homeBodyBackgroundColor: "home-body color-4" });
        break;
      case "home-body color-4":
        this.setState({homeBodyBackgroundColor: "home-body color-1" });
        break;
      default:
        break;
    }
  }

  render() {
    return(
      <div className={this.state.homeBodyBackgroundColor}>
        <header className="header">
          <nav className="header-nav group">
            <a href="/" className='header-logo'>
              <h1 className="header-logo-name">Remember the bacon</h1>
            </a>
            <GreetingContainer />
          </nav>
        </header>
        <div className='home-page-main'>
          <div className="Sign-up-container">Simple, light, and easy to use.</div>
          <Carousel easing='easeInOutCirc'
                    heightMode='max'
                    autoplay={true}
                    wrapAround={true}
                    afterSlide={this.handleSlide}>
            <div className='slide-1 slide'>
              <div className='slide-1-cloud'>
                <div className='slide-1-cloud-left cloud'>Call Jared at 4PM</div>
                <div className='slide-1-cloud-right cloud'>Cook the bacon</div>
              </div>
              <div className='slide-1-image slide-image'></div>
              <div className="slide-foot-top">Get to-dos out of your head.</div>
              <div className="slide-foot-bottom">Stop thinking about your to-dos, and let the app remmeber for you</div>
            </div>
            <div className='slide-2 slide'>
              <div className='slide-2-text-box'>
                <div className='slide-2-text-left text'>Cook the bacon Friday</div>
                <div className='slide-2-text-right text'>Call Jared at 4PM tomorrow</div>
              </div>
              <div className='slide-2-image slide-image'></div>
                <div className="slide-foot-top">Get reminded, anywhere.</div>
                <div className="slide-foot-bottom">You'll never forget the bacon(or anything else) again.</div>
            </div>
            <div className='slide-3 slide'>
              <div className='slide-2-text-box'>
                <div className='slide-2-text-left text'>Go buy bacon tomorrow</div>
                <div className='slide-2-text-right text'>Call Jared on Friday</div>
              </div>
              <div className='slide-3-image slide-image'></div>
                <div className="slide-foot-top">Get things done, together.</div>
                <div className="slide-foot-bottom">Share your lists and give tasks to others to get things done faster.</div>
            </div>
            <div className='slide-4 slide'>
              <div className='slide-4-image slide-image'></div>
                <div className="slide-foot-top">Everywhere you go.</div>
                <div className="slide-foot-bottom">Remember The Bacon is magically in sync on all your devices</div>
            </div>
          </Carousel>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { loggedIn: !!state.session.currentUser };
}

export default connect(mapStateToProps)(withRouter(Home));
