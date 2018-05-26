import React, { Component } from 'react';
import HomeHeader from './HomeHeader.js';
import SubscribeForm from './SubscribeForm.js';

class Subscribe extends Component {
  render() {
    return (	    
        <div>
        		<HomeHeader></HomeHeader>
			<SubscribeForm></SubscribeForm>  
		</div>
    );
  }
}

export default Subscribe;
