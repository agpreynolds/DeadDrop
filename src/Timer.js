import React, { Component } from 'react';

class Timer extends Component {
    
    constructor(props) {
        super(props);
        this.timer = 0;
        this.state = { time: {}, seconds: this.props.timerLength * 60 };
    }
    
    componentDidMount() {
        this.startTimer();
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
        if (this.timer == 0) {
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
        
        // Check if we're at zero.
        if (seconds == 0) { 
            clearInterval(this.timer);
            this.props.onGameLost();
        }
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
	            			<button className="button" onClick={this.props.onGameLost}>Explode</button>
	            		</li>
	            		<li className="timer-control timer-control--delay">
	            			<button className="button button--orange" aria-label="Delay"></button>
	            		</li>
	            		<li className="timer-control timer-control--disarm">
	            			<button className="button button--large button--green">Disarm</button>
	            		</li>
	            </ul>	            
	        </div>
        );
    }
}

export default Timer;
