import React, { Component } from 'react';
import logo from './assets/img/logo.svg';

class Footer extends Component {
  render() {
    return (
        <footer className="site-footer">
    		<hr className="cross-divider" />
    		<div className="footer-content">
    			<img className="logo" src={logo} alt="Dead Drop logo" />
                <ul className="social">
                    <li><a href="https://twitter.com/deaddropthegame" title="Follow Dead Drop on Twitter" target="_blank" rel="noopener noreferrer"><i className="icon icon--white-twitter icon--large"></i></a></li>
                    <li><a href="mailto:contact@deaddropthegame.com" title="Send an email"><i className="icon icon--white-email icon--large"></i></a></li>
                </ul>
    		</div>
        </footer>
    );
  }
}

export default Footer;
