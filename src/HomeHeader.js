import React, { Component } from 'react';
import illustration from './assets/img/illustration.svg';
import logo from './assets/img/logo.svg';

class HomeHeader extends Component {
  render() {
    return (
		<div className="intro">
			<h2 className="intro-header">
				<span className="intro-header__subtitle">Get ready for the</span><span className="intro-header__title hidden">Dead<br />Drop</span><br />
                <img className="intro__logo" src={logo} alt="Dead Drop logo" />
            </h2>
			<img className="intro__illustration" src={illustration} alt="Dead Drop illustration showing an briefcase on a roadside" />
		</div>
    );
  }
}

export default HomeHeader;
