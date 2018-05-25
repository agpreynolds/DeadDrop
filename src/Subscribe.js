import React, { Component } from 'react';

class Subscribe extends Component {
  render() {
    return (
        <div class="subscribe">
	        	<p class="subscribe-info">Dead Drop is a fun, competitive card game currently in developement. Sign up for the newlsetter to be a part of the story and to be the first to know about backer only discounts!</p>
			
			<hr />
			
	        <form class="subscribe-form">
	        		<label for="email">Email address:</label><br />
		        
		        <div class="input-group input-group--email">
		        		<input type="email" name="email" />
					<button type="submit" value="submit" aria-label="Submit" class="input-group__button"></button>
				</div>
				
				<p class="update-info sans small">Updates are every 4–6 weeks and will cover the processes of development, funding and manufacture for this game!</p>
	        </form> 
	    </div> 
    );
  }
}

export default Subscribe;
