import React from 'react';

const Footer = () => {
  return (
    <footer className="home-page-footer">
      <h4>© Zhuoli Zhang</h4>
      <ul className="footer-icons">
        <li>
          <p>Find <a href="http://www.zhuolizhang.com">me</a> on:</p>
        </li>
        <li>
          <a href="https://github.com/novasponge">
            <i className="fa fa-github-alt footer-icon" aria-hidden="true"></i>
          </a>
        </li>
        <li>
          <a href="https://www.linkedin.com/in/zhuoli-zhang-75243b31">
            <i className="fa fa-linkedin-square footer-icon" aria-hidden="true"></i>
          </a>
        </li>
      </ul>
    </footer>
  );
};

export default Footer;
