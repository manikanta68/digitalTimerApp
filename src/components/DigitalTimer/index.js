import {Component} from 'react'
import './index.css'

class DigitalTimer extends Component {
  state = {time: 25, text: true, running: 0}

  componentDidMount() {
    const {time} = this.state
    this.count = time * 60
    this.Id = setInterval(() => {
      console.log(this.count)
      this.count -= 1
      const minutes = Math.floor(this.count / 60)
      const seconds = Math.floor(this.count % 60)
      console.log(minutes)
      console.log(seconds)
      this.setState({
        running: `${minutes < 10 ? `0${minutes}` : minutes}: ${
          seconds < 10 ? `0${seconds}` : seconds
        }`,
      })
    }, 1000)
  }

  componentWillUnmount() {
    console.log('unmount')
    clearInterval(this.Id)
  }

  timer = () => {
    console.log('hi')
    const {time, text} = this.state
    this.setState({text: !text})
    this.setState({running: time})
  }

  increment = () => {
    const {text} = this.state
    if (text === true) {
      this.setState(prevState => ({time: prevState.time + 1}))
    }
  }

  decrement = () => {
    const {text} = this.state
    if (text === true) {
      this.setState(prevState => ({time: prevState.time - 1}))
    }
  }

  onReset = () => {
    this.setState({running: 25, text: false})
  }

  render() {
    const {time, text, running} = this.state
    return (
      <div className="container">
        <h1 className="heading">Digital Timer</h1>
        <div className="items-container">
          <div className="image-container">
            <div className="running-timer">
              <h1 className="timer">{text ? '25:00' : running}</h1>
              <p className="timer-text">{text ? 'Paused' : 'Running'}</p>
            </div>
          </div>
          <div className="buttons-container">
            <div className="buttons-arrange">
              <button onClick={this.timer} className="button" type="button">
                <img
                  className="icons"
                  src={
                    text
                      ? 'https://assets.ccbp.in/frontend/react-js/play-icon-img.png'
                      : 'https://assets.ccbp.in/frontend/react-js/pause-icon-img.png'
                  }
                  alt={text ? 'play icon' : 'pause icon'}
                />
                <p className="icon-text">{text ? 'Start' : 'Pause'}</p>
              </button>
              <button onClick={this.onReset} className="button" type="button">
                <img
                  className="icons"
                  src="https://assets.ccbp.in/frontend/react-js/reset-icon-img.png"
                  alt="reset icon"
                />
                <p className="icon-text">Reset</p>
              </button>
            </div>
            <div className="increase-decrease-container">
              <p>Set Timer limit</p>
              <div className="increase-decrease">
                <button
                  onClick={this.decrement}
                  className="minus-button"
                  type="button"
                >
                  -
                </button>
                <div className="initial-container">
                  <p className="initial-time">{time}</p>
                </div>
                <button
                  onClick={this.increment}
                  className="plus-button"
                  type="button"
                >
                  +
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default DigitalTimer
