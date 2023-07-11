import {Component} from 'react'
import './index.css'

class Stopwatch extends Component {
  state = {minutes: 0, seconds: 0, secCount: '00', minCount: '00'}

  componentWillUnmount() {
    clearInterval(this.timerId)
  }

  onStart = () => {
    this.timerId = setInterval(this.tick, 1000)
  }

  onStop = () => {
    this.componentWillUnmount()
  }

  onReset = () => {
    this.componentWillUnmount()
    this.setState({minutes: 0, seconds: 0})
    this.setState({secCount: '00', minCount: '00'})
  }

  tick = () => {
    const {minutes, seconds} = this.state

    if (seconds === 59) {
      this.setState({seconds: 0})
      this.setState({secCount: '00'})
      this.setState(prevState => ({minutes: prevState.minutes + 1}))

      if (minutes < 10) {
        const min = '0'.concat(minutes)
        this.setState({minCount: min})
      } else {
        this.setState({minCount: minutes})
      }
    } else {
      this.setState(prevState => ({seconds: prevState.seconds + 1}))
      if (seconds < 10) {
        const sec = '0'.concat(seconds)
        this.setState({secCount: sec})
      } else {
        this.setState({secCount: seconds})
      }
    }
  }

  render() {
    const {minutes, seconds, minCount, secCount} = this.state
    console.log('0'.concat(1))
    return (
      <div className="background">
        <h1 className="heading">Stopwatch</h1>
        <div className="background1">
          <div className="background2">
            <img
              src="https://assets.ccbp.in/frontend/react-js/stopwatch-timer.png"
              className="image"
              alt="stopwatch"
            />
            <p className="para">Timer</p>
          </div>
          <h1 className="head">
            {minCount}:{secCount}
          </h1>
          <div className="background3">
            <button className="button1" type="button" onClick={this.onStart}>
              Start
            </button>
            <button className="button2" type="button" onClick={this.onStop}>
              Stop
            </button>
            <button className="button3" type="button" onClick={this.onReset}>
              Reset
            </button>
          </div>
        </div>
      </div>
    )
  }
}

export default Stopwatch
