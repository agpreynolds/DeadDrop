import React, { Component } from 'react';

import PlayerSelection from './PlayerSelection';
import DifficultySelection from './DifficultySelection';
import Summary from './Summary';
import Timer from './Timer';
import GameWon from './GameWon';
import GameLost from './GameLost';

import { getTimerLength } from './logic/SetupRules';

class TimerSetup extends Component {
    
    constructor(props) {
        super(props);
        this.state = { 
            activeStep: 0,
            noOfPlayers: 2,
            difficulty: 1,
            timerLength: 10 //TODO[AR]: What's the default here?
        };
    }

    handlePlayerSelectionChanged = (noOfPlayers) => {
        this.setState({ noOfPlayers: noOfPlayers });
    }

    handleDifficultySelectionChanged = (difficulty) => {
        this.setState({ 
            difficulty: difficulty,
            timerLength: getTimerLength(difficulty, this.state.noOfPlayers)
        });
    }

    handleBackButtonClicked = () => {
        this.setState({ activeStep: this.state.activeStep - 1 });
    }

    handleNextButtonClicked = () => {
        this.setState({ activeStep: this.state.activeStep  + 1 });
    }

    handlePlayAgainClicked = () => {
        this.setState({ activeStep: 0 });
    }

    handleGameWon = () => {
        this.setState({ activeStep: 4 });
    }
    
    handleGameLost = () => {
        this.setState({ activeStep: 5 });
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
                        noOfPlayers={this.state.noOfPlayers}
                        difficulty={this.state.difficulty}
                        onSelectionChanged={this.handleDifficultySelectionChanged}
                        onPrevious={this.handleBackButtonClicked}
                        onNext={this.handleNextButtonClicked} />
                );
            case 2:
                return (
                    <Summary 
                        noOfPlayers={this.state.noOfPlayers}
                        difficulty={this.state.difficulty}
                        onNext={this.handleNextButtonClicked} />
                );
            case 3:
                return (
                    <Timer 
                        timerLength={this.state.timerLength}
                        onGameWon={this.handleGameWon}
                        onGameLost={this.handleGameLost} />
                );
            case 4:
                return <GameWon
                    onPlayAgainClicked={this.handlePlayAgainClicked} />;
            case 5:
                return <GameLost
                    onPlayAgainClicked={this.handlePlayAgainClicked} />;
            default:
                return null;
        }        
    }
}

export default TimerSetup;
