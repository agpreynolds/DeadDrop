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
                    <li><a href="https://twitter.com/deaddropthegame" title="Follow Dead Drop on Twitter" target="_blank"><i className="icon icon--white-twitter icon--large"></i></a></li>
                    <li><a href="mailto:?subject=Get ready for the Dead Drop&amp;body=Dead Drop is a fun, competitive card game currently in development. Sign up for the newsletter to be a part of the story and to be the first to know about backer only discounts! https://deaddropthegame.com/" title="Share by email"><i className="icon icon--white-email icon--large"></i></a></li>
                </ul>
    		</div>
        </footer>
    );
  }
}

export default Footer;
