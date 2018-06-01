import React, { Component } from 'react';

class SubscribeForm extends Component {
  render() {
    return (
        <div className="subscribe">
	        <p className="subscribe-info">Dead Drop is a fun, competitive card game currently in development. Sign up for the newsletter to be a part of the story and to be the first to know about backer only discounts!</p>

			<hr />

            <p className="update-info sans small">
                <a href="https://mailchi.mp/af76b8c9e794/dead-drop-the-game" className="button" target="_blank" rel="noopener noreferrer">Sign up for updates</a><br />
                Updates are every 4–6 weeks and will cover the processes of development, funding and manufacture for this game!
            </p>
	    </div>
    );
  }
}

export default SubscribeForm;
