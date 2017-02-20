import React, { Component } from 'react';
import './App.css';
import CountdownDisplay from './CountdownDisplay';
import EndTimeDisplay from './EndTimeDisplay';

class App extends Component {
  constructor(){
    super()
    this.state = {
      endTime: 0,
      seconds: 0
    };
    this.incrementWorkTime = this.incrementWorkTime.bind(this);
    this.decrementWorkTime = this.decrementWorkTime.bind(this);
    this.startCountdown = this.startCountdown.bind(this);
    this.pauseCountdown = this.pauseCountdown.bind(this);
    this.countdown = this.countdown.bind(this);
  }

  componentDidMount() {
    this.setState({seconds: 900});
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  incrementWorkTime() {
    this.setState({seconds: this.state.seconds + 60});
  }
  decrementWorkTime() {
    this.setState({seconds: this.state.seconds - 60});
  }

  countdown() {
    this.setState({seconds: this.state.seconds - 1});
  }

  startCountdown() {
    clearInterval(this.interval);

    const now = Date.now();
    let endTime = now + (this.state.seconds * 1000);
    this.setState({endTime: endTime});
    this.interval = setInterval(() => {
      if (this.state.seconds < 0) {
        clearInterval(this.interval);
      }
      this.countdown()
    }, 1000);
  }

  pauseCountdown() {
    clearInterval(this.interval);
  }

  render() {
    return (
      <div className="App">
        <div>
          <button onClick={this.incrementWorkTime}>+</button>
          <span>{`Work Time - ${this.state.seconds / 60} minutes`}</span>
          <button onClick={this.decrementWorkTime}>-</button>
        </div>
        <div>
          <button onClick={this.incrementWorkTime}>+</button>
          <span>{`Break Time - ${this.state.seconds / 60} minutes`}</span>
          <button onClick={this.decrementWorkTime}>-</button>
        </div>
        <div><CountdownDisplay seconds={this.state.seconds} /></div>
        <div><button onClick={this.startCountdown}>Start</button></div>
        <div><button onClick={this.pauseCountdown}>Pause</button></div>
        <div><EndTimeDisplay time={this.state.endTime}/></div>
      </div>
    );
  }
}

export default App;
