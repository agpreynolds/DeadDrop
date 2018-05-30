import React, { Component } from 'react';

import TwitterShare from './shared/TwitterShare';

class GameLost extends Component {
  render() {
    return (
        <div>
            <h2 className="page-title">Congratulations!</h2>
            <p>You won! Do you think you can keep the victories coming?</p>
            <button onClick={this.props.onPlayAgainClicked} className="button--cta">Play Again</button>

            <hr />

            <TwitterShare
              title="Tweet your victory!"
              content="I just won playing @DeadDropTheGame ! I am the
              best and craftiest of people. #winning
              #gameprototype #deaddropthegame"
              />
        </div>
    );
  }
}

export default GameLost;
