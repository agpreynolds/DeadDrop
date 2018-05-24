import React, { Component } from 'react';

class DifficultySelection extends Component {
       
    render() {
        return (
            <div>
                <h2>Difficulty</h2>
                <div onClick={() => this.props.onSelectionChanged(0)}>Easy</div>
                <div onClick={() => this.props.onSelectionChanged(1)}>Normal</div>
                <div onClick={() => this.props.onSelectionChanged(2)}>Hard</div>

                <button onClick={this.props.onBack}>Previous</button>
                <button onClick={this.props.onNext}>Next</button>
            </div>
        );
    }
}

export default DifficultySelection;
