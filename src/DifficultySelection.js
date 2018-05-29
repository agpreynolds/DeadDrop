import React, { Component } from 'react';

import { getTimerLength } from './logic/SetupRules';

class DifficultySelection extends Component {
    
    getTimerListItem = (difficulty) => {
        const length = getTimerLength(difficulty, this.props.noOfPlayers);
        let text;
        if (length > 0) {
            text = `${length} minute timer`;
        } else {
            text = "No timer";
        }

        return ( <li>{text}</li> );
    }
    
    render() {
		const baseClass = 'panel difficulty'
		
		return (
            <div>
                <h2 className="page-title">Difficulty selection</h2>
                
                <div className="difficulty-select">
	                <div className={this.props.difficulty === 'easy' ? `${baseClass} selected` : baseClass} onClick={() => this.props.onSelectionChanged('easy')}>
	                    <h2>Easy</h2>
	                    <ul>
	                        {this.getTimerListItem('easy')}
	                        <li>Fewer Lethal Cards</li>
	                        <li>No jokers</li>
	                    </ul>
	                </div>
	                
	                <div className={this.props.difficulty === 'normal' ? `${baseClass} selected` : baseClass} onClick={() => this.props.onSelectionChanged('normal')}>
	                    <h2>Normal</h2>
	                    <ul>
	                        {this.getTimerListItem('normal')}
	                        <li>Some Lethal Cards</li>
	                    </ul>
	                </div>
	                
	                <div className={this.props.difficulty === 'hard' ? `${baseClass} selected` : baseClass} onClick={() => this.props.onSelectionChanged('hard')}>
	                    <h2>Hard</h2>
	                    <ul>
	                        {this.getTimerListItem('hard')}
	                        <li>More Lethal Cards</li>
	                    </ul>
	                </div>
				</div>
				
                <button onClick={this.props.onBack}>Previous</button>
                <button onClick={this.props.onNext}>Next</button>
            </div>
        );
    }
}

export default DifficultySelection;
