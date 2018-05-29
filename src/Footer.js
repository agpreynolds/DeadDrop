import React, { Component } from 'react';
import logo from './assets/img/logo.svg';

class Footer extends Component {
  render() {
    return (
        <footer className="site-footer">
    		<hr className="cross-divider" />
    		<div className="footer-content">
    			<img className="logo" src={logo} alt="Dead Drop logo" />
    		</div>
        </footer>
    );
  }
}

export default Footer;
