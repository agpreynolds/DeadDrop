import React, { Component } from 'react';
import illustration from './assets/img/illustration.svg';

class HomeHeader extends Component {
  render() {
    return (
		<img src={illustration} alt="Dead Drop illustration showing an briefcase on a roadside" />
    );
  }
}

export default HomeHeader;