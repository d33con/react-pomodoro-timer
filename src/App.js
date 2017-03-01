import React, { Component } from 'react';

import './css/App.css';
import CountdownDisplay from './CountdownDisplay';
import Button from './Button';
import ControlDisplay from './ControlDisplay';

class App extends Component {
  constructor(){
    super()
    this.state = {
      secondsRemaining: 0,
      breakTime: 0,
      workTime: 0,
      isWorkTime: true
    };
    this.incrementWorkTime = this.incrementWorkTime.bind(this);
    this.decrementWorkTime = this.decrementWorkTime.bind(this);
    this.incrementBreakTime = this.incrementBreakTime.bind(this);
    this.decrementBreakTime = this.decrementBreakTime.bind(this);
    this.startCountdown = this.startCountdown.bind(this);
    this.pauseCountdown = this.pauseCountdown.bind(this);
    this.resetCountdown = this.resetCountdown.bind(this);
    this.countdown = this.countdown.bind(this);
  }

  // mount the component with default values and set counter to work time
  componentDidMount() {
    this.setState({
      secondsRemaining: 1500,
      workTime: 1500,
      breakTime: 300
    });
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  // functions to control setting of workTime
  incrementWorkTime() {
    this.setState({
      workTime: this.state.workTime + 60,
      secondsRemaining: this.state.secondsRemaining + 60
    });
  }
  decrementWorkTime() {
    this.setState({
      workTime: this.state.workTime - 60,
      secondsRemaining: this.state.secondsRemaining - 60
    });
  }

  // functions to control setting of breakTime
  incrementBreakTime() {
    this.setState({breakTime: this.state.breakTime + 60});
  }
  decrementBreakTime() {
    this.setState({breakTime: this.state.breakTime - 60});
  }

  // countdown function
  countdown() {
    this.setState({secondsRemaining: this.state.secondsRemaining - 1});
  }

  // function to handle switching between work & break time and run the countdown
  startCountdown() {
    // clear any running timers
    clearInterval(this.interval);

    // run this function every second
    this.interval = setInterval(() => {
      if (this.state.secondsRemaining <= 0 && this.state.isWorkTime === true) {
        // if it's the end of work time set timer to breakTime and start the countdown
        document.getElementById("notification").play(); //play a sound
        this.setState({
          isWorkTime: false,
          secondsRemaining: this.state.breakTime
        });
        this.startCountdown();
      } else if (this.state.secondsRemaining <= 0 && this.state.isWorkTime === false) {
        // if it's the end of break time set timer to workTime and start the countdown
        document.getElementById("notification").play(); //play a sound
        this.setState({
          isWorkTime: true,
          secondsRemaining: this.state.workTime
        });
        this.startCountdown();
      }
      // otherwise continue counting down
      this.countdown()
    }, 1000);
  }

  // pause function
  pauseCountdown() {
    clearInterval(this.interval);
  }

  // reset function
  resetCountdown() {
    clearInterval(this.interval);
    if(this.state.isWorkTime) {
      this.setState({secondsRemaining: this.state.workTime});
    } else {
      this.setState({secondsRemaining: this.state.breakTime});
    }
  }

  render() {
    return (
      <div className="App">
        <audio id="notification" src="http://res.cloudinary.com/dyqqt0ksz/video/upload/v1442467945/Calendar_Notification_kx8gnj.ogg" preload="auto"></audio>
        <div className="heading">Pomodoro Timer</div>
        <div className="controls">
          <div className="control-heading">Work Time</div>
          <Button handleClick={this.decrementWorkTime} label={"-"} />
          <ControlDisplay time={this.state.workTime} />
          <Button handleClick={this.incrementWorkTime} label={"+"} />
        </div>
        <div className="controls">
          <div className="control-heading">Break Time</div>
          <Button handleClick={this.decrementBreakTime} label={"-"} />
          <ControlDisplay time={this.state.breakTime} />
          <Button handleClick={this.incrementBreakTime} label={"+"} />
        </div>
        <CountdownDisplay 
          seconds={this.state.secondsRemaining} 
          isWorkTime={this.state.isWorkTime}
          workTime={this.state.workTime}
          breakTime={this.state.breakTime} />
        <div className="timer-controls">
          <Button handleClick={this.startCountdown} label={"Start"} />
          <Button handleClick={this.pauseCountdown} label={"Pause"} />
          <Button handleClick={this.resetCountdown} label={"Reset"} />
        </div>
        <hr/>
        <div className="footer">Built by <a href="https://github.com/d33con/">Oliver Bullen</a></div>
      </div>
    );
  }
}

export default App;
