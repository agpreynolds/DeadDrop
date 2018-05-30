import React, { Component } from 'react';

const resources = {
    p1: (noOfCyanideCards, noOfMisinformationCards, dealExtra) => {
        const dealExtraTxt = dealExtra ? ' and 3 cards between both of you' : '';
        return `Grab the hidden cards and select The Nuke, The Nuclear Codes, ${noOfCyanideCards}× Cyanide cards and ${noOfMisinformationCards}× Misinformation cards. Place 3 cards face-down in front of each player${dealExtraTxt}.`;
    },
    p2Shuffle: 'Shuffle the playing deck and deal 5× cards each',
    p2Grab: 'Grab the playing deck, shuffle it and deal 5× cards each',
    p2Grab_RemoveJokers: 'Grab the playing deck and remove the Kill Everyone and Nuclear Threat Jokers.',
    p2Grab_RemoveJokers_AndRemoveExplosions: 'Grab the playing deck and remove 2× Explosion! cards and the Kill Everyone and Nuclear Threat jokers.',
    p2Grab_RemoveJokers_AndRemoveExplosions_AndRemoveDisarms: 'Grab the playing deck and remove 4× Explosion! cards, 4× Disarm cards and the Kill Everyone and Nuclear Threat jokers.',
    p3WhenReady: 'When you’re ready hit the button!',
    p3DeepBreath: 'Take a deep breath and hit the button',
    p3Wipe: 'Wipe away a single tear and hit the button.',
    p3Think: 'Think about your life decisions and hit the button.',
    p3Regret: 'Regret everything and hit the button.'
};

const setupCriteria = [
    {
        noOfPlayers: 2,
        difficulty: 'easy',
        paragraph1: resources.p1(2, 5, true),
        paragraph2: `${resources.p2Grab_RemoveJokers_AndRemoveExplosions_AndRemoveDisarms} ${resources.p2Shuffle}`,
        paragraph3: resources.p3WhenReady
    },
    {
        noOfPlayers: 2,
        difficulty: 'normal',
        paragraph1: resources.p1(3, 4, true),
        paragraph2: resources.p2Shuffle,
        paragraph3: resources.p3DeepBreath
    },
    {
        noOfPlayers: 2,
        difficulty: 'hard',
        paragraph1: resources.p1(4, 3, true),
        paragraph2: resources.p2Grab,
        paragraph3: resources.p3Wipe
    },
    {
        noOfPlayers: 3,
        difficulty: 'easy',
        paragraph1: resources.p1(2, 5),
        paragraph2: `${resources.p2Grab_RemoveJokers_AndRemoveExplosions} ${resources.p2Shuffle}`,
        paragraph3: resources.p3WhenReady
    },
    {
        noOfPlayers: 3,
        difficulty: 'normal',
        paragraph1: resources.p1(3, 4),
        paragraph2: resources.p2Shuffle,
        paragraph3: resources.p3DeepBreath
    },
    {
        noOfPlayers: 3,
        difficulty: 'hard',
        paragraph1: resources.p1(4, 3),
        paragraph2: resources.p2Grab,
        paragraph3: resources.p3Wipe
    },
    {
        noOfPlayers: 4,
        difficulty: 'easy',
        paragraph1: resources.p1(3, 7),
        paragraph2: `${resources.p2Grab_RemoveJokers} ${resources.p2Shuffle}`,
        paragraph3: resources.p3WhenReady
    },
    {
        noOfPlayers: 4,
        difficulty: 'normal',
        paragraph1: resources.p1(4, 6),
        paragraph2: resources.p2Shuffle,
        paragraph3: resources.p3DeepBreath
    },
    {
        noOfPlayers: 4,
        difficulty: 'hard',
        paragraph1: resources.p1(5, 5),
        paragraph2: resources.p2Grab,
        paragraph3: resources.p3Think
    },
    {
        noOfPlayers: 5,
        difficulty: 'easy',
        paragraph1: resources.p1(4, 9),
        paragraph2: `${resources.p2Grab_RemoveJokers} ${resources.p2Shuffle}`,
        paragraph3: resources.p3WhenReady
    },
    {
        noOfPlayers: 5,
        difficulty: 'normal',
        paragraph1: resources.p1(5, 8),
        paragraph2: resources.p2Shuffle,
        paragraph3: resources.p3DeepBreath
    },
    {
        noOfPlayers: 5,
        difficulty: 'hard',
        paragraph1: resources.p1(6, 7),
        paragraph2: resources.p2Grab,
        paragraph3: resources.p3Regret
    }
]

class Summary extends Component {

    handlePlayerSelectionChanged = (event) => {
        this.props.onPlayerSelectionChanged(parseInt(event.target.value));
    }

    handleDifficultySelectionChanged = (event) => {
        this.props.onDifficultySelectionChanged(event.target.value);
    }

    render() {
        const playerOptions = [2,3,4,5].map((noOfPlayers) => <option value={noOfPlayers}>{noOfPlayers}</option>);

        const configuration = setupCriteria.find(c =>
            c.noOfPlayers === this.props.noOfPlayers &&
            c.difficulty === this.props.difficulty);

        return (
            <div>
                <h2 className="page-title">Your Game</h2>

                <div>
                    <label>No Of Players:</label>
                    <select value={this.props.noOfPlayers} onChange={this.handlePlayerSelectionChanged}>
                        {playerOptions}
                    </select>
                </div>

                <div>
                    <label>Difficulty:</label>
                    <select value={this.props.difficulty} onChange={this.handleDifficultySelectionChanged}>
                        <option>easy</option>
                        <option>normal</option>
                        <option>hard</option>
                    </select>
                </div>

                <div>
                    <label>Timer:</label>
                    {this.props.timerLength} minutes
                </div>

                <hr/>

                <h2>To Set Up</h2>

                <p>{configuration.paragraph1}</p>
                <hr className="small" />
                <p>{configuration.paragraph2}</p>
                <hr className="small" />
                <p>{configuration.paragraph3}</p>

                <button onClick={this.props.onNext}>Play</button>
            </div>
        );
    }
}

export default Summary;
