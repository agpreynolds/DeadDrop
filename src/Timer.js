import React, { Component } from 'react';

import beep from './assets/audio/Beep.mp3';
import explosion from './assets/audio/Explosion.mp3';

class Timer extends Component {
    
    beep = new Audio(beep);
    explosion = new Audio(explosion);

    constructor(props) {
        super(props);
        this.timer = 0;
        this.state = { time: {}, seconds: this.props.timerLength * 60 };
    }
    
    componentDidMount() {
        this.startTimer();
    }

    componentWillUnmount() {
        clearInterval(this.timer);
    }

    secondsToTime(secs){
        
        let divisor_for_minutes = secs % (60 * 60);
        let minutes = Math.floor(divisor_for_minutes / 60);
    
        let divisor_for_seconds = divisor_for_minutes % 60;
        let seconds = Math.ceil(divisor_for_seconds);
    
        // TODO[AR]: padStart IE polyfill?
        return {          
          "m": minutes.toString().padStart(2, "0"),
          "s": seconds.toString().padStart(2, "0")
        };        
    }    

    startTimer() {
        if (this.state.seconds === 0) {
            this.setState({time: {
                m: '--',
                s: '--'
            }});
        } else if (this.timer === 0) {
            this.beep.play();
            this.timer = setInterval(this.countDown, 1000);
        }
    }

    countDown = () =>  {
        // Remove one second, set state so a re-render happens.
        let seconds = this.state.seconds - 1;
        this.setState({
            time: this.secondsToTime(seconds),
            seconds: seconds,
        });

        if (this.shouldBeep(seconds)) {
            this.beep.play();
        }        
        
        // Check if we're at zero.
        if (seconds === 0) { 
            this.handleGameLost();            
        }
    }

    handleGameLost = () => {
        this.explosion.play();
        this.props.onGameLost();
    }

    shouldBeep(seconds) {
        return seconds < 10 || // Every second for last 10 seconds
            (seconds < 60 && seconds % 10 === 0) || //Every 10 seconds under a minute
            (seconds % 60 === 0) // Every minute
    }

    render() {
        return (
            <div className="timer">
            		<p className="timer-countdown">
            			<span className="timer-countdown__mins">{this.state.time.m}</span>
            			<span className="timer-countdown__divider">:</span>
            			<span className="timer-countdown__secs">{this.state.time.s}</span>
            		</p>
	            <ul className="timer-controls">
	            		<li className="timer-control timer-control--explode">
	            			<button className="button" onClick={this.handleGameLost}>Explode</button>
	            		</li>
	            		<li className="timer-control timer-control--delay">
	            			<button className="button button--orange" aria-label="Delay"></button>
	            		</li>
	            		<li className="timer-control timer-control--disarm">
	            			<button className="button button--large button--green" onClick={this.props.onGameWon}>Disarm</button>
	            		</li>
	            </ul>	            
	        </div>
        );
    }
}

export default Timer;
