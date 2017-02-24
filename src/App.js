import React, { Component } from 'react';
import './App.css';
import CountdownDisplay from './CountdownDisplay';

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
    this.countdown = this.countdown.bind(this);
  }

  // mount the component with default values and set counter to work time
  componentDidMount() {
    this.setState({
      secondsRemaining: 120,
      workTime: 120,
      breakTime: 60
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
        this.setState({
          isWorkTime: false,
          secondsRemaining: this.state.breakTime
        });
        this.startCountdown();
      } else if (this.state.secondsRemaining <= 0 && this.state.isWorkTime === false) {
        // if it's the end of break time set timer to workTime and start the countdown
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

  render() {
    return (
      <div className="App">
        <div>
          <button onClick={this.decrementWorkTime}>-</button>
          <span>{`Work Time - ${this.state.workTime / 60} minutes`}</span>
          <button onClick={this.incrementWorkTime}>+</button>
        </div>
        <div>
          <button onClick={this.decrementBreakTime}>-</button>
          <span>{`Break Time - ${this.state.breakTime / 60} minutes`}</span>
          <button onClick={this.incrementBreakTime}>+</button>
        </div>
        <div><CountdownDisplay seconds={this.state.secondsRemaining} /></div>
        <div><button onClick={this.startCountdown}>Start</button></div>
        <div><button onClick={this.pauseCountdown}>Pause</button></div>
      </div>
    );
  }
}

export default App;
