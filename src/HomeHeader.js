import React, { Component } from 'react';
import illustration from './assets/img/illustration.svg';

class HomeHeader extends Component {
  render() {
    return (
		<div className="intro">
			<h2 className="intro-header">
				<span className="intro-header__subtitle">Get ready for the</span><br />
				<span className="intro-header__title">Dead<br />Drop</span>
			</h2>
			<img className="intro__illustration" src={illustration} alt="Dead Drop illustration showing an briefcase on a roadside" />
		</div>
    );
  }
}

export default HomeHeader;