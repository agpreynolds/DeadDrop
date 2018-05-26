import React, { Component } from 'react';

class Summary extends Component {
  render() {
    const playerOptions = [2,3,4,5].map((noOfPlayers) => <option>{noOfPlayers}</option>);
    return (
        <div>
            <h2 className="page-title">Your Game</h2>

            <label>Number of Players:</label>
            <select value={this.props.noOfPlayers}>
                {playerOptions}
            </select>
            
            Difficulty: {this.props.difficulty}

            <hr/>

            <h2>To Set Up</h2>

            <button onClick={this.props.onNext}>Play</button>
        </div>
    );
  }
}

export default Summary;
