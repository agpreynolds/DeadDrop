import React, { Component } from 'react';
import logo from './assets/img/logo.png';

class Footer extends Component {
  render() {
    return (
        <footer className="site-footer">
        		<hr />
        		<div className="footer-content">
        			<img className="logo" src={logo} alt="Dead Drop logo" />
        		</div>
        </footer>
    );
  }
}

export default Footer;
