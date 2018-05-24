import React, { Component } from 'react';

import PlayerSelection from './PlayerSelection';
import DifficultySelection from './DifficultySelection';
import Summary from './Summary';

class TimerSetup extends Component {
    
    constructor(props) {
        super(props);
        this.state = { 
            activeStep: 0,
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

    handleBackButtonClicked = () => {
        this.setState({ activeStep: this.state.activeStep - 1 });
    }

    handleNextButtonClicked = () => {
        this.setState({ activeStep: this.state.activeStep  + 1 });
    }

    render() {
        const activeStep = this.state.activeStep

        switch (activeStep) {
            case 0:
                return (
                    <PlayerSelection
                        noOfPlayers={this.state.noOfPlayers}
                        onSelectionChanged={this.handlePlayerSelectionChanged}
                        onNext={this.handleNextButtonClicked} />
                );
            case 1:
                return (
                    <DifficultySelection
                        difficulty={this.state.difficulty}
                        onSelectionChanged={this.handleDifficultySelectionChanged}
                        onPrevious={this.handleBackButtonClicked}
                        onNext={this.handleNextButtonClicked} />
                );
            case 2:
                return (
                    <Summary 
                        noOfPlayers={this.state.noOfPlayers}
                        difficulty={this.state.difficulty} />
                );
            default:
                return null;
        }        
    }
}

export default TimerSetup;
