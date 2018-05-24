import React, { Component } from 'react';

class Summary extends Component {
  render() {
    return (
        <div>
            <h2>Your Game</h2>

            <label>Number of Players:</label>
            <select value={this.props.noOfPlayers}>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
            </select>
            
            Difficulty: {this.props.difficulty}
        </div>
    );
  }
}

export default Summary;
