import React, { Component } from 'react';

import TwitterShare from './shared/TwitterShare';

class GameLost extends Component {
  render() {
    return (
        <div>
            <h2 className="page-title">Everyone is dead!</h2>
            <p>Wow! That took a turn for the worst. Looks like it’s time for you to claim the next victory!</p>
            <button onClick={this.props.onPlayAgainClicked} className="button--cta">Play Again</button>

            <hr />

            <TwitterShare
              title="Tweet your failure!"
              content="I just lost playing @DeadDropTheGame ! It's ok though, so did everyone else #gameprototype #deaddropthegame"
              />
        </div>
    );
  }
}

export default GameLost;
