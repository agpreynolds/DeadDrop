import React, { Component } from 'react';

import PlayerSelection from './PlayerSelection';
import DifficultySelection from './DifficultySelection';
import Summary from './Summary';

class TimerSetup extends Component {
    
    constructor(props) {
        super(props);
        this.state = { 
            noOfPlayers: 2,
            difficulty: 1
        };
    }

    handlePlayerSelectionChanged = (noOfPlayers) => {
        this.setState({ noOfPlayers: noOfPlayers });
    }

    handleDifficultySelectionChanged = (difficulty) => {
        this.setState({ difficulty: difficulty });
    }

    render() {
        return (
            <div>
                <PlayerSelection
                    noOfPlayers={this.state.noOfPlayers}
                    onSelectionChanged={this.handlePlayerSelectionChanged} />
                <DifficultySelection
                    difficulty={this.state.difficulty}
                    onSelectionChanged={this.handleDifficultySelectionChanged} />
                <Summary 
                    noOfPlayers={this.state.noOfPlayers}
                    difficulty={this.state.difficulty} />
            </div>
        );
    }
}

export default TimerSetup;
