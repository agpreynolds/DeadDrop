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
        }
    }

    render() {
        return (
            <p>{this.state.time.m}:{this.state.time.s}</p>
        );
    }
}

export default Timer;
